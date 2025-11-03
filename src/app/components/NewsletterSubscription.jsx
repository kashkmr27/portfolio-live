"use client";
import { useState } from "react";

export default function NewsletterSubscription() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState("idle"); // idle, loading, success, error
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !email.includes("@")) {
            setStatus("error");
            setMessage("Please enter a valid email address.");
            return;
        }
        setStatus("loading");
        setMessage("");
        try {
            const res = await fetch(
                "https://blog.akashbuilds.com/wp-json/custom/v1/newsletter",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email }),
                }
            );
            if (res.ok) {
                setStatus("success");
                setMessage("Thank you for subscribing!");
                setEmail("");
            } else {
                setStatus("error");
                setMessage("Subscription failed. Please try again.");
            }
        } catch {
            setStatus("error");
            setMessage("Network error. Please try again.");
        }
    };

    return (
        <div className="w-full">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                    type="email"
                    value={email}
                    placeholder="Enter your email"
                    className="flex-1 px-6 py-4 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-violet-500/50 transition-colors text-base"
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={status === "loading"}
                />
                <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    disabled={status === "loading"}
                >
                    {status === "loading" ? "Subscribing..." : "Subscribe"}
                </button>
            </form>
            {message && (
                <div className={`mt-4 text-center text-sm flex items-center justify-center gap-2 ${status === "success" ? "text-green-400" : "text-red-400"
                    }`}>
                    {status === "success" && (
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                    )}
                    {message}
                </div>
            )}
        </div>
    );
}