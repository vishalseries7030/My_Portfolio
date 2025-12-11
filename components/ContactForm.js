"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [hasMounted, setHasMounted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setIsSending(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        alert("✅ Message Sent Successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        alert("❌ Failed to send message. Try again!");
      }
    } catch (error) {
      console.error("❌ Error sending message:", error);
      alert("❌ Failed to send message. Try again!");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white py-20 px-6">
      {/* Animated Background with Grid */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000,transparent)]" />
        
        {/* Animated Gradient Orbs */}
        <motion.div
          className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-blue-500/30 via-cyan-500/20 to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-tl from-purple-500/30 via-pink-500/20 to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        className="relative w-full max-w-6xl grid md:grid-cols-2 gap-12 items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Left Side - Contact Info */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div>
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Let's <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 text-transparent bg-clip-text">Connect</span>
            </motion.h1>
            <motion.p
              className="text-gray-400 text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Have a project in mind? I'd love to hear about it. Drop me a message and let's create something amazing together.
            </motion.p>
          </div>

          {/* Contact Details */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {/* Email */}
            <motion.div 
              className="flex items-center space-x-4 group cursor-pointer"
              whileHover={{ x: 5 }}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center group-hover:from-blue-500/30 group-hover:to-cyan-500/30 transition-all duration-300">
                <span className="text-2xl">📧</span>
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="text-white group-hover:text-blue-400 transition-colors">vlpayyawar@gmail.com</p>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div 
              className="flex items-center space-x-4 group cursor-pointer"
              whileHover={{ x: 5 }}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-300">
                <span className="text-2xl">📱</span>
              </div>
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="text-white group-hover:text-purple-400 transition-colors">+91 7030763055</p>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div 
              className="flex items-center space-x-4 group cursor-pointer"
              whileHover={{ x: 5 }}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                <span className="text-2xl">📍</span>
              </div>
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="text-white group-hover:text-cyan-400 transition-colors">Pune, India</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              { icon: "💼", label: "LinkedIn" },
              { icon: "🐙", label: "GitHub" },
              { icon: "🐦", label: "Twitter" },
              { icon: "📸", label: "Instagram" },
            ].map((social, idx) => (
              <motion.button
                key={idx}
                className="w-12 h-12 rounded-lg bg-gray-800/50 border border-gray-700 flex items-center justify-center hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-purple-500/20 hover:border-blue-500/50 transition-all duration-300"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-xl">{social.icon}</span>
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side - Form Container */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Glassmorphism Card */}
          <div className="relative p-8 rounded-2xl bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 shadow-2xl">
            {/* Gradient Glow Effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-500" />
            
            <div className="relative">
              <div className="space-y-5">
                {/* Name Input */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Name</label>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3.5 bg-gray-800/70 border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-gray-800/90 transition-all duration-300"
                    />
                    {focusedField === "name" && (
                      <motion.div
                        className="absolute -inset-0.5 border-2 border-blue-500/50 rounded-xl pointer-events-none"
                        layoutId="input-focus"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      />
                    )}
                  </div>
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Email</label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3.5 bg-gray-800/70 border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-gray-800/90 transition-all duration-300"
                    />
                    {focusedField === "email" && (
                      <motion.div
                        className="absolute -inset-0.5 border-2 border-blue-500/50 rounded-xl pointer-events-none"
                        layoutId="input-focus"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      />
                    )}
                  </div>
                </div>

                {/* Message Input */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Message</label>
                  <div className="relative">
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      required
                      rows="5"
                      placeholder="Tell me about your project..."
                      className="w-full px-4 py-3.5 bg-gray-800/70 border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-gray-800/90 transition-all duration-300 resize-none"
                    />
                    {focusedField === "message" && (
                      <motion.div
                        className="absolute -inset-0.5 border-2 border-blue-500/50 rounded-xl pointer-events-none"
                        layoutId="input-focus"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      />
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  onClick={handleSubmit}
                  disabled={isSending}
                  className="relative w-full group overflow-hidden px-6 py-4 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold shadow-lg shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                  whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
                    initial={{ x: "100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative flex items-center justify-center gap-2">
                    {isSending ? (
                      <>
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        >
                          ⚡
                        </motion.span>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          →
                        </motion.span>
                      </>
                    )}
                  </span>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactForm;