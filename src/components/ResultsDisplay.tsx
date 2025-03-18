import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Copy, AlertCircle, BookOpen } from 'lucide-react';

interface ResultsDisplayProps {
  totalSentences: number;
  uniqueSentences: number;
  duplicateSentences: number;
  totalWords: number;
}

const ResultsDisplay = ({ totalSentences, uniqueSentences, duplicateSentences, totalWords }: ResultsDisplayProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl shadow-xl p-8 mb-12"
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
          Analysis Results
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mt-4 rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="relative overflow-hidden group"
        >
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100 transition-transform duration-300 group-hover:translate-y-[-4px]">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-purple-500/10 rounded-2xl" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-purple-100 p-2 rounded-xl">
                  <FileText className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-purple-900">Total Sentences</h3>
              </div>
              <p className="text-4xl font-bold text-purple-700 mb-2">{totalSentences}</p>
              <p className="text-purple-600/80 text-sm">Complete sentence count</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="relative overflow-hidden group"
        >
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100 transition-transform duration-300 group-hover:translate-y-[-4px]">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-500/10 rounded-2xl" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-100 p-2 rounded-xl">
                  <Copy className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-blue-900">Unique Sentences</h3>
              </div>
              <p className="text-4xl font-bold text-blue-700 mb-2">{uniqueSentences}</p>
              <p className="text-blue-600/80 text-sm">Distinct sentence count</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="relative overflow-hidden group"
        >
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-emerald-100 transition-transform duration-300 group-hover:translate-y-[-4px]">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-emerald-500/10 rounded-2xl" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-emerald-100 p-2 rounded-xl">
                  <AlertCircle className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-emerald-900">Duplicate Sentences</h3>
              </div>
              <p className="text-4xl font-bold text-emerald-700 mb-2">{duplicateSentences}</p>
              <p className="text-emerald-600/80 text-sm">Repeated sentence count</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="relative overflow-hidden group"
        >
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-amber-100 transition-transform duration-300 group-hover:translate-y-[-4px]">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-amber-500/10 rounded-2xl" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-amber-100 p-2 rounded-xl">
                  <BookOpen className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-lg font-semibold text-amber-900">Total Words</h3>
              </div>
              <p className="text-4xl font-bold text-amber-700 mb-2">{totalWords}</p>
              <p className="text-amber-600/80 text-sm">Complete word count</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ResultsDisplay;