import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FiShare2, FiEdit2, FiArchive, FiTrash2, FiLoader } from "react-icons/fi"
import { useGlobalContext } from "@/context/GlobalContext";
import { emitter } from "@/utils/eventBus";
import { useRouter } from "next/navigation";


export default function ChatItem({ data, index, openMenu, toggleMenu, onClick, loading }) {
    const buttonRef = useRef(null);
    const menuRef = useRef(null);
    const [menuStyle, setMenuStyle] = useState({});
    const { current, setCurrent } = useGlobalContext();
    const router = useRouter();

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

    const changeSession = (id) => emitter.emit("changeSession", id);

    const handleChangeSession = (id) => {
        try {
            setCurrent(p => ({ ...p, session_id: id }));
            changeSession(id); // Fungsi logic milikmu sendiri

            // Ubah URL di browser tanpa reload atau navigasi ulang
            window.history.replaceState(null, '', `/chat/session/${id}`);
        } catch (e) {
            console.error(e);
        }
    };
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
        <li
            className={`hover:bg-white/10 ${loading.id === data.uuid ? `bg-white/10 ${loading.chat ? "animate-pulse" : ""} ` : ""} rounded-lg px-3 py-2 cursor-pointer flex items-center justify-between relative`}
            onClick={() => {
                if (loading.id !== data.id) {
                    onClick();
                    handleChangeSession(data.uuid);
                }
            }}
        >
            <span className="flex items-center gap-2">
                <span className="flex-1 whitespace-nowrap overflow-hidden text-ellipsis">
                    {data.title}
                </span>
                {(loading?.chat && loading?.id === data.id) && <span className="animate-spin text-xs text-gray-400">
                    <FiLoader />
                </span>}
            </span>

            <button
                ref={buttonRef}
                onClick={(e) => {
                    e.stopPropagation(); // stop li onClick
                    toggleMenu(index);
                }}
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