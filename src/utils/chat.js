import axios from "axios";

export const sendChat = async (data) => {
    try {
        console.log("from Send Chat", data)
        const res = await fetch("/api/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });


        return res.body
    } catch (e) {
        console.log(e)
        return {
            error: e.message
        }
    }

};

export const handleNewChatSession = async () => {
    try {
        const res = await axios.post(`/api/chat/new`, {}, { withCredentials: true });
        return res.data;
    } catch (error) {
        console.error("Error creating session:", error);
        return null;
    }
};

export const updateSessionChat = async (sessionId, updates) => {
    try {
        const res = await axios.put(`/api/chat/update/${sessionId}`, updates, {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
        });
        return res.data;
    } catch (error) {
        console.error("❌ Failed to update session:", error.response?.data || error.message);
        throw error;
    }
};


export const getRespond = async () => {
    setLoading(true);
    storeInput();

    try {
        let sessionId = current.session_id;
        let isNewSession = false;

        // ✅ 1. Buat session baru kalau belum ada
        if (chats.length === 0) {
            const sessionRespond = await handleNewChatSession();
            sessionId = sessionRespond.uuid;

            // ✅ Update session ID immediately
            setCurrent(prev => ({ ...prev, session_id: sessionId }));
            isNewSession = true;
        }

        // ✅ 2. Kirim pesan user ke API Next.js
        await getChat(message, sessionId)
            .then(res => {
                setChats(prev => [...prev, res]);
                setLoading(false)
            })
            .catch(err => {
            })

        // ✅ 3. Kalau session baru, generate title
        if (isNewSession) {
            const titleData = {
                content: `Generate short title for the new chat session, the format of your generated title is -> title*actual_title, the title should be 5 words max, and no other respond than title. content: ${message}`,
                session_id: sessionId,
            };
            try {
                const res = await axios.put(`/api/chat/title`, titleData, {
                    withCredentials: true,
                    headers: { "Content-Type": "application/json" },
                });

                const generatedTitle = res.data.answer.content.split("*")[1];
                setCurrent(p => ({
                    ...p,
                    title: generatedTitle
                }))
                await updateSessionChat(sessionId, {
                    title: generatedTitle,
                    status: "active",
                });

                window.history.replaceState(null, '', `/chat/session/${id}`);

            } catch (e) {
                console.error("Failed to update session title:", e);
            }
        }
    } catch (error) {
        console.error("Error:", error.response?.data || error.message);
    } finally {
        setLoading(false);
        setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: "smooth" }), 100);
    }
};