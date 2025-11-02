"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, CheckCircle, Upload } from "lucide-react";
import toast from "react-hot-toast";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [file, setFile] = useState<File | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) {
      const allowedTypes = [
        "image/jpeg",
        "image/png",
        "application/pdf",
        "application/zip",
      ];
      if (!allowedTypes.includes(selected.type)) {
        toast.error("Only JPG, PNG, PDF or ZIP files are allowed.");
        return;
      }
      setFile(selected);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("message", form.message);
      if (file) formData.append("file", file);

      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        toast.success("✅ Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
        setFile(null);

        // Confirmation overlay
        setShowConfirmation(true);
        setTimeout(() => setShowConfirmation(false), 4000);
      } else {
        toast.error("❌ Failed to send message. Please try again later.");
      }
    } catch (err) {
      toast.error("⚠️ Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white relative">
      {/* Hero Section */}
      <section className="text-center py-20">
        <motion.h1
          className="text-5xl font-bold text-gray-900 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Get in <span className="text-blue-600">Touch</span>
        </motion.h1>
        <motion.p
          className="text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Have a question or project in mind? We’d love to hear from you.  
          Fill out the form below or reach us directly through our contact info.
        </motion.p>
      </section>

      {/* Contact Form + Info */}
      <section className="max-w-6xl mx-auto px-6 md:px-20 py-0 grid md:grid-cols-2 gap-12 items-start">
        {/* Contact Form */}
        <motion.form
          className="bg-white rounded-2xl shadow-lg p-8 space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Send Us a Message</h2>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded-xl p-3"
            required
            value={form.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="your@email.com"
            className="w-full border border-gray-300 rounded-xl p-3"
            required
            value={form.email}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Tell us about your project..."
            rows={5}
            className="w-full border border-gray-300 rounded-xl p-3 resize-none"
            required
            value={form.message}
            onChange={handleChange}
          ></textarea>

          {/* Modern File Upload */}
          <div
            className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition ${
              file ? "border-green-400 bg-green-50" : "border-gray-300 hover:border-blue-400"
            }`}
            onClick={() => fileInputRef.current?.click()}
          >
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              onChange={handleFileSelect}
            />
            <Upload className="mx-auto text-blue-600 mb-2" size={24} />
            {file ? (
              <p className="text-gray-700 font-medium">
                📎 {file.name}
              </p>
            ) : (
              <p className="text-gray-500">Click or drag a file to attach (JPG, PNG, PDF, ZIP)</p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors duration-300 disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </motion.form>

        {/* Contact Info */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h2>
          <div className="flex items-center space-x-4">
            <div className="bg-blue-100 p-3 rounded-full text-blue-600">
              <Mail size={22} />
            </div>
            <div>
              <p className="text-gray-700 font-medium">Email</p>
              <p className="text-gray-600">support@renovategraphics.com</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="bg-blue-100 p-3 rounded-full text-blue-600">
              <Phone size={22} />
            </div>
            <div>
              <p className="text-gray-700 font-medium">Phone</p>
              <p className="text-gray-600">+1 (800) 555-0199</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="bg-blue-100 p-3 rounded-full text-blue-600">
              <MapPin size={22} />
            </div>
            <div>
              <p className="text-gray-700 font-medium">Address</p>
              <p className="text-gray-600">123 Studio Lane, New York, NY 10001, USA</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Confirmation Modal */}
      <AnimatePresence>
        {showConfirmation && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-sm"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <CheckCircle className="text-green-500 mx-auto mb-4" size={48} />
              <h3 className="text-2xl font-semibold text-gray-800">Thank You!</h3>
              <p className="text-gray-600 mt-2">
                Your message has been sent successfully. We'll get back to you soon.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
