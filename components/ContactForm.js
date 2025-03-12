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

  const handleSubmit = async (e) => {
    e.preventDefault();
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
    <section className="relative min-h-screen flex items-center justify-center bg-[#030014] text-white py-20 px-6">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_50%,#1e293b,transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#080808,transparent_1px),linear-gradient(to_bottom,#080808,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      {/* Glowing Orbs */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main Content */}
      <motion.div
        className="relative w-full max-w-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Header */}
        <div className="text-center mb-10">
          <motion.h1
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Get in Touch
          </motion.h1>
          <motion.p
            className="text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Let's bring your ideas to life
          </motion.p>
        </div>

        {/* Form Container */}
        <motion.div
          className="relative group"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Gradient Border */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />

          {/* Form */}
          <div className="relative px-8 py-10 bg-gray-900 rounded-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div className="space-y-2">
                <label className="text-sm text-gray-400 ml-1">Your Name</label>
                <motion.div
                  className="relative"
                  whileFocus={{ scale: 1.02 }}
                >
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-all duration-300"
                  />
                  {focusedField === "name" && (
                    <motion.div
                      className="absolute inset-0 border-2 border-blue-500 rounded-lg pointer-events-none"
                      layoutId="focus-outline"
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </motion.div>
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <label className="text-sm text-gray-400 ml-1">Your Email</label>
                <motion.div
                  className="relative"
                  whileFocus={{ scale: 1.02 }}
                >
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-all duration-300"
                  />
                  {focusedField === "email" && (
                    <motion.div
                      className="absolute inset-0 border-2 border-blue-500 rounded-lg pointer-events-none"
                      layoutId="focus-outline"
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </motion.div>
              </div>

              {/* Message Input */}
              <div className="space-y-2">
                <label className="text-sm text-gray-400 ml-1">Your Message</label>
                <motion.div
                  className="relative"
                  whileFocus={{ scale: 1.02 }}
                >
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows="4"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-all duration-300 resize-none"
                  />
                  {focusedField === "message" && (
                    <motion.div
                      className="absolute inset-0 border-2 border-blue-500 rounded-lg pointer-events-none"
                      layoutId="focus-outline"
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </motion.div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSending}
                className="relative w-full group overflow-hidden px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                <span className="flex items-center justify-center">
                  {isSending ? (
                    <>
                      <motion.span
                        className="mr-2"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      >
                        🚀
                      </motion.span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <span className="mr-2">📤</span>
                      Send Message
                    </>
                  )}
                </span>
              </motion.button>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactForm;