import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, FileText, Mail, AlertTriangle, CheckCircle, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const DMCA = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>DMCA Policy - Sentence Counter</title>
        <meta name="description" content="Learn about our DMCA policy and how we protect intellectual property rights at Sentence Counter." />
        <meta name="keywords" content="DMCA policy, copyright protection, intellectual property, content rights" />
        <link rel="canonical" href="https://sentence-counter.com/dmca" />
        <meta property="og:title" content="DMCA Policy - Sentence Counter" />
        <meta property="og:description" content="Learn about our DMCA policy and intellectual property protection at Sentence Counter." />
        <meta property="og:url" content="https://sentence-counter.com/dmca" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "DMCA Policy - Sentence Counter",
            "description": "Our DMCA policy and intellectual property protection guidelines",
            "publisher": {
              "@type": "Organization",
              "name": "Sentence Counter",
              "logo": {
                "@type": "ImageObject",
                "url": "https://sentencecounter.live/logo.png"
              }
            }
          })}
        </script>
      </Helmet>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">DMCA Policy</h1>
              <p className="text-xl text-gray-600">Protecting Intellectual Property Rights</p>
            </motion.div>

            <div className="space-y-12">
              <motion.section
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <Shield className="w-8 h-8 text-purple-600" />
                  <h2 className="text-2xl font-bold">Copyright Protection</h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Sentence Counter respects the intellectual property rights of others and expects our users to do the same. We comply with the Digital Millennium Copyright Act (DMCA) and other applicable intellectual property laws.
                </p>
              </motion.section>

              <motion.section
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <FileText className="w-8 h-8 text-blue-600" />
                  <h2 className="text-2xl font-bold">Filing a DMCA Notice</h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  To file a DMCA notice, please provide the following information:
                </p>
                <ul className="list-disc list-inside space-y-3 text-gray-600 ml-4">
                  <li>A physical or electronic signature of the copyright owner</li>
                  <li>Identification of the copyrighted work claimed to have been infringed</li>
                  <li>Identification of the material that is claimed to be infringing</li>
                  <li>Your contact information (address, telephone number, email)</li>
                  <li>A statement of good faith belief that the use is not authorized</li>
                  <li>A statement that the information is accurate and that you are authorized to act on behalf of the copyright owner</li>
                </ul>
              </motion.section>

              <motion.section
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <AlertTriangle className="w-8 h-8 text-yellow-600" />
                  <h2 className="text-2xl font-bold">Counter-Notification</h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  If you believe your content was removed in error, you may file a counter-notification containing:
                </p>
                <ul className="list-disc list-inside space-y-3 text-gray-600 ml-4">
                  <li>Your physical or electronic signature</li>
                  <li>Identification of the removed material and its location</li>
                  <li>A statement under penalty of perjury that you have a good faith belief the material was removed by mistake</li>
                  <li>Your consent to local federal court jurisdiction</li>
                  <li>Your name, address, and telephone number</li>
                </ul>
              </motion.section>

              <motion.section
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                  <h2 className="text-2xl font-bold">Our Response</h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Upon receiving a valid DMCA notice, we will:
                </p>
                <ul className="list-disc list-inside space-y-3 text-gray-600 ml-4">
                  <li>Promptly remove or disable access to the infringing material</li>
                  <li>Notify the content provider of the removal</li>
                  <li>Provide information about the counter-notification process</li>
                  <li>Take appropriate action against repeat infringers</li>
                </ul>
              </motion.section>
            </div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white text-center"
            >
              <h2 className="text-2xl font-bold mb-4">Need to Submit a DMCA Notice?</h2>
              <p className="mb-6">Our team is ready to assist you with any copyright concerns.</p>
              <div className="flex items-center justify-center gap-4">
                <a 
                  href="mailto:dmca@sentencecounter.live"
                  className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Contact DMCA Agent
                </a>
                <Link 
                  to="/privacy"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300 flex items-center gap-2"
                >
                  <HelpCircle className="w-5 h-5" />
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default DMCA;