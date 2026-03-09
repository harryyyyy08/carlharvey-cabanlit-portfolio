'use client';

import React from 'react';
import { ArrowDown, Download, Calendar } from 'lucide-react';
import { personalInfo } from '@/data/content';

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = async () => {
    try {
      // Method 1: Try fetch first to verify file exists
      const response = await fetch('/assets/docs/Cabanlit_Resume.pdf');
      
      if (!response.ok) {
        throw new Error('File not found');
      }
      
      // Method 2: Create blob and download
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Carl_Harvey_Cabanlit_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Clean up
      window.URL.revokeObjectURL(url);
      
    } catch (error) {
      // Fallback: Try direct link
      const link = document.createElement('a');
      link.href = '/assets/docs/Cabanlit_Resume.pdf';
      link.download = 'Carl_Harvey_Cabanlit_Resume.pdf';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      alert('Resume downloaded. If the file appears blank, please check the original file or try re-uploading it.');
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Hi, I'm{' '}
            <span className="text-blue-600">{personalInfo.name.split(' ')[0]}</span>
          </h1>
          
          {/* Professional Title */}
          <h2 className="text-2xl md:text-3xl text-gray-700 mb-4">
            {personalInfo.title}
          </h2>
          
          {/* Tagline */}
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {personalInfo.tagline}
          </p>
          
          {/* Short Bio */}
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            {personalInfo.bio}
          </p>
          
          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={() => scrollToSection('#projects')}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2"
            >
              View My Projects
              <ArrowDown className="w-5 h-5" />
            </button>
            
            <button
              onClick={() => scrollToSection('#contact')}
              className="bg-transparent border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-200"
            >
              Get In Touch
            </button>
            
            <button
              onClick={downloadResume}
              className="bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors duration-200 flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </button>
          </div>
          
          {/* Quick Stats or Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-2">3+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <button
              onClick={() => scrollToSection('#about')}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <ArrowDown className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
