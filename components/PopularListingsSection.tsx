import React from 'react';
import { MapPinIcon, CalendarIcon, DollarIcon, FilterIcon, SearchIcon, ChevronDownIcon, BedIcon, BathIcon, AreaIcon } from './Icons';

const listings = [
   {
      id: 1,
      title: "Rosewood Manor",
      address: "Miami, Florida, celinam delware 10821",
      price: "2,500",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      beds: 3,
      baths: 2,
      area: "6x8 m"
   },
   {
      id: 2,
      title: "Greenwood Estates",
      address: "Denver, Colorado, 80401",
      price: "2,500",
      image: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      beds: 4,
      baths: 3,
      area: "7x9 m"
   },
   {
      id: 3,
      title: "Cypress Hill Villa",
      address: "Austin, Texas, 73301",
      price: "2,500",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      beds: 4,
      baths: 3,
      area: "6.5x8.5 m"
   },
   {
      id: 4,
      title: "Maplewood Retreat",
      address: "Seattle, Washington, 98101",
      price: "2,500",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      beds: 2,
      baths: 3,
      area: "7x9 m"
   },
   {
      id: 5,
      title: "Seabreeze Residence",
      address: "Malibu, California, 90265",
      price: "2,500",
      image: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      beds: 1,
      baths: 2,
      area: "8x10 m"
   },
   {
      id: 6,
      title: "Aurora Point",
      address: "Scottsdale, Arizona, 85251",
      price: "2,500",
      image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      beds: 4,
      baths: 3,
      area: "6x8 m"
   }
];

export const PopularListingsSection: React.FC = () => {
   return (
      <section id="search" className="w-full bg-white pb-32 px-4 md:px-8">
         <div className="max-w-[1400px] mx-auto">

            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10">
               <div>
                  <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-4 tracking-tight">
                     Popular Listing
                  </h2>
                  <p className="text-gray-400 text-lg">
                     Each project highlights our focus on creativity.
                  </p>
               </div>
               <div className="mt-4 md:mt-0">
                  <button className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-black transition-colors">
                     Sort by: <span className="text-black font-semibold">Popular</span> <ChevronDownIcon />
                  </button>
               </div>
            </div>

            {/* Filter Bar */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-2 mb-16 flex flex-col lg:flex-row gap-4 lg:gap-0 lg:items-center">

               {/* Location */}
               <div className="flex-1 flex items-center gap-4 px-4 py-2 border-b lg:border-b-0 lg:border-r border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500">
                     <MapPinIcon />
                  </div>
                  <div className="flex-1">
                     <p className="text-xs text-gray-500 font-medium mb-0.5">Location</p>
                     <div className="flex items-center justify-between cursor-pointer">
                        <span className="font-semibold text-slate-900 text-sm">Miami, Florida</span>
                        <ChevronDownIcon />
                     </div>
                  </div>
               </div>

               {/* Date */}
               <div className="flex-1 flex items-center gap-4 px-4 py-2 border-b lg:border-b-0 lg:border-r border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500">
                     <CalendarIcon />
                  </div>
                  <div className="flex-1">
                     <p className="text-xs text-gray-500 font-medium mb-0.5">Start date - End date</p>
                     <div className="flex items-center justify-between cursor-pointer">
                        <span className="font-semibold text-slate-900 text-sm truncate">12 march, 2025 - 12 march, 2026</span>
                        <ChevronDownIcon />
                     </div>
                  </div>
               </div>

               {/* Price */}
               <div className="flex-1 flex items-center gap-4 px-4 py-2 border-b lg:border-b-0 lg:border-r border-gray-100 lg:max-w-[200px]">
                  <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500">
                     <DollarIcon />
                  </div>
                  <div className="flex-1">
                     <p className="text-xs text-gray-500 font-medium mb-0.5">Price</p>
                     <div className="flex items-center justify-between cursor-pointer">
                        <span className="font-semibold text-slate-900 text-sm">$5000</span>
                        <ChevronDownIcon />
                     </div>
                  </div>
               </div>

               {/* Buttons */}
               <div className="flex items-center gap-3 px-2 py-2">
                  <button className="flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-200 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors whitespace-nowrap">
                     <FilterIcon />
                     More filters
                  </button>
                  <button className="flex items-center gap-2 px-8 py-3 rounded-xl bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition-colors shadow-lg shadow-gray-200">
                     Search
                  </button>
               </div>
            </div>

            {/* Listings Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
               {listings.map((listing) => (
                  <div
                     key={listing.id}
                     className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                     {/* Image */}
                     <div className="aspect-[4/3] overflow-hidden relative">
                        <img
                           src={listing.image}
                           alt={listing.title}
                           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                     </div>

                     {/* Content */}
                     <div className="p-6">
                        <div className="flex items-baseline gap-1 mb-2">
                           <span className="text-xl font-bold text-slate-900">${listing.price}</span>
                           <span className="text-xs text-gray-400">/month</span>
                        </div>

                        <h3 className="text-lg font-bold text-slate-900 mb-1">{listing.title}</h3>
                        <p className="text-sm text-gray-500 mb-6 truncate">{listing.address}</p>

                        {/* Amenities */}
                        <div className="flex items-center justify-between border-t border-gray-50 pt-4">
                           <div className="flex items-center gap-2 text-gray-500">
                              <BedIcon />
                              <span className="text-xs font-semibold">{listing.beds} Beds</span>
                           </div>
                           <div className="flex items-center gap-2 text-gray-500">
                              <BathIcon />
                              <span className="text-xs font-semibold">{listing.baths} Bathrooms</span>
                           </div>
                           <div className="flex items-center gap-2 text-gray-500">
                              <AreaIcon />
                              <span className="text-xs font-semibold">{listing.area}</span>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>

            {/* Load More */}
            <div className="flex justify-center">
               <button className="bg-slate-900 text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-slate-800 transition-colors shadow-lg shadow-gray-200">
                  Load More
               </button>
            </div>

         </div>
      </section>
   );
};