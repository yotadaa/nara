import React, { useEffect } from "react";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import 'katex/dist/katex.min.css'; // for rendering math
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

import {
    ThumbsUp,
    ThumbsDown,
    Volume2,
    Sparkles,
    Edit3,
    Share2,
    RotateCcw,
} from "lucide-react";

import TypingDots from "@/app/components/TypingDots";
import AnimatedButton from "./AnimatedButton";

function ChatBubble({ chat, index, isLatest, chatLoading, placeholder }) {
    const markdown = String.raw`${chat.content}`;

    const isUser = chat?.role === "user";

    useEffect(() => {
        console.log(chat?.metadata?.tools);
    }, []);

    return (
        <div
            key={index}
            className={`relative flex flex-col lg:min-w-[500px] min-w-[300px] w-full bg-transparent ${isUser
                ? "self-end"
                : "self-end w-full relative px-4 py-5 -left text-white"
                }`}
        >

            {/* {!isUser && (
                <div className="-z-50 absolute inset-0 bg-gradient-to-br from-purple-500/40 to-pink-500/20 blur-3xl rounded-xl"></div>
            )} */}

            {/* <div className="inset-0 bg-gradient-to-br from-purple-500/40 to-pink-500/20 blu"> */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className={`${isUser
                    ? "max-w-[500px] relative px-4 py-2 self-end rounded-xl rounded-tr-none text-left bg-white/10  border border-white/20 shadow-lg text-white"
                    : ""
                    }`}
            >

                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/40 to-pink-500/20 blur-3xl  rounded-xl"></div>
                <div className="markdown prose prose-invert max-w-none w-full ">
                    {(chat.role === "assistant" && chatLoading && isLatest) && (
                        <>
                            <TypingDots /> {placeholder}
                        </>
                    )}
                    <div className="markdown   backdrop-blur-sm">

                        {chat.role === "assistant" ? (
                            <ReactMarkdown
                                remarkPlugins={[remarkGfm, remarkMath]}
                                rehypePlugins={[rehypeRaw, rehypeKatex]}
                                components={{
                                    code({ inline, className, children, ...props }) {
                                        const match = /language-(\w+)/.exec(className || '');
                                        return !inline && match ? (
                                            <SyntaxHighlighter
                                                style={oneDark}
                                                language={match[1]}
                                                PreTag="div"
                                                {...props}
                                                className="rounded-md text-xs sm:text-sm custom-scrollbar bg-transparent"
                                            >
                                                {String(children).replace(/\n$/, '')}
                                            </SyntaxHighlighter>
                                        ) : (
                                            <code className="bg-gray-800 px-1 py-0.5 rounded">{children}</code>
                                        );
                                    },
                                    a: ({ node, ...props }) => (
                                        <a {...props} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline" />
                                    ),
                                    div({ node, ...props }) {
                                        // Optional: extra styling on block-level divs
                                        return <div className="max-w-full overflow-x-auto">{props.children}</div>;
                                    },
                                }}
                            >
                                {markdown}
                            </ReactMarkdown>
                        ) : (
                            <span className="max-w-[300px]">{markdown}</span>
                        )}
                    </div>

                    {chat.role === "assistant" && (chat?.data != [null] || chat?.data?.length > 0) &&
                        <>
                            {chat?.metadata?.tools === "scientific-journal-search" && (
                                <FetchJournal chat={chat}></FetchJournal>
                            )}
                            {chat?.metadata?.tools === "video-search" && (
                                <FetchVideo chat={chat}></FetchVideo>
                            )}
                            {
                                chat?.metadata?.tools === "image-search" && (
                                    <FetchImage chat={chat}></FetchImage>
                                )
                            }
                        </>}
                </div>

                {chat.role === "assistant" && (
                    <div className="flex items-center gap-4 mt-3 text-white/70 text-xl">
                        <AnimatedButton Icon={ThumbsUp} />
                        <AnimatedButton Icon={ThumbsDown} />
                        <AnimatedButton Icon={Volume2} />
                        <AnimatedButton Icon={Sparkles} />
                        <AnimatedButton Icon={Edit3} />
                        <AnimatedButton Icon={Share2} />
                        <AnimatedButton Icon={RotateCcw} />
                    </div>
                )}
            </motion.div>
            {/* <div className="absolute inset-0 bg-gradient-to-br from-purple-500/40 to-pink-500/20 blur-3xl rounded-xl"></div> */}

        </div>
    );
};

export default React.memo(ChatBubble);


function FetchJournal({ chat }) {
    return (
        <div className="flex flex-col max-h-[400px] overflow-y-scroll custom-scrollbar px-3 my-3 py-3 rounded-2xl backdrop-blur-lg shadow-md border border-gray-700 bg-black/20">
            {chat.data.data.map((obj, ind) => (
                <div
                    key={ind}
                    className="p-2 space-y-1 bg-gray-800/60 backdrop-blur-lg border border-gray-700 rounded-2xl px-4 py-3 my-1 flex flex-col items-start shadow-lg hover:border-gray-500 transition-all duration-300 gap-0"
                >

                    <a href={obj.pdf} target="_blank" rel="noopener noreferrer">
                        <h2 className="transition-all duration-300 ease-in-out text-base font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 py-0 hover:opacity-80">
                            {obj.title}
                        </h2>
                    </a>
                    {obj.authors && (
                        <p className="text-xs text-gray-300">
                            {obj.journalTitle} |{" "}
                            {obj.authors
                                .map((name) =>
                                    name.replace(/\s*\+\s*\d+\s*more/i, "").trim()
                                )
                                .join(", ")}
                        </p>
                    )}
                </div>
            ))}
        </div>
    )
}

function FetchVideo({ chat }) {
    const items = chat?.data?.data || [];

    return (
        <div className=" whitespace-nowrap p-4 bg-black lg:max-w-[700px] custom-scrollbar w-full max-w-[35  0px] md:max-w-[500px] md:w-[750px] overflow-x-auto">
            <div className="flex flex-col md:flex-row gap-4">
                {items.map((o, i) => (
                    <a
                        key={i}
                        href={o.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full max-w-[350px] md:max-w-[150px] shrink-0"
                    >
                        <div className="rounded-md overflow-hidden shadow">
                            <img
                                src={o?.pagemap?.cse_thumbnail
                                    ? o.pagemap.cse_thumbnail[0]?.src
                                    : o.pagemap?.cse_image?.[0]?.src}
                                alt={o.title}
                                className="w-full h-[100px] object-cover"
                            />
                        </div>
                        <p className="mt-2 text-sm text-white line-clamp-2">{o.title}</p>
                    </a>
                ))}
            </div>
        </div>
    );
}




function FetchImage({ chat }) {
    return (
        <div className="flex flex-wrap gap-2 justify-start">
            {chat?.data?.data?.map((o, i) => (
                <div key={i} className="relative w-[180px] h-[250px] overflow-hidden rounded-lg shadow">
                    <img
                        src={o.imageLink}
                        alt={o.title}
                        className="w-full h-full object-cover"
                    />

                    {/* Overlay */}
                    <div className="absolute bottom-0 left-0 w-full h-1/2 p-2 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end">
                        <p className="text-white text-sm font-semibold line-clamp-2">
                            {o.title}
                        </p>
                        <p className="text-gray-300 text-xs">{o.source}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
