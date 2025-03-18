import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Contact Us - Sentence Counter</title>
        <meta name="description" content="Get in touch with the Sentence Counter team. We're here to help with your text analysis needs and answer any questions about our professional writing tools." />
        <meta name="keywords" content="contact sentence counter, text analysis support, writing tool help, sentence counter contact" />
        <link rel="canonical" href="https://sentence-counter.com/contact" />
        <meta property="og:title" content="Contact Sentence Counter - Get Support" />
        <meta property="og:description" content="Get in touch with our team for support with text analysis and sentence counting tools." />
        <meta property="og:url" content="https://sentence-counter.com/contact" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Sentence Counter",
            "description": "Contact page for Sentence Counter text analysis tool",
            "url": "https://sentence-counter.com/contact",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1 581 206 8455",
              "contactType": "customer service",
              "email": "support@sentence-counter.com",
              "areaServed": "Worldwide"
            }
          })}
        </script>
      </Helmet>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto px-4 py-16"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">Contact Us</h1>
            <div className="h-1 w-24 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mt-4 rounded-full" />
            <p className="text-xl text-gray-600 mt-6">We're here to help with your text analysis needs</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Get in Touch</h2>
              <p className="mb-8 text-gray-600">
                Have questions or feedback? We'd love to hear from you. Send us a message
                and we'll respond as soon as possible.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-purple-100 p-3 rounded-xl">
                    <Mail className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Email</h3>
                    <a href="mailto:support@sentence-counter.com" className="text-purple-600 hover:text-purple-700">
                      support@sentence-counter.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-xl">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Phone</h3>
                    <a href="tel:+15812068455" className="text-blue-600 hover:text-blue-700">
                      +1 581 206 8455
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-emerald-100 p-3 rounded-xl">
                    <MapPin className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Address</h3>
                    <p className="text-gray-600">
                      1234 Innovation Drive<br />
                      Suite 500<br />
                      Boston, MA 02108
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <form className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 h-32"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg transition duration-200"
                  type="submit"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Contact;