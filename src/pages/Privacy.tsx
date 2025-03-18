import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, Bell, RefreshCw, Mail } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Privacy Policy - Sentence Counter</title>
        <meta name="description" content="Learn about how we protect your privacy and handle your data at Sentence Counter. Our commitment to secure text analysis and data protection." />
        <meta name="keywords" content="sentence counter privacy, text analysis privacy, data protection, writing tool security, content privacy" />
        <link rel="canonical" href="https://sentence-counter.com/privacy" />
        <meta property="og:title" content="Privacy Policy - Sentence Counter" />
        <meta property="og:description" content="Discover how Sentence Counter protects your privacy and ensures secure text analysis." />
        <meta property="og:url" content="https://sentence-counter.com/privacy" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Privacy Policy - Sentence Counter",
            "description": "Our privacy policy and data protection guidelines",
            "url": "https://sentence-counter.com/privacy",
            "publisher": {
              "@type": "Organization",
              "name": "Sentence Counter",
              "email": "support@sentence-counter.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://sentence-counter.com/logo.png"
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
              <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">Privacy Policy</h1>
              <div className="h-1 w-24 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mt-4 rounded-full" />
              <p className="text-xl text-gray-600 mt-6">Last updated: {new Date().toLocaleDateString()}</p>
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
                  <h2 className="text-2xl font-bold">Data Protection Commitment</h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  At Sentence Counter, we take your privacy seriously. Our commitment to protecting your personal information is fundamental to how we operate. We've designed our services with privacy in mind, ensuring that your data remains secure and confidential.
                </p>
              </motion.section>

              <motion.section
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <Database className="w-8 h-8 text-blue-600" />
                  <h2 className="text-2xl font-bold">Information Collection</h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We do not store any of the text you analyze. All processing is done directly in your browser, ensuring your content never leaves your device. We collect minimal technical information necessary for the service to function properly:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Browser type and version</li>
                  <li>Device information</li>
                  <li>Usage statistics (anonymized)</li>
                  <li>Cookies for essential functionality</li>
                </ul>
              </motion.section>

              <motion.section
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <Lock className="w-8 h-8 text-green-600" />
                  <h2 className="text-2xl font-bold">Data Security</h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We implement industry-standard security measures to protect your information:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>SSL/TLS encryption for all data transfers</li>
                  <li>Regular security audits and updates</li>
                  <li>Secure data processing practices</li>
                  <li>Limited access to personal information</li>
                </ul>
              </motion.section>

              <motion.section
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <Bell className="w-8 h-8 text-yellow-600" />
                  <h2 className="text-2xl font-bold">Policy Updates</h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We may update this Privacy Policy periodically to reflect changes in our practices or for legal compliance. We will notify you of any material changes through:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Email notifications (if you've opted in)</li>
                  <li>Website announcements</li>
                  <li>Application notifications</li>
                </ul>
              </motion.section>
            </div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white text-center"
            >
              <h2 className="text-2xl font-bold mb-4">Questions About Privacy?</h2>
              <p className="mb-6">We're here to help you understand how we protect your data.</p>
              <a 
                href="mailto:privacy@sentence-counter.com"
                className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 inline-flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Contact Privacy Team
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Privacy;