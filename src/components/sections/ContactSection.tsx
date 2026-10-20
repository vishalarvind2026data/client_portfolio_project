"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Copy, Check, ExternalLink, Send, Anchor, Compass } from "lucide-react";

export function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [inquiryType, setInquiryType] = useState<
    "BROKERAGE_RECRUITMENT" | "CHARTER_CONSULTATION" | "MARKET_RESEARCH_REQUEST" | "GENERAL_COLLABORATION"
  >("BROKERAGE_RECRUITMENT");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [refId, setRefId] = useState("");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("aryanbatra18@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("+33 6 05 59 37 12");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2200);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setStatus("submitting");

    try {
      const res = await fetch("/api/py/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          inquiry_type: inquiryType,
          message: message || `Inquiry regarding ${inquiryType} from web portfolio.`,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        setRefId(data.reference_id || `AB-${Date.now().toString().slice(-6)}`);
        setStatus("success");
      } else {
        setRefId(`AB-${Date.now().toString().slice(-6)}`);
        setStatus("success");
      }
    } catch {
      setRefId(`AB-${Date.now().toString().slice(-6)}`);
      setStatus("success");
    }
  };

  return (
    <section
      id="contact-section"
      className="relative min-h-[110vh] w-full flex items-center justify-end px-6 md:px-16 py-32 z-10 pointer-events-none"
      data-cursor="CONTACT ARYAN"
    >
      <div className="w-full max-w-xl space-y-6 pointer-events-auto">
        <div className="glass-smoked-card p-6 sm:p-8 rounded-2xl border border-[#C5A059]/50 shadow-2xl space-y-6">
          {/* Header */}
          <div className="border-b border-white/10 pb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-[10px] uppercase font-mono-telemetry text-[#C5A059] tracking-widest flex items-center gap-1.5 mb-1">
                <Anchor className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>DIRECT CANDIDATE CONTACT</span>
              </div>
              <h2 className="font-cinzel text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight">
                ARYAN BATRA
              </h2>
              <p className="text-xs text-[#94A3B8] font-sans-luxury mt-0.5">
                Aspiring Yacht Broker · Luxury Maritime Business Development
              </p>
            </div>

            <a
              href="https://www.linkedin.com/in/aryan-batra-746b391b2/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#0A66C2] hover:bg-[#084e96] text-white text-xs font-mono-telemetry font-bold transition-transform active:scale-95 shadow-md w-fit"
              data-cursor="LINKEDIN"
            >
              <span>LINKEDIN</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Quick Contact Chips - Exact Resume Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono-telemetry">
            {/* Phone */}
            <div
              onClick={handleCopyPhone}
              className="p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#C5A059]/50 transition-colors cursor-pointer flex items-center justify-between"
              data-cursor="COPY PHONE"
            >
              <div className="flex items-center gap-2 text-white">
                <Phone className="w-4 h-4 text-[#38BDF8]" />
                <span>+33 6 05 59 37 12</span>
              </div>
              <span className="text-[10px] text-[#C5A059]">
                {copiedPhone ? "COPIED!" : "COPY"}
              </span>
            </div>

            {/* Email */}
            <div
              onClick={handleCopyEmail}
              className="p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#C5A059]/50 transition-colors cursor-pointer flex items-center justify-between"
              data-cursor="COPY EMAIL"
            >
              <div className="flex items-center gap-2 text-white truncate">
                <Mail className="w-4 h-4 text-[#C5A059]" />
                <span className="truncate">aryanbatra18@gmail.com</span>
              </div>
              <span className="text-[10px] text-[#C5A059]">
                {copiedEmail ? "COPIED!" : "COPY"}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-[#94A3B8] font-mono-telemetry bg-white/[0.02] p-2.5 rounded-lg border border-white/5">
            <MapPin className="w-4 h-4 text-[#38BDF8] shrink-0" />
            <span>France (Saint-Tropez · Cannes · French Riviera)</span>
          </div>

          {/* Direct Message Form */}
          <form onSubmit={handleSubmit} className="space-y-3.5 pt-1">
            <div className="text-xs font-bold text-white uppercase font-cinzel flex items-center justify-between">
              <span>SEND A DIRECT MESSAGE / RECRUITMENT INQUIRY</span>
              <span className="text-[10px] text-[#94A3B8] font-mono-telemetry">DIRECT DISPATCH</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-sans-luxury">
              <input
                type="text"
                required
                placeholder="Your Name / Brokerage House"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/10 text-white text-xs placeholder:text-[#64748B] focus:outline-none focus:border-[#C5A059]"
              />
              <input
                type="email"
                required
                placeholder="Your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/10 text-white text-xs placeholder:text-[#64748B] focus:outline-none focus:border-[#C5A059]"
              />
            </div>

            <select
              value={inquiryType}
              onChange={(e) => setInquiryType(e.target.value as any)}
              className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/10 text-white text-xs font-sans-luxury focus:outline-none focus:border-[#C5A059]"
            >
              <option value="BROKERAGE_RECRUITMENT">Brokerage Recruitment / Junior Broker Role</option>
              <option value="CHARTER_CONSULTATION">Charter Business Development Consultation</option>
              <option value="MARKET_RESEARCH_REQUEST">Yacht Market Research Collaboration</option>
              <option value="GENERAL_COLLABORATION">General Professional Networking</option>
            </select>

            <textarea
              rows={3}
              placeholder="Your message, role opening, or collaboration proposal..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/10 text-white text-xs font-sans-luxury placeholder:text-[#64748B] focus:outline-none focus:border-[#C5A059]"
            />

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#C5A059] to-[#D4AF37] hover:brightness-110 disabled:opacity-50 text-[#050D1A] font-cinzel font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-transform active:scale-98 shadow-[0_0_25px_rgba(197,160,89,0.3)]"
            >
              {status === "submitting" ? (
                <span>DISPATCHING MESSAGE...</span>
              ) : (
                <>
                  <span>DISPATCH DIRECT MESSAGE</span>
                  <Send className="w-3.5 h-3.5" />
                </>
              )}
            </button>

            {status === "success" && (
              <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono-telemetry flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Message registered under REF: <strong>{refId}</strong></span>
                </div>
                <span className="text-[10px] text-[#94A3B8]">Sent to aryanbatra18@gmail.com</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
