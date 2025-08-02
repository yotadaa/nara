import { ThumbsUp } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function AnimatedButton({ Icon }) {
    const [isClicked, setIsClicked] = useState(false);

    return (
        <motion.div
            whileTap={{ scale: 0.8 }}
            onClick={() => {
                setIsClicked(true);
                setTimeout(() => setIsClicked(false), 800); // reset animation
            }}
            className="relative inline-block cursor-pointer text-white/70 hover:text-white"
        >
            <Icon size={18} />

            {/* Spark effect */}
            {isClicked && (
                <motion.div
                    initial={{ opacity: 1, scale: 0 }}
                    animate={{ opacity: 0, scale: 2 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <div className="w-full h-full rounded-full border-2 border-pink-400" />
                </motion.div>
            )}
        </motion.div>
    );
}
