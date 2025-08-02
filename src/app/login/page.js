"use client";

import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const router = useRouter();

    const handleGoogleLogin = () => {
        router.push("/auth/google/login");
    };

    return (
        <div className="flex h-screen bg-gradient-to-b from-fuchsia-950/90 via-blue-950/90 to-gray-950/90 items-center justify-center">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-lg flex flex-col items-center w-[90%] max-w-md">
                <h1 className="text-2xl font-semibold text-white mb-6">Welcome Back</h1>
                <button
                    onClick={handleGoogleLogin}
                    className="flex items-center justify-center gap-3 w-full py-3 px-4 cursor-pointer bg-white text-gray-800 rounded-lg shadow-md hover:bg-gray-100 transition"
                >
                    <FcGoogle size={24} />
                    <span className="font-medium">Sign in with Google</span>
                </button>
            </div>
        </div>
    );
}
