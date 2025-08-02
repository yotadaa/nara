import React from "react";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

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

    return (
        <div
            key={index}
            className={`relative flex flex-col lg:min-w-[500px] min-w-[300px] w-full ${isUser
                ? "self-end"
                : "self-end w-full relative px-4 py-5 -left text-white"
                }`}
        >
            {!isUser && (
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/40 to-pink-500/20 blur-3xl rounded-xl"></div>
            )}

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className={`${isUser
                    ? "relative px-4 py-2 self-end rounded-xl rounded-tr-none text-left bg-white/10  border border-white/20 shadow-lg text-white"
                    : ""
                    }`}
            >
                <div className="markdown prose prose-invert max-w-none w-full">
                    {(chat.role === "assistant" && chatLoading && isLatest) && (
                        <>
                            <TypingDots /> {placeholder}
                        </>
                    )}
                    <div className="markdown">
                        {chat.role === "assistant" ? (
                            <ReactMarkdown
                                remarkPlugins={[remarkGfm]}
                                rehypePlugins={[rehypeRaw]}
                                components={{
                                    code({ inline, className, children, ...props }) {
                                        const match = /language-(\w+)/.exec(className || "");
                                        return !inline && match ? (
                                            <SyntaxHighlighter
                                                style={oneDark}
                                                language={match[1]}
                                                PreTag="div"
                                                {...props}
                                                className="prose prose-invert max-w-[300px] sm:max-w-[500px] lg:max-w-[750px] text-[0.5rem] sm:text-sm custom-scrollbar"
                                            >
                                                {String(children).replace(/\n$/, "")}
                                            </SyntaxHighlighter>
                                        ) : (
                                            <code
                                                className={
                                                    className +
                                                    " prose prose-invert w-full custom-scrollbar"
                                                }
                                                {...props}
                                            >
                                                {children}
                                            </code>
                                        );
                                    },
                                }}
                            >
                                {markdown}
                            </ReactMarkdown>
                        ) : (
                            <span className="max-w-[300px]">{markdown}</span>
                        )}
                    </div>

                    {chat.role === "assistant" &&
                        chat.tools !== "null" &&
                        chat.data?.data?.length > 0 && (
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
                        )}
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
        </div>
    );
};

export default React.memo(ChatBubble);
