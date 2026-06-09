import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import { sendToExcel } from "../utils/sendToExcel";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">(
    "idle",
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert("Please fill in all fields");
      return;
    }
    setStatus("sending");
    const ok = await sendToExcel({ name, email, message });
    setStatus(ok ? "ok" : "error");
    if (ok) {
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <main className="bg-[radial-gradient(circle_at_top,_rgba(120,119,198,0.08),_transparent_40%),linear-gradient(180deg,_#fffaf3_0%,_#f5e8da_100%)] text-zinc-900 transition-colors duration-300 dark:bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.06),_transparent_35%),linear-gradient(180deg,_#09090b_0%,_#111113_100%)] dark:text-zinc-100">
      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-16 max-[380px]:px-3 lg:grid-cols-[1fr_1.1fr]">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-zinc-500 dark:text-zinc-400">
            <Link to="/" className="cursor-target transition hover:text-zinc-950 dark:hover:text-white">
              Home
            </Link>
            <span className="mx-2 text-zinc-400 dark:text-zinc-500">/</span>
            <span>Contact</span>
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-5xl max-[380px]:text-3xl">
            Let&apos;s Collab And build something clean and useful.
          </h1>
          <p className="max-w-lg text-base leading-7 text-zinc-600 dark:text-zinc-400">
            If you have a project, role, or idea that needs a thoughtful
            frontend, send a message and I&apos;ll get back to you.
          </p>

          <div className="space-y-4">
            <div className="rounded-2xl border border-[#dcc4a8]/70 bg-[#f8ead8]/85 p-4 backdrop-blur dark:border-white/10 dark:bg-white/5">
              <div className="flex items-center gap-3 text-zinc-600 dark:text-zinc-300">
                <FaEnvelope className="text-zinc-950 dark:text-white " />
                <span className="min-w-0 break-words text-sm">Khalidraza30565@gmail.com</span>
              </div>
            </div>
            <div className="rounded-2xl border border-[#dcc4a8]/70 bg-[#f8ead8]/85 p-4 backdrop-blur dark:border-white/10 dark:bg-white/5">
              <div className="flex items-center gap-3 text-zinc-600 dark:text-zinc-300">
                <FaMapMarkerAlt className="text-zinc-950 dark:text-white" />
                <span className="min-w-0 break-words text-sm">Available for remote and on-site opportunities</span>
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-[1.75rem] border border-[#dcc4a8]/70 bg-[#f8ead8]/85 p-8 shadow-[0_20px_45px_-35px_rgba(0,0,0,0.25)] backdrop-blur dark:border-white/10 dark:bg-white/5 max-[380px]:p-4"
        >
          <div className="grid gap-5 p-3">
            <label className="grid gap-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Name
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="rounded-2xl border border-[#d6bea0] bg-[#f1dfca] px-4 py-3 text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-zinc-500 dark:border-white/10 dark:bg-zinc-950/50 dark:text-white dark:focus:border-white/30"
                placeholder="Your name"
              />
            </label>

            <label className="grid gap-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Email
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="rounded-2xl border border-[#d6bea0] bg-[#f1dfca] px-4 py-3 text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-zinc-500 dark:border-white/10 dark:bg-zinc-950/50 dark:text-white dark:focus:border-white/30"
                placeholder="you@example.com"
              />
            </label>

            <label className="grid gap-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Message
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="h-40 rounded-2xl border border-[#d6bea0] bg-[#f1dfca] px-4 py-3 text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-zinc-500 dark:border-white/10 dark:bg-zinc-950/50 dark:text-white dark:focus:border-white/30"
                placeholder="Write your Message here."
              />
            </label>

            <button
              type="submit"
              className="cursor-target inline-flex items-center justify-center gap-2 rounded-full bg-zinc-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
            >
              <FaPaperPlane className="text-xs" />
              {status === "sending" ? "Sending..." : "Send message"}
            </button>

            {status === "ok" && (
              <p className="text-sm text-emerald-600 dark:text-emerald-400">
                Thanks, your message was sent.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-rose-600 dark:text-rose-400">
                There was an error sending the message.
              </p>
            )}
          </div>
        </form>
      </section>
    </main>
  );
}
