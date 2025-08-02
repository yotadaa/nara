
import { useRouter } from "next/navigation";
import axios from "axios";

export const useLogout = () => {
    const router = useRouter();

    const handleLogout = async () => {
        try {
            await axios.post("/auth/logout", {}, { withCredentials: true });
            router.replace("/login"); // ✅ Redirect user ke login
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    return handleLogout;
};
