import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Users, Target, Award, Clock, Zap, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What is Sentence Counter?",
    answer: "Sentence Counter is a professional text analysis tool that helps writers, educators, and content creators analyze their text. It provides accurate sentence counting, duplicate detection, and word counting features, all while maintaining complete privacy and security."
  },
  {
    question: "How accurate is the sentence counting?",
    answer: "Our sentence counter achieves 99.9% accuracy through advanced natural language processing algorithms. It correctly identifies sentence boundaries using sophisticated punctuation analysis and context understanding, ensuring reliable results for professional use."
  },
  {
    question: "Is my text secure and private?",
    answer: "Absolutely! Your privacy is our top priority. All text analysis happens directly in your browser - your content never leaves your device or gets stored on any servers. We use state-of-the-art security measures to ensure complete data protection."
  },
  {
    question: "Can I use Sentence Counter for academic writing?",
    answer: "Yes! Sentence Counter is perfect for academic writing. It helps researchers, students, and educators analyze text structure, ensure clarity, and maintain consistent writing style. It's particularly useful for checking thesis papers, dissertations, and research articles."
  },
  {
    question: "Do I need to create an account to use Sentence Counter?",
    answer: "No, Sentence Counter is freely available to use without any account creation. Simply visit our website, paste your text, and get instant analysis. This ensures quick access and maintains your privacy."
  },
  {
    question: "How does duplicate sentence detection work?",
    answer: "Our sophisticated algorithm compares each sentence in your text, identifying exact and near-matches. This helps you avoid unintentional repetition and maintain content originality. The system accounts for minor variations while catching substantial duplicates."
  }
];

const FAQItem = ({ item, index }: { item: FAQItem; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="border border-purple-100 rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between bg-gradient-to-r from-purple-50 to-blue-50 hover:from-purple-100 hover:to-blue-100 transition-colors duration-300"
      >
        <h3 className="text-lg font-semibold text-gray-800 text-left">{item.question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-5 h-5 text-purple-600" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="px-6 py-4 text-gray-600 leading-relaxed">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>About Sentence Counter - Professional Text Analysis Tool</title>
        <meta name="description" content="Learn about Sentence Counter - Your trusted tool for professional text analysis, sentence counting, and writing improvement. Perfect for writers, educators, and content creators." />
        <meta name="keywords" content="sentence counter about, text analysis tool, professional writing tool, sentence counting software, content analysis tool, writing improvement" />
        <link rel="canonical" href="https://sentence-counter.com/about" />
        <meta property="og:title" content="About Sentence Counter - Professional Text Analysis Tool" />
        <meta property="og:description" content="Discover how Sentence Counter helps writers, educators, and content creators improve their writing with professional text analysis tools." />
        <meta property="og:url" content="https://sentence-counter.com/about" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About Sentence Counter",
            "description": "Professional text analysis and sentence counting tool",
            "url": "https://sentence-counter.com/about",
            "publisher": {
              "@type": "Organization",
              "name": "Sentence Counter",
              "foundingDate": "2020",
              "email": "support@sentence-counter.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://sentence-counter.com/logo.png"
              }
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": FAQ_ITEMS.map(item => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
              }
            }))
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
              <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">About Us</h1>
              <div className="h-1 w-24 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mt-4 rounded-full" />
              <p className="text-xl text-gray-600 mt-6">
                Empowering writers and content creators with intelligent text analysis tools since 2020.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Story</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Founded by a team of language enthusiasts and tech innovators, Sentence Counter emerged from a simple idea: to make text analysis accessible, accurate, and intuitive for everyone.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Today, we serve millions of users worldwide, from students and teachers to professional writers and content creators, helping them optimize their writing and enhance their content quality.
                </p>
              </motion.div>

              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl p-8"
              >
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Mission</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  We're dedicated to revolutionizing how people analyze and improve their writing through cutting-edge technology and user-friendly tools.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Our goal is to empower writers of all levels with insights that make their content stronger, clearer, and more impactful.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
            >
              {[
                {
                  icon: <Shield className="w-8 h-8 text-purple-600" />,
                  title: "Trusted Platform",
                  description: "Secure, reliable, and trusted by millions of users worldwide"
                },
                {
                  icon: <Clock className="w-8 h-8 text-blue-600" />,
                  title: "24/7 Availability",
                  description: "Our tools are always available when you need them"
                },
                {
                  icon: <Zap className="w-8 h-8 text-indigo-600" />,
                  title: "Lightning Fast",
                  description: "Get instant results with our optimized algorithms"
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mb-16"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
                  Frequently Asked Questions
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mt-4 rounded-full" />
                <p className="text-xl text-gray-600 mt-6">
                  Everything you need to know about Sentence Counter
                </p>
              </div>
              <div className="space-y-4">
                {FAQ_ITEMS.map((item, index) => (
                  <FAQItem key={index} item={item} index={index} />
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 text-white text-center"
            >
              <h2 className="text-3xl font-bold mb-6">Start Using Sentence Counter</h2>
              <p className="text-xl mb-8">
                Experience the power of professional text analysis today.
              </p>
              <Link 
                to="/"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 inline-block"
              >
                Try It Now
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default About;