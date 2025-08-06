"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { FiPlus, FiMic, FiSend, FiImage, FiGlobe } from "react-icons/fi";
import { ThumbsDown, Volume2, Sparkles, Edit3, Share2, RotateCcw, ThumbsUp } from "lucide-react";
import { motion } from "framer-motion";
import TextareaAutosize from "react-textarea-autosize";
import Sidebar from "../components/Sidebar";
import { emitter } from "@/utils/eventBus";
import { handleNewChatSession, sendChat, updateSessionChat } from "@/utils/chat";
import axios from "axios";
import MenuButton from "../components/MenuButton";
import { useGlobalContext } from "@/context/GlobalContext";
import { useLogout } from "@/utils/auth";
import UserSkeleton from "./Components/UserSkeleton";
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import AnimatedButton from "./Components/AnimatedButton";
import remarkGfm from 'remark-gfm';
import CircleLoader from "../components/CircleLoader";
import TypingDots from "../components/TypingDots";
import rehypeRaw from "rehype-raw";
import { chain } from "mathjs";
import ChatBubble from "./Components/ChatBubble";
import Image from "next/image";

export default function ChatClient({ session_id = -1 }) {
    const [message, setMessage] = useState({
        content: "",
        tools: null
    });
    const [chats, setChats] = useState([]);
    const [user, setUser] = useState(null);
    const [chatLoading, setChatLoading] = useState(false);
    const bottomRef = useRef(null);
    const router = useRouter();
    const { current, setCurrent, screen, setReady, setLoading, loading, setSessions, sessions } = useGlobalContext();

    const [placeholder, setPlaceholder] = useState("")

    useEffect(() => {
        if (session_id !== -1) {
            // console.log("Hello, World!", session_id)
            setCurrent(p => ({
                ...p,
                session_id: session_id
            }))
            loadChat(session_id);
        }

    }, []);

    useEffect(() => {
        const handler = () => {
            setChats([])
            setCurrent(prev => ({
                ...prev,
                session_id: -1
            }));
        };
        emitter.on("clearChats", handler);
        emitter.on("changeSession", loadChat);

        return () => {
            emitter.off("changeSession", loadChat);
            emitter.off("clearChats", handler)
        }
            ;
    }, []);


    useEffect(() => {
        if (bottomRef.current) {
            bottomRef.current.scrollIntoView({ behavior: "smooth" });
        }


        if (chats && current.session_id !== -1) {
            if (chats?.length % 20 === 0) {
                handleNewTitle(current.session_id)
            }
        }


    }, [chats]);



    const handleLogout = useLogout();
    const fetchUser = () => {
        fetch("/auth/user")
            .then(async res => {
                const text = await res.text();

                try {
                    const data = JSON.parse(text);
                    if (data && !data.error) {
                        setUser(data);
                    } else {
                        handleLogout();
                    }
                } catch (e) {
                    console.error("JSON Parse Error:", e);
                    console.error("Response was:", text);
                    handleLogout();
                } finally {
                    setReady(p => ({
                        ...p,
                        user: true,
                    }))
                }
            })
            .catch(err => {
                console.error("Fetch Error:", err)
                handleLogout();
            });
    }
    useEffect(() => {
        fetchUser();
    }, []);

    const loadChat = async (id) => {
        console.log("Loading Chat")
        // setChats([]);
        const response = await fetch("/api/session/history", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ session_id: id }),
        });

        if (!response.ok) {
            console.error("Failed to fetch chat history");
            return;
        }

        const data = await response.json();
        setChats(p => data)
    };
    const updateSessionList = () => {
        if (sessions?.length > 0) {
            setSessions(prev => {
                if (!current.session_id) return prev;

                const updated = [...prev];
                const index = updated.findIndex(s => s.uuid === current.session_id);

                if (index === -1 || index === 0) return prev; // not found or already first

                const [found] = updated.splice(index, 1);
                updated.unshift(found);

                return updated;
            });
        }
    }


    const storeInput = () => {
        setChats(prev => [...prev, { role: "user", content: message.content, type: 0 }]);
        setMessage(
            p => ({
                ...p, content: ""
            })
        );
    };

    const handleNewTitle = async (sessionId) => {
        setLoading(p => ({
            ...p,
            id: sessionId,
            chat: true
        }))
        const titleData = {
            content: `Generate short title for the new chat session, the format of your generated title is -> title*actual_title, the title should be 5 words max, and no other respond than title. content: ${message.content}`,
            session_id: sessionId,
        };
        try {
            const res = await axios.put(`/api/chat/title`, titleData, {
                withCredentials: true,
                headers: { "Content-Type": "application/json" },
            });

            const generatedTitle = res.data.pesan.split("*")[1];
            setCurrent(p => ({
                ...p,
                title: generatedTitle
            }))
            await updateSessionChat(sessionId, {
                title: generatedTitle,
                status: "active",
            });


        } catch (e) {
            console.error("Failed to update session title:", e);
        } finally {
            setLoading(p => ({
                ...p,
                chat: false
            }))
        }
    }

    const getRespond = async () => {

        if (!message.content.trim()) {
            console.warn("Message is blank.");
            return;
        }

        setChatLoading(true);
        storeInput();
        try {
            let sessionId = current.session_id;
            let isNewSession = false;

            if (chats.length === 0) {
                const sessionRespond = await handleNewChatSession();
                sessionId = sessionRespond.uuid;

                setCurrent(prev => ({ ...prev, session_id: sessionId }));
                isNewSession = true;
            }

            setLoading(p => ({
                ...p,
                id: sessionId,
                chat: true
            }));

            setChats((prev) => [...prev, { role: "assistant", content: "", type: 0 }]);


            try {
                const body = await getChat(message, sessionId); // body adalah ReadableStream

                const reader = body.getReader();
                const decoder = new TextDecoder();
                let assistantMessage = "";
                let chainedData = null;
                let currentId = null;

                while (true) {
                    const { value, done } = await reader.read();
                    if (done) break;

                    const chunk = decoder.decode(value);
                    console.log(chunk)

                    // Pisahkan konten biasa dan chained

                    if (chunk.includes("[ID]")) {
                        const [a, b] = chunk.split("[ID]");
                        const [current_id, last_chunk] = b.split("[IDEND]")
                        currentId = parseInt(current_id);

                        assistantMessage += a.trim();;

                    } else {
                        assistantMessage += chunk;
                    }

                    setChats((prev) => {
                        const updated = [...prev];
                        updated[updated.length - 1] = {
                            role: "assistant",
                            content: assistantMessage,
                            type: 0,
                            // data: chainedData, // pasang di sini
                        };
                        // console.log(updated[updated.length - 1])
                        return updated;
                    });
                }

                if (currentId) {
                    console.log("id:", currentId)
                    const chatData = await fetch('/api/data', {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ id: parseInt(currentId), column: "data" }),
                    });

                    try {
                        // idk why this didnt trigger re render
                        // the display didnt updated to show the data
                        const result = await chatData.json();
                        console.log(result)
                        setChats((prev) => {
                            const updated = [...prev];
                            updated[updated.length - 1] = {
                                ...updated[updated.length - 1],
                                data: result.data?.data,
                                metadata: result.data?.metadata
                            };
                            console.log(updated)
                            return updated;
                        });
                    } catch (e) {
                        console.log(e)
                    }

                }



                setChatLoading(false);
                setPlaceholder("")


            } catch (err) {
                // Tangani error sebagai pesan bot
                setChats((prev) => [...prev, { role: "assistant", content: `❌ ${err.message}` }]);
            }



            window.history.replaceState(null, '', `/chat/session/${sessionId}`);

            if (isNewSession) {
                await handleNewTitle(sessionId);
            }
        } catch (error) {
            console.error("Error:", error.response?.data || error.message);
        } finally {
            setChatLoading(false);
            updateSessionList();

            setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: "smooth" }), 100);

        }
    };

    const getChat = async (msg, sessionId) => {
        console.log("Getting Chat!")
        const current_datetime = new Date().toISOString()
        let data = {
            message: msg.content,
            role: "user",
            user: user?.full_name?.split(" ")[0] || "guest",
            config: {
                scope: sessionId,
                current_datetime: current_datetime,
                tools: message.tools,
                additionalContext: "",
                chatType: 0,
            }
        };
        const met = await fetch("/api/chat/tools", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                ...data,
                message: msg.content,
                last_chat: chats
                    .filter(o => o.role === "user")
                    .slice(-3)
                    .map(o => ({
                        role: "user",
                        content: o.content,
                    }))
            }),
        });

        const metRes = await met.json();
        data.config = {
            ...data.config,
            metadata: metRes,
        }


        if (metRes.tools === "null") {
            setPlaceholder(p => (JSON.parse(metRes.data).pesan))
        }

        // if the logic is present, below code will be ignored
        const response = await sendChat(data);
        return response;
    };


    const handleKeyPress = useCallback((e) => {
        // console.log(message)
        if (e.key === "Enter" && !e.shiftKey && !screen.narrow) {
            e.preventDefault();
            const value = message.content


            if (!value) {
                return;
            }
            setMessage(p => ({
                ...p,
                content: value
            }));
            getRespond(value);
        }
    }, [screen, message]);

    function cleanAssistantContent(content) {
        return content
            .replace(/\*\*(.*?)\*\*/g, '$1')
            .replace(/\*(.*?)\*/g, '$1')
            .trim();
    }




    return (
        <div className="flex bg-gradient-to-b from-fuchsia-950/90 via-blue-950/90 to-gray-950/90 h-[100dvh]">
            {/* Sidebar */}
            <Sidebar user={user} />
            {/* Main Content */}
            <div className="flex-1 flex flex-col relative   ">
                {/* Chat Display */}
                <div className="fixed bg-gradient-to-b from-black/20 via-black/10 to-transparent w-full z-[100]">
                    <MenuButton />
                    <Image
                        src="/logo-clean-transparent.png"
                        alt="Logo"
                        width={50}
                        height={50}
                    />
                </div>

                <div className="flex-1 flex  flex-col  items-center justify-top py-36 px-5  overflow-y-auto custom-scrollbar  ">
                    {chats.length === 0 ?
                        user ? (
                            <h1 className="text-3xl md:text-4xl font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-10">
                                Hello, {user.full_name?.split(" ")[0] || "Guest"}
                            </h1>
                        ) : (
                            <UserSkeleton
                                height={"40px"}
                                width={"250px"} />
                        ) : (
                            <div className=" flex flex-col items-center justify-start lg:max-w-[700px] lg:min-w-[700px]">

                                <div className=" flex flex-col gap-5  ">
                                    {chats.map((chat, index) => {
                                        if (chat?.type === 0) {
                                            const markdown = String.raw`${chat.content}`
                                            // console.log(chat)
                                            return (
                                                <div key={index} >


                                                    <ChatBubble
                                                        chat={chat}
                                                        index={index}
                                                        isLatest={index === chats.length - 1}
                                                        chatLoading={chatLoading}
                                                        placeholder={placeholder}
                                                    />
                                                </div>
                                            );
                                        }

                                        return null;
                                    })}

                                </div>
                                {/* <div className="mt-10 flex flex-col items-end w-full min-w-[300px] px-1 ">
                                    {(chatLoading) &&
                                        <div className="animate-pulse w-full  self-end">
                                            <div className="h-4 bg-white/20 rounded w-3/4 mb-2"></div>
                                            <div className="h-4 bg-white/20 rounded w-1/2 mb-2"></div>
                                            <div className="h-4 bg-white/20 rounded w-2/3"></div>
                                        </div>
                                    }
                                </div> */}
                            </div>
                        )}
                </div>
                {/* Input Box at Bottom */}
                <div className="absolute bottom-6 w-full flex justify-center">
                    <div className="w-[90%] md:w-[60%] lg:w-[50%] bg-gray-800/60 backdrop-blur-lg border border-gray-700 rounded-2xl px-4 py-3 flex flex-col items-start gap-0 shadow-lg hover:border-gray-500 transition-all duration-300">
                        {/* Left Add Button */}
                        <div className="flex items-center w-full">
                            {/* <Image
                                src="/logo-clean-transparent.png"
                                alt="Logo"
                                width={50}
                                height={50}
                                className={`
                                    transition-all duration-500
                                    ${chatLoading ? "opacity-100 w-fit rotate-animation" : "opacity-0 w-0 scale-75"}
                                `}
                            /> */}

                            <TextareaAutosize
                                value={message.content}
                                onChange={(e) => setMessage(
                                    p => ({
                                        ...p,
                                        content: e.target.value
                                    }))}
                                onKeyDown={handleKeyPress}
                                minRows={1}
                                maxRows={6}
                                placeholder="Ask something..."
                                className="flex items-center px-5 py-2 resize-none bg-transparent w-full outline-none text-white placeholder-gray-400 text-sm md:text-base custom-scrollbar"
                            />
                        </div>
                        <div className="flex items-center justify-between w-full">
                            <div>
                                <button className={`p-2 hover:bg-white/10 rounded-full transition`}>
                                    <FiPlus size={20}
                                        className="text-gray-300" />
                                </button>
                                {/* Web Search Button */}
                                <button
                                    onClick={() =>
                                        setMessage((p) => ({
                                            ...p,
                                            tools: p.tools !== "web-search" ? "web-search" : null,
                                        }))
                                    }
                                    className={`p-2 rounded-full transition-all duration-300 ease-in-out transform ${message.tools === "web-search"
                                        ? "bg-white/20 scale-105"
                                        : "hover:bg-white/10"
                                        }`}
                                >
                                    <FiGlobe
                                        size={20}
                                        className={`text-gray-300 transition-colors duration-300 ${message.tools === "web-search" ? "text-white" : ""
                                            }`}
                                    />
                                </button>

                            </div>
                            <div>
                                <button className="p-2 hover:bg-white/10 rounded-full transition">
                                    <FiImage size={20} className="text-gray-300" />
                                </button>

                                {/* Mic */}
                                <button className="p-2 hover:bg-white/10 rounded-full transition">
                                    <FiMic size={20} className="text-gray-300" />
                                </button>

                                {/* Send */}
                                <button
                                    onClick={getRespond}
                                    disabled={chatLoading}
                                    className={`p-2 rounded-full transition-all duration-300 shadow-lg bg-gradient-to-br from-purple-500 via-fuchsia-700 to-pink-500 hover:from-purple-600 hover:via-fuchsia-800 hover:to-pink-600 backdrop-blur-md bg-opacity-80 border border-white/20 ${chatLoading ? "opacity-70 cursor-not-allowed" : ""}`}
                                >
                                    {chatLoading ? (
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                    ) : (
                                        <FiSend size={18} className="text-white drop-shadow-md" />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <div ref={bottomRef}></div>
        </div >
    );
}
