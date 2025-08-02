// components/MenuButton.jsx
import { useGlobalContext } from "@/context/GlobalContext";
import { emitter } from "@/utils/eventBus";
import { useEffect, useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
export default function MenuButton() {
    const [show, setShow] = useState(false);
    const { sidebar, screen } = useGlobalContext();
    const showSidebar = () => {
        setShow(p => (!p))
        emitter.emit("showSidebar");
    }

    useEffect(() => {
    }, [show])


    return (
        <button
            onClick={showSidebar}
            className={`fixed top-5 ${!sidebar.collapsed ? "opacity-0 z-0" : ` ${screen?.narrow ? "opacity-100" : "opacity-0"} z-50`}  w-10 h-10 text-gray-200 flex items-center justify-center rounded transition-all duration-300 ease-in-out left-5`}
        >
            <HiOutlineMenu size={20} />
        </button>
    );
}
