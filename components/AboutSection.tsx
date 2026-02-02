import React from 'react';

export const AboutSection: React.FC = () => {
    return (
        <section id="about" className="w-full bg-white py-20 md:py-32 px-4 md:px-8">
            <div className="max-w-[1400px] mx-auto flex flex-col items-center">

                {/* Pill Tag */}
                <div className="mb-8 md:mb-12">
                    <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-gray-200 bg-gray-50 text-sm font-medium text-gray-800 shadow-sm">
                        • Who we are?
                    </span>
                </div>

                {/* Main Typography Headline */}
                <h2 className="max-w-6xl mx-auto text-center text-3xl md:text-5xl lg:text-[3.5rem] leading-[1.2] tracking-tight font-medium text-gray-400 mb-16 md:mb-24">
                    We Are A Team Of Passionate Experts Creating <br className="hidden md:block" />
                    <span className="text-black font-semibold">Thoughtful, Sustainable,</span> And <span className="text-black font-semibold">Inspiring</span> Spaces. <br className="hidden md:block" />
                    From Search To Settlement, We Work With <span className="text-black font-semibold">Purpose</span> <br className="hidden md:block" />
                    <span className="text-black font-semibold">And Precision</span> To Bring <span className="text-black font-semibold">Your Dream House To Life.</span>
                </h2>

                {/* Image Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mb-24 md:mb-32">
                    <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform duration-500">
                        <img
                            src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            alt="Modern Architecture 1"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform duration-500">
                        <img
                            src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=800&q=80"
                            alt="Modern Architecture 2"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform duration-500">
                        <img
                            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80"
                            alt="Modern Architecture 3"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Divider */}
                <div className="w-full max-w-7xl flex items-center justify-center gap-6 mb-24">
                    <div className="h-px bg-gray-200 flex-1 relative">
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-black"></div>
                    </div>
                    <span className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Our Achievements</span>
                    <div className="h-px bg-gray-200 flex-1 relative">
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-black"></div>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 w-full">
                    <StatsCard number="96%" label="Client Retention Rate" />
                    <StatsCard number="10M+" label="Square Feet Designed" />
                    <StatsCard number="2M+" label="Construction Hours" />
                    <StatsCard number="4K+" label="Project Blueprints Delivered" />
                </div>

            </div>
        </section>
    );
};

const StatsCard: React.FC<{ number: string; label: string }> = ({ number, label }) => (
    <div className="bg-gray-50 rounded-[2rem] p-8 md:p-12 flex flex-col items-center justify-center text-center hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100 group">
        <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-400 group-hover:text-gray-900 transition-colors duration-300 mb-4">
            {number}
        </h3>
        <p className="text-sm md:text-base text-gray-500 font-medium tracking-wide">
            {label}
        </p>
    </div>
);