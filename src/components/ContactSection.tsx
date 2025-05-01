"use client";

import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    alert("Thanks for reaching out! I’ll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  }

  return (
    <section id="contact" className="py-20 px-6 bg-background-500/10">
      <h2 className="text-3xl font-semibold text-primary-500 text-center mb-8">
        Contact Me
      </h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto flex flex-col gap-4"
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="w-full px-4 py-3 rounded-xl bg-background-500/20 text-white placeholder-white/60 focus:outline-none"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="w-full px-4 py-3 rounded-xl bg-background-500/20 text-white placeholder-white/60 focus:outline-none"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows={5}
          required
          className="w-full px-4 py-3 rounded-xl bg-background-500/20 text-white placeholder-white/60 focus:outline-none resize-none"
        />
        <button
          type="submit"
          className="self-center mt-4 px-8 py-3 bg-accent-500 text-background-500 font-semibold rounded-xl hover:bg-accent-500/80 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
