'use client'
import { useEffect, useState } from "react";
import {
    FiPlus,
    FiSearch,
    FiFolder,
    FiSettings,
    FiHelpCircle,
    FiChevronDown,
    FiChevronLeft,
    FiChevronRight,
    FiLogOut
} from "react-icons/fi";
import ChatItem from "./ChatItem";
import { useLogout } from "../../utils/auth";
import { emitter } from "../../utils/eventBus";
import { useGlobalContext } from "@/context/GlobalContext";
import UserSkeleton from "../chat/Components/UserSkeleton";

export default function Sidebar({ user }) {
    const [openMenu, setOpenMenu] = useState(null);
    const handleLogout = useLogout();

    const { sessions, setSessions, current, setCurrent, sidebar, setSidebar, screen, setScreen, loading, setLoading } = useGlobalContext();


    const toggleMenu = (index) => {
        setOpenMenu(openMenu === index ? null : index);
    };

    const clearChats = () => emitter.emit("clearChats");

    const handleNewChat = () => {
        setCurrent(p => ({
            ...p,
            session_id: -1,
        }))
        setLoading(p => ({ ...p, chat: false, id: null }));

        clearChats();
        window.history.replaceState(null, '', `/chat`);

    }
    // ✅ Collapse automatically on small screens (<600px)
    useEffect(() => {
        if (window.innerWidth > 700) {
            setSidebar(p => ({
                ...p,
                collapsed: false
            }));
        }

        const handleResize = () => {
            if (window.innerWidth < 900) {
                setSidebar(p => ({
                    ...p,
                    collapsed: true
                }))
            }


            if (window.innerWidth < 700) {
                setScreen(p => ({
                    ...p,
                    "narrow": true
                }));
            } else {
                setScreen(p => ({
                    ...p,
                    "narrow": false
                }))
            }
        };

        const handleShow = () => setSidebar(p => ({
            ...p,
            collapsed: !p.collapsed,
        }));
        emitter.on("showSidebar", handleShow);


        handleResize(); // Initial check
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
            emitter.off("showSidebar", handleShow);

        }

    }, []);


    useEffect(() => {
        setScreen(p => ({
            ...p,
            "narrow": window.innerWidth < 700
        }))

        const handleResize = () => {
            setScreen(p => ({
                ...p,
                "narrow": window.innerWidth < 700
            }))
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {

        setLoading(p => ({ ...p, id: current.session_id }))
        const fetchChats = async () => {
            try {
                const res = await fetch("/api/session/last", {
                    method: "POST",
                });

                if (!res.ok) {
                    throw new Error("Gagal mengambil data");
                }

                const data = await res.json();

                try {
                    setSessions(data);

                } catch (e) {

                } finally {
                    setLoading(p => ({ ...p, chat: false, }));

                }
            } catch (error) {
                console.error("Error fetching chats:", error);
            } finally {

            }
        };

        const fetchLastTitle = () => {
            if (current.title !== "") {
                setSessions(prevChats =>
                    prevChats.map(chat =>
                        chat.uuid === current.session_id
                            ? { ...chat, title: current.title }
                            : chat
                    )
                );

                setCurrent(p => ({ ...p, title: "" }))
            }
        };

        fetchChats();
        fetchLastTitle();
    }, [current]);

    useEffect(() => {
        if (loading?.id !== current?.session_id) {
            setLoading(p => ({ ...p, chat: false, }));
        }
    }, [sessions, current]);

    return (
        <div
            className={`${sidebar.collapsed ? "w-[80px] " : "w-80 "} ${screen.narrow ? `fixed ${!sidebar.collapsed ? "left-0" : "left-[-80px]"} ` : "static left-0"} h-full transition-all duration-500 ease-in-out  top-0  z-50`}>
            <div className={`h-full bg-gradient-to-b from-gray-900/50 via-gray-950/70 to-black/50 text-white bg-white/5 p-4 backdrop-blur-md border border-white/20 pb-10 flex flex-col transition-all duration-300 ease-in-out ${sidebar.collapsed ? "w-[80px]" : "w-80"}`}>
                {/* Top Section */}
                {sidebar.collapsed && (<div className="flex items-center justify-center gap-3">
                    <img
                        src={user?.avatar_url || "https://randomuser.me/api/portraits/men/32.jpg"}
                        alt="User"
                        className="w-8 h-8 rounded-full"
                    />
                </div>)}
                <div className="mt-4 flex items-center gap-3 border-b border-white/20 pb-3 justify-between transition-all duration-500 ease-in-out">
                    {!sidebar.collapsed && (
                        <div className="flex items-center gap-3">
                            <img
                                src={user?.avatar_url || "https://randomuser.me/api/portraits/men/32.jpg"}
                                alt="User"
                                className="w-8 h-8 rounded-full"
                            />
                            <div>
                                {
                                    user ? (
                                        <p className="text-sm font-semibold whitespace-nowrap overflow-hidden text-ellipsis">{user?.full_name || "Guest"}</p>
                                    ) :
                                        (
                                            <UserSkeleton
                                                height={"20px"}
                                                width={"40px"} />
                                        )
                                }
                                <p className="text-xs text-gray-400">Free</p>
                            </div>
                        </div>
                    )}
                    <button
                        onClick={() => setSidebar(p => ({
                            ...p,
                            collapsed: !p.collapsed
                        }))}
                        className={`p-2 hover:bg-white/10 rounded-lg transition ${sidebar.collapsed && "justify-center flex items-center w-full"} `}
                    >
                        {sidebar.collapsed ? (
                            <FiChevronRight size={18} className="text-white" />
                        ) : (
                            <FiChevronLeft size={18} className="text-white" />
                        )}
                    </button>
                </div>

                {/* Main Menu */}
                <div className="flex flex-col gap-2 my-3 text-sm">
                    <button
                        onClick={handleNewChat}
                        className={`whitespace-nowrap overflow-hidden text-ellipsis flex items-center gap-2 px-3 py-2 hover:bg-white/10 rounded-lg transition ${sidebar.collapsed && "justify-center"}`}>
                        <FiPlus size={18} className="text-white" />
                        {!sidebar.collapsed && "New Chat"}
                    </button>

                    {/* Toggle Button */}
                    <button
                        onClick={() =>
                            setSidebar(p => ({
                                ...p,
                                more: !p.more
                            }))
                        }
                        className={`whitespace-nowrap overflow-hidden text-ellipsis flex items-center gap-2 px-3 py-2 hover:bg-white/10 rounded-lg transition ${sidebar.collapsed && "justify-center"}`}>

                        {!sidebar.collapsed && <span className="whitespace-nowrap overflow-hidden text-ellipsis">More Options</span>}
                        <FiChevronDown
                            size={18}
                            className={`w-fit text-white transition-transform duration-300 ${sidebar.more ? "rotate-180" : "rotate-0"
                                }`}
                        />
                    </button>

                    {/* Hidden Menu */}
                    <div
                        className={`flex flex-col gap-2 overflow-hidden transition-all duration-500 ${sidebar.more
                            ? "max-h-44 opacity-100 mt-2"
                            : "max-h-0 opacity-0"
                            }`}
                    >
                        <button className={` ${sidebar.collapsed && "justify-center"} whitespace-nowrap overflow-hidden text-ellipsis flex items-center gap-2 px-3 py-2 hover:bg-white/10 rounded-lg transition`}>
                            <FiSearch size={18} className="text-white" />
                            {!sidebar.collapsed && "Search Chats"}
                        </button>
                        <button className={` ${sidebar.collapsed && "justify-center"} whitespace-nowrap overflow-hidden text-ellipsis flex items-center gap-2 px-3 py-2 hover:bg-white/10 rounded-lg transition`}>
                            <FiFolder size={18} className="text-white" />
                            {!sidebar.collapsed && "Library"}
                        </button>
                        <button className={` ${sidebar.collapsed && "justify-center"} whitespace-nowrap overflow-hidden text-ellipsis flex items-center gap-2 px-3 py-2 hover:bg-white/10 rounded-lg transition`}>
                            <FiSettings size={18} className="text-white" />
                            {!sidebar.collapsed && "Settings"}
                        </button>
                        <button className={` ${sidebar.collapsed && "justify-center"} whitespace-nowrap overflow-hidden text-ellipsis flex items-center gap-2 px-3 py-2 hover:bg-white/10 rounded-lg transition`}>
                            <FiHelpCircle size={18} className="text-white" />
                            {!sidebar.collapsed && "Help"}
                        </button>
                        {/* ✅ Logout Button */}
                        <button
                            onClick={handleLogout}
                            className={`${sidebar.collapsed && "justify-center"
                                } whitespace-nowrap overflow-hidden text-ellipsis flex items-center gap-2 px-3 py-2 hover:bg-red-500/20 rounded-lg transition`}
                        >
                            <FiLogOut size={18} className="text-red-400" />
                            {!sidebar.collapsed && <span className="text-red-400">Logout</span>}
                        </button>
                    </div>
                </div>

                {/* Divider */}
                <hr className="border-white/20 mb-4" />

                {/* Chats Section */}
                {!sidebar.collapsed && <h3 className="text-gray-400 text-sm mb-2">Chats</h3>}
                <div
                    className={`flex-1 ${screen.narrow ? "overflow-y-auto" : "overflow-hidden hover:overflow-y-auto custom-scrollbar"}   transition-all duration-500 ${sidebar.collapsed ? "opacity-0" : "opacity-100 "
                        }`}
                >
                    <ul className="flex flex-col gap-2 text-sm">
                        {sessions ? (
                            sessions.map((chat, index) => (
                                <ChatItem
                                    data={chat}
                                    key={index}
                                    index={index}
                                    openMenu={openMenu}
                                    toggleMenu={toggleMenu}
                                    onClick={() => {
                                        setLoading(p => ({
                                            ...p,
                                            chat: true,
                                            id: chat.id
                                        }))
                                    }}
                                    loading={loading}
                                />
                            ))
                        ) : (
                            Array.from({ length: 10 }).map((_, index) => (
                                <li key={index}>
                                    <UserSkeleton height="25px" width="100%" />
                                </li>
                            ))
                        )}
                    </ul>

                </div>
            </div>
        </div >
    );
}
