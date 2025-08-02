// components/CircleLoader.jsx
import { FiLoader } from "react-icons/fi";
import { motion } from "framer-motion";

export default function CircleLoader({ size = 40, color = "#0EA5E9" }) {
    return (
        <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, ease: "linear", duration: 1 }}
            className="inline-block"
        >
            <FiLoader size={size} color={color} />
        </motion.div>
    );
}
