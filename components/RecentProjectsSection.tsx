import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from './Icons';

const projects = [
  {
    id: 1,
    year: '2023',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Lakeside Villa',
    hasTextOverlay: false
  },
  {
    id: 2,
    year: '2025',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Skyline Haven',
    hasTextOverlay: false
  },
  {
    id: 3,
    year: '2020',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 
    title: 'The Meridian Workspace',
    subtitle: 'Archistry Design Agency',
    hasTextOverlay: true
  },
  {
    id: 4,
    year: '2024',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Geometric Living',
    hasTextOverlay: false
  }
];

const categories = ['All', 'Urban Planning', 'Interior Design', 'Renovation', 'Redesign'];

export const RecentProjectsSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-24 px-4 md:px-8">
      <div className="max-w-[1400px] mx-auto flex flex-col">
        
        {/* Header Section */}
        <div className="flex flex-col mb-16">
            {/* Pill Tag */}
            <div className="mb-6">
                <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-gray-200 bg-gray-50 text-sm font-medium text-gray-800 shadow-sm">
                    • Works
                </span>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                {/* Title & Description */}
                <div className="max-w-xl">
                    <h2 className="text-4xl md:text-6xl font-semibold text-slate-900 mb-6 tracking-tight">
                        Recent Projects
                    </h2>
                    <p className="text-gray-500 text-lg leading-relaxed">
                        Each project highlights our focus on creativity, functionality, and architectural excellence.
                    </p>
                </div>

                {/* Controls & Filters */}
                <div className="flex flex-col items-end gap-8 w-full md:w-auto">
                    {/* Pagination */}
                    <div className="flex items-center gap-4 text-sm font-medium text-gray-500">
                        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors"><ChevronLeftIcon /></button>
                        <span className="tracking-widest text-slate-900">01 / 03</span>
                        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors"><ChevronRightIcon /></button>
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex flex-wrap justify-end gap-3">
                        {categories.map((cat, idx) => (
                            <button 
                                key={cat}
                                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                                    idx === 0 
                                    ? 'bg-black text-white shadow-lg' 
                                    : 'bg-white border border-gray-200 text-gray-600 hover:border-gray-400 hover:text-slate-900'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project) => (
                <div 
                    key={project.id} 
                    className="group relative aspect-[3/4] rounded-[2rem] overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-500"
                >
                    {/* Image */}
                    <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Dark Overlay for text legibility if needed, or hover effect */}
                    <div className={`absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors ${project.hasTextOverlay ? 'bg-black/30' : ''}`}></div>

                    {/* Year Badge */}
                    <div className="absolute top-6 right-6 bg-white/30 backdrop-blur-md text-white border border-white/20 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide">
                        {project.year}
                    </div>

                    {/* Content Overlay (Specific for Card 3 style) */}
                    {project.hasTextOverlay && (
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 text-white z-10">
                             <p className="text-xs font-medium uppercase tracking-widest mb-2 opacity-80">{project.subtitle}</p>
                             <h3 className="text-2xl font-bold leading-tight"> - {project.title}</h3>
                        </div>
                    )}

                    {/* Bottom Button */}
                    <div className={`absolute bottom-6 right-6 z-20 transition-all duration-300 ${project.hasTextOverlay ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}>
                        <button className="bg-white text-slate-900 px-5 py-2.5 rounded-full text-xs font-bold shadow-lg hover:scale-105 transition-transform">
                            Take a look
                        </button>
                    </div>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};