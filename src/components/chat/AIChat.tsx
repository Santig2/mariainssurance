"use client";

import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot, Shield } from "lucide-react";
import { BRAND } from "@/lib/constants";

interface Message {
  sender: "bot" | "user";
  text: string;
}

const initialMessages: Message[] = [
  {
    sender: "bot",
    text: `¡Hola! Soy el asistente inteligente de ${BRAND.name}. ¿En qué estado resides y qué tipo de seguro buscas para tu familia?`,
  },
];

export function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userText = input.trim();
    setMessages((prev) => [...prev, { sender: "user", text: userText }]);
    setInput("");
    setIsTyping(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userText }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { sender: "bot", text: data.reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: `María Arias atiende casos en FL, NC, SC, TX y NJ. Puedes comunicarte directamente al ${BRAND.phone} o llenar el formulario de cotización.`,
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-3 px-5 py-3.5 rounded-full bg-[#1B2D5B] text-white border border-[#C9A84C] shadow-2xl hover:bg-[#121F40] transition-all hover:scale-105"
          aria-label="Abrir asistente de chat"
        >
          <div className="relative">
            <MessageSquare className="w-5 h-5 text-[#C9A84C]" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse border border-[#1B2D5B]" />
          </div>
          <span className="font-sans text-xs uppercase font-bold tracking-wider hidden sm:inline">
            Asistente Claude AI
          </span>
        </button>
      )}

      {isOpen && (
        <div className="w-[90vw] sm:w-[380px] h-[500px] rounded-3xl bg-white shadow-2xl border border-[#C9A84C]/40 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300">
          <div className="p-4 bg-[#1B2D5B] text-white flex items-center justify-between border-b border-[#C9A84C]/30">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[#C9A84C] flex items-center justify-center overflow-hidden">
                <img src="/images/maria/borbuja.png" alt="María Arias" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-serif text-base font-bold text-white leading-tight">
                  Asistente {BRAND.name}
                </h4>
                <div className="flex items-center gap-1.5 text-[10px] text-[#E8C5B0]">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span>En línea · Claude AI</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/10"
              aria-label="Cerrar chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="bg-[#FAF6EF] px-4 py-2 text-[11px] text-[#4A4A6A] border-b border-[#C9A84C]/20 flex items-center gap-2">
            <Shield className="w-3.5 h-3.5 text-[#C9A84C] flex-shrink-0" />
            <span>Respuestas claras sobre Obamacare, planes privados y seguros.</span>
          </div>

          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#FAF6EF]/30 text-xs">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex gap-2.5 ${m.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                {m.sender === "bot" && (
                  <div className="w-6 h-6 rounded-full border border-[#C9A84C] flex items-center justify-center flex-shrink-0 overflow-hidden">
                    <img src="/images/maria/borbuja.png" alt="María" className="w-full h-full object-cover" />
                  </div>
                )}
                <div
                  className={`p-3 rounded-2xl max-w-[80%] leading-relaxed ${
                    m.sender === "user"
                      ? "bg-[#1B2D5B] text-white rounded-tr-none"
                      : "bg-white text-[#1A1A2E] border border-gray-100 shadow-sm rounded-tl-none"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-2 text-[#4A4A6A] text-[11px] italic">
                <span className="w-2 h-2 rounded-full bg-[#C9A84C] animate-bounce" />
                <span className="w-2 h-2 rounded-full bg-[#C9A84C] animate-bounce [animation-delay:0.2s]" />
                <span className="w-2 h-2 rounded-full bg-[#C9A84C] animate-bounce [animation-delay:0.4s]" />
                <span>Consultando con Claude...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form
            onSubmit={handleSend}
            className="p-3 bg-white border-t border-gray-100 flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Pregunta sobre seguros o subsidios..."
              className="flex-1 px-3.5 py-2 text-xs rounded-xl border border-gray-200 focus:outline-none focus:border-[#C9A84C]"
            />
            <button
              type="submit"
              className="p-2.5 rounded-xl bg-[#1B2D5B] text-white hover:bg-[#121F40]"
              aria-label="Enviar"
            >
              <Send className="w-4 h-4 text-[#C9A84C]" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
