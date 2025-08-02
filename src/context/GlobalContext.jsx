"use client";

import { createContext, useContext, useEffect, useState } from "react";

// Create context
const GlobalContext = createContext();

// Create a provider
export const GlobalProvider = ({ children }) => {
    const [current, setCurrent] = useState({ session_id: -1, uuid: null, title: "" });
    const [sidebar, setSidebar] = useState({
        visible: false,
        collapsed: true,
        more: false,
    });
    const [screen, setScreen] = useState({
        narrow: true
    });
    const [sessions, setSessions] = useState(null);

    const [ready, setReady] = useState({
        user: false,
        session: false
    })
    const [loading, setLoading] = useState({
        chat: false,
        id: null
    })

    useEffect(() => {
        setScreen(p => ({
            ...p,
            narrow: window.innerWidth < 750,
        }))
    }, []);


    return (
        <GlobalContext.Provider
            value={{
                loading, setLoading, current, setCurrent, sidebar, setSidebar, screen, setScreen, ready, setReady, sessions, setSessions
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

// Custom hook (optional)
export const useGlobalContext = () => useContext(GlobalContext);
