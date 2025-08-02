import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FiShare2, FiEdit2, FiArchive, FiTrash2 } from "react-icons/fi"

export default function ChatItem({ name, index, openMenu, toggleMenu }) {
    const buttonRef = useRef(null);
    const menuRef = useRef(null);
    const [menuStyle, setMenuStyle] = useState({});

    // Calculate menu position when opened
    useEffect(() => {
        if (openMenu === index && buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect();
            const spaceBelow = window.innerHeight - rect.bottom;
            const positionTop = spaceBelow < 150; // if not enough space, show above

            setMenuStyle({
                position: "absolute",
                top: positionTop ? rect.top - 140 : rect.bottom,
                left: rect.left - 100,
                zIndex: 9999
            });
        }
    }, [openMenu, index]);

    // ✅ Close menu when clicking outside
    useEffect(() => {
        if (openMenu !== index) return;

        const handleClickOutside = (event) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target)
            ) {
                toggleMenu(null); // close the menu
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [openMenu, index, toggleMenu]);

    return (
        <li className="hover:bg-white/10 rounded-lg px-3 py-2 cursor-pointer flex items-center justify-between relative">
            <span className="flex-1 whitespace-nowrap overflow-hidden text-ellipsis">
                {name}
            </span>
            <button
                ref={buttonRef}
                onClick={() => toggleMenu(index)}
                className="hover:text-gray-300"
            >
                <FontAwesomeIcon icon={faEllipsisVertical} />
            </button>

            {openMenu === index &&
                createPortal(
                    <div
                        ref={menuRef}
                        style={menuStyle}
                        className="w-32 bg-gray-800 border border-gray-700 rounded-lg shadow-lg"
                    >
                        <ul className="text-sm text-white">
                            <li className="flex items-center gap-2 px-3 py-2 hover:bg-gray-700 cursor-pointer rounded-t">
                                <FiShare2 size={16} />
                                Share
                            </li>
                            <li className="flex items-center gap-2 px-3 py-2 hover:bg-gray-700 cursor-pointer">
                                <FiEdit2 size={16} />
                                Rename
                            </li>
                            <li className="flex items-center gap-2 px-3 py-2 hover:bg-gray-700 cursor-pointer">
                                <FiArchive size={16} />
                                Archive
                            </li>
                            <li className="flex items-center gap-2 px-3 py-2 hover:bg-red-600 rounded-b cursor-pointer text-red-400">
                                <FiTrash2 size={16} />
                                Delete
                            </li>
                        </ul>

                    </div>,
                    document.body
                )}
        </li>
    );
}
