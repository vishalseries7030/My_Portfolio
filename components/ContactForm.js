"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [hasMounted, setHasMounted] = useState(false); // ✅ Fix Hydration Issue

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null; // ✅ Avoids Hydration Mismatch

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent! ✅"); // Can be connected to EmailJS or Backend
  };

  return (
    <section className="flex items-center justify-center min-h-screen  select-none bg-gray-900 text-white py-12">
      <motion.div
        className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-lg shadow-lg border border-gray-700 max-w-lg w-full"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl font-bold text-center text-blue-400 mb-6">📩 Contact Me</h1>

        <motion.form onSubmit={handleSubmit} className="space-y-4">
          <motion.input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="p-3 w-full bg-gray-800 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 transition-all"
            whileFocus={{ scale: 1.05 }}
          />
          <motion.input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="p-3 w-full bg-gray-800 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 transition-all"
            whileFocus={{ scale: 1.05 }}
          />
          <motion.textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            rows="4"
            className="p-3 w-full bg-gray-800 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 transition-all"
            whileFocus={{ scale: 1.05 }}
          />
          <motion.button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            🚀 Send Message
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default ContactForm;
