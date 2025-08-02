// components/TypingDots.jsx
import { motion } from "framer-motion";

export default function TypingDots() {
    return (
        <div className="flex space-x-1">
            {[0, 1, 2].map((i) => (
                <motion.span
                    key={i}
                    className="w-3 h-3 bg-gray-400 rounded-full"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.2,
                    }}
                />
            ))}
        </div>
    );
}
