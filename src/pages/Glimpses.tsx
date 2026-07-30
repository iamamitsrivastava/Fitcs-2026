"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, MessageCircle, Share2, Bookmark, PlayCircle, Instagram } from 'lucide-react';

const Glimpses = () => {
  const [activeTab, setActiveTab] = useState('All');

  const tabs = ['All', 'Images', 'Videos'];

  const galleryItems = [
    {
      id: 1,
      type: 'video',
      source: 'youtube',
      youtubeId: 's_VNqr8S5SQ',
      description: 'PICET 2023: Conference on Engineering & Technology',
    },
    {
      id: 2,
      type: 'image',
      source: 'instagram',
      instagramId: 'CsLFwC2NXqK',
      description: 'Instagram Post 1',
    },
    {
      id: 3,
      type: 'image',
      source: 'instagram',
      instagramId: 'CsSpp7Pt2z9',
      description: 'Instagram Post 2',
    },
    {
      id: 4,
      type: 'image',
      source: 'instagram',
      instagramId: 'CfrMm9jtgAf',
      description: 'Instagram Post 3',
    },
    {
      id: 5,
      type: 'video',
      source: 'youtube',
      youtubeId: 'Dbj2FEfc2Ds',
      description: '4th International PICET Conference 2 highlights.',
    },
    {
      id: 6,
      type: 'image',
      source: 'instagram',
      instagramId: 'Cd8Fhjap4up',
      description: 'Instagram Post 4',
    },
    {
      id: 7,
      type: 'image',
      source: 'instagram',
      instagramId: 'Cd5tP6UoFhd',
      description: 'Instagram Post 5',
    },
    {
      id: 8,
      type: 'video',
      source: 'youtube',
      youtubeId: 'lRKVE5rqr-U',
      description: 'Chairman, AICTE shares experience',
    },
    {
      id: 9,
      type: 'video',
      source: 'instagram',
      instagramId: 'DKEzHNWzejR',
      description: 'Instagram Reel',
    }
  ];

  const filteredItems = galleryItems.filter((item) => {
    if (activeTab === 'All') return true;
    if (activeTab === 'Images') return item.type === 'image';
    if (activeTab === 'Videos') return item.type === 'video';
    return true;
  });

  return (
    <div className="min-h-screen bg-[#0f172a] pt-32 pb-16">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">

          <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-md mb-8">
            Glimpses of Conference
          </h2>

          {/* Tabs */}
          <div className="flex items-center justify-center space-x-2 md:space-x-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.5)]'
                    : 'bg-transparent text-gray-400 border border-gray-600 hover:text-white hover:border-gray-400'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className={`rounded-xl overflow-hidden shadow-xl flex justify-center items-center w-full h-[350px] md:h-[420px] ${
                  item.source === 'youtube' ? 'bg-black' : 'bg-white'
                }`}
              >
                {item.source === 'instagram' && (item as any).instagramId ? (
                  <div className="w-full h-full overflow-hidden bg-black/5 flex justify-center items-start">
                    <iframe
                      className="w-full border-0"
                      style={{ height: '620px', marginTop: '-54px' }}
                      src={`https://www.instagram.com/p/${(item as any).instagramId}/embed/?hidecaption=true`}
                      allowFullScreen
                      scrolling="no"
                    />
                  </div>
                ) : item.source === 'youtube' && (item as any).youtubeId ? (
                  <iframe
                    className="w-full h-full border-0"
                    src={`https://www.youtube.com/embed/${(item as any).youtubeId}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    scrolling="no"
                  />
                ) : null}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Glimpses;
