"use client";
import { useState } from "react";

export default function FAQTemplateModal({ isOpen, onClose }) {
    const [email, setEmail] = useState("");
    const [fileType, setFileType] = useState("csv");
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
            // First, send email to API
            const apiResponse = await fetch(
                "https://darkcyan-pony-605661.hostingersite.com/wp-json/custom/v1/faqtemplate",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        email,
                        fileType,
                        source: "blog_detail_page"
                    }),
                }
            );

            if (apiResponse.ok) {
                setStatus("success");
                setMessage("Email collected successfully! Downloading file...");

                // Download the file
                const fileUrl = fileType === "csv"
                    ? "https://darkcyan-pony-605661.hostingersite.com/wp-content/uploads/2025/08/chatbot-faq-template.csv"
                    : "https://darkcyan-pony-605661.hostingersite.com/wp-content/uploads/2025/08/chatbot-faq-template.xlsx";

                const link = document.createElement('a');
                link.href = fileUrl;
                link.download = `chatbot-faq-template.${fileType}`;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);

                setEmail("");
                setTimeout(() => {
                    onClose();
                    setStatus("idle");
                    setMessage("");
                }, 2000);
            } else {
                setStatus("error");
                setMessage("Failed to process request. Please try again.");
            }
        } catch (error) {
            setStatus("error");
            setMessage("Network error. Please try again.");
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-slate-700/50 rounded-3xl p-8 max-w-md w-full backdrop-blur-sm">
                <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                        Download FAQ Template
                    </h3>
                    <p className="text-slate-300 text-sm">
                        Get our free chatbot FAQ template to streamline your AI implementation.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Email Input */}
                    <div>
                        <label className="block text-white text-sm font-medium mb-2">
                            Email Address
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-violet-500/50 transition-colors"
                            disabled={status === "loading"}
                            required
                        />
                    </div>

                    {/* File Type Selection */}
                    <div>
                        <label className="block text-white text-sm font-medium mb-3">
                            Choose File Format
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                            <button
                                type="button"
                                onClick={() => setFileType("csv")}
                                className={`p-3 rounded-xl border transition-all ${fileType === "csv"
                                        ? "border-violet-500 bg-violet-500/20 text-violet-300"
                                        : "border-slate-600 bg-slate-700/30 text-slate-300 hover:border-slate-500"
                                    }`}
                            >
                                <div className="text-sm font-medium">CSV</div>
                                <div className="text-xs opacity-75">Excel compatible</div>
                            </button>
                            <button
                                type="button"
                                onClick={() => setFileType("xlsx")}
                                className={`p-3 rounded-xl border transition-all ${fileType === "xlsx"
                                        ? "border-violet-500 bg-violet-500/20 text-violet-300"
                                        : "border-slate-600 bg-slate-700/30 text-slate-300 hover:border-slate-500"
                                    }`}
                            >
                                <div className="text-sm font-medium">Excel</div>
                                <div className="text-xs opacity-75">Native format</div>
                            </button>
                        </div>
                    </div>

                    {/* Status Message */}
                    {message && (
                        <div className={`text-sm text-center p-3 rounded-xl ${status === "success"
                                ? "bg-green-500/20 text-green-300 border border-green-500/30"
                                : "bg-red-500/20 text-red-300 border border-red-500/30"
                            }`}>
                            {message}
                        </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white hover:bg-slate-600/50 transition-colors"
                            disabled={status === "loading"}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="flex-1 px-4 py-3 bg-gradient-to-r from-violet-600 to-violet-700 hover:from-violet-700 hover:to-violet-800 text-white font-semibold rounded-xl transition-all disabled:opacity-50"
                            disabled={status === "loading"}
                        >
                            {status === "loading" ? "Processing..." : "Download Template"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
} 