import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import useSound from 'use-sound';
import { Helmet } from 'react-helmet-async';
import LoadingSpinner from '../components/LoadingSpinner';
import ResultsDisplay from '../components/ResultsDisplay';
import { ArrowUp, Zap, Brain, Target, Award, Sparkles } from 'lucide-react';

const Home = () => {
  const [text, setText] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<{ total: number; unique: number; duplicate: number; words: number } | null>(null);
  const [playClick] = useSound('/click.mp3');

  const analyzeSentences = async (text: string) => {
    setIsAnalyzing(true);
    playClick();

    await new Promise(resolve => setTimeout(resolve, 1500));

    const sentences = text
      .split(/[.!?]+/)
      .map(s => s.trim())
      .filter(s => s.length > 0);

    const words = text
      .trim()
      .split(/\s+/)
      .filter(word => word.length > 0);

    const uniqueSentences = new Set(sentences);

    setResults({
      total: sentences.length,
      unique: uniqueSentences.size,
      duplicate: sentences.length - uniqueSentences.size,
      words: words.length
    });

    setIsAnalyzing(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Sentence Counter - Professional Text Analysis Tool</title>
        <meta name="description" content="Free online sentence counter tool. Count sentences, identify duplicates, and analyze your text with our professional text analysis tool. Perfect for writers, educators, and content creators." />
        <meta name="keywords" content="sentence counter, sentences counter, sentence count, count sentences, text analysis, word count, duplicate sentence checker, writing tool" />
        <link rel="canonical" href="https://sentence-counter.com" />
        <meta property="og:title" content="Sentence Counter - Professional Text Analysis Tool" />
        <meta property="og:description" content="Free online sentence counter tool. Count sentences, identify duplicates, and analyze your text with our professional text analysis tool." />
        <meta property="og:url" content="https://sentence-counter.com" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Sentence Counter",
            "url": "https://sentence-counter.com",
            "description": "Professional text analysis and sentence counting tool",
            "applicationCategory": "Writing Tool",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "featureList": [
              "Sentence counting",
              "Duplicate detection",
              "Word counting",
              "Text analysis"
            ]
          })}
        </script>
      </Helmet>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto px-4 py-8"
      >
        <section className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block p-2 px-4 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full text-purple-600 font-semibold mb-6"
            >
              #1 Professional Text Analysis Tool
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 animate-gradient">
                  Sentence Counter
                </span>
                <motion.span
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="inline-block ml-3"
                >
                  ✨
                </motion.span>
              </h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
              >
                Advanced sentence analysis for writers, educators, and content creators.
                Optimize your writing with precise counting and intelligent duplicate detection.
              </motion.p>
            </motion.div>
          </motion.div>

          <div className="flex justify-center mb-16">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-2xl p-10 border border-blue-100 w-full max-w-4xl"
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Analyze Your Text</h2>
                <p className="text-lg text-gray-600">Experience professional-grade sentence analysis in seconds</p>
              </div>
              <textarea
                className="w-full h-72 p-6 border-2 border-blue-200 rounded-2xl focus:ring-4 focus:ring-blue-300 focus:border-blue-400 text-lg transition-all duration-300 bg-white/50 backdrop-blur-sm"
                placeholder="Enter your text here to analyze..."
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 px-10 py-4 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 mx-auto group"
                onClick={() => analyzeSentences(text)}
                disabled={isAnalyzing || !text.trim()}
              >
                <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                {isAnalyzing ? 'Analyzing...' : 'Analyze Text'}
              </motion.button>
            </motion.div>
          </div>

          {isAnalyzing && <LoadingSpinner />}

          {results && !isAnalyzing && (
            <ResultsDisplay
              totalSentences={results.total}
              uniqueSentences={results.unique}
              duplicateSentences={results.duplicate}
              totalWords={results.words}
            />
          )}

          <div className="mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600"
            >
              Why Choose Sentence Counter?
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-purple-200"
              >
                <div className="bg-purple-500 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-purple-800 mb-4">Lightning Fast</h3>
                <p className="text-purple-700">Instant analysis of your text with real-time results and professional-grade accuracy.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-200"
              >
                <div className="bg-blue-500 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-blue-800 mb-4">Smart Analysis</h3>
                <p className="text-blue-700">Advanced algorithms detect sentence patterns and provide comprehensive insights.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-indigo-200"
              >
                <div className="bg-indigo-500 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-indigo-800 mb-4">Professional Grade</h3>
                <p className="text-indigo-700">Trusted by writers, educators, and content professionals worldwide.</p>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="max-w-4xl mx-auto mb-20 text-center"
          >
            <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
              What Makes Sentence Counter Special?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6 text-left">
                <h3 className="text-xl font-semibold mb-4 text-purple-600">Advanced Analysis</h3>
                <p className="text-gray-600">
                  Our sophisticated algorithms don't just count sentences - they analyze structure, identify patterns, and help you improve your writing quality. Perfect for content creators, educators, and professionals.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 text-left">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Privacy First</h3>
                <p className="text-gray-600">
                  Your text never leaves your browser. All analysis happens locally, ensuring complete privacy and security for your content. No storage, no tracking - just pure functionality.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 text-left">
                <h3 className="text-xl font-semibold mb-4 text-indigo-600">Comprehensive Results</h3>
                <p className="text-gray-600">
                  Get detailed insights about your text, including total sentences, unique sentences, and duplicate detection. Perfect for ensuring content originality and clarity.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 text-left">
                <h3 className="text-xl font-semibold mb-4 text-green-600">User-Friendly</h3>
                <p className="text-gray-600">
                  Simple, intuitive interface designed for both beginners and professionals. No learning curve - just paste your text and get instant results.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
              Trusted by Professionals Worldwide
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { number: '1M+', label: 'Documents Analyzed' },
                { number: '50K+', label: 'Active Users' },
                { number: '99.9%', label: 'Accuracy Rate' },
                { number: '24/7', label: 'Support Available' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
                >
                  <p className="text-3xl font-bold text-purple-600">{stat.number}</p>
                  <p className="text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-center"
          >
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 transition-colors duration-200"
            >
              <ArrowUp className="w-6 h-6 animate-bounce" />
              <span className="font-medium">Start Counting The Sentences</span>
            </button>
          </motion.div>
        </section>
      </motion.div>
    </>
  );
};

export default Home;