import React, { useState } from 'react';
import { CheckIcon, DiamondIcon, CrownIcon, CloudIcon, WalletIcon } from './Icons';

export const PricingSection: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Explore Plan",
      icon: <DiamondIcon />,
      price: "Free",
      period: "/month",
      description: "Ideal for curious buyers, renters, or first-time investors exploring the market. Browse listings and learn the basics.",
      features: [
        "View nationwide property listings",
        "Save and organize favorite properties",
        "Access to beginner real estate guides",
        "Email alerts for new listings",
        "Community forum access"
      ],
      buttonText: "Current Plan",
      isPrimary: false
    },
    {
      name: "Navigate Plan",
      icon: <CrownIcon />,
      price: isYearly ? "$790" : "$79",
      period: isYearly ? "/year" : "/month",
      description: "For active buyers, sellers, or small investors who want deeper insights and tools to make smart moves.",
      features: [
        "All Explore features included",
        "Neighborhood insights & school data",
        "Schedule virtual tours & appointments",
        "Access to agent-matching service",
        "Market trends & value forecasts",
        "Priority support with live chat"
      ],
      buttonText: "Subscribe",
      isPrimary: false
    },
    {
      name: "Empire Plan",
      icon: <CloudIcon />,
      price: isYearly ? "$3,490" : "$349",
      period: isYearly ? "/year" : "/month",
      description: "Built for real estate professionals, high-volume investors, and development firms managing serious portfolios.",
      features: [
        "All Navigate features included",
        "Custom investment strategy sessions",
        "Access to off-market & early listings",
        "Portfolio performance dashboard",
        "Legal & tax advisory session (1 per quarter)",
        "Dedicated real estate concierge",
        "Early access to webinars & events"
      ],
      buttonText: "Subscribe",
      isPrimary: true
    }
  ];

  return (
    <section id="pricing" className="w-full bg-white py-24 px-4 md:px-8">
      <div className="max-w-[1400px] mx-auto flex flex-col items-center">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 mb-6 tracking-tight leading-[1.1]">
            Flexible Plans.
            <span className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-gray-100 rounded-xl mx-3 align-middle text-slate-900 border border-gray-200">
              <WalletIcon />
            </span>
            Transparent <br />
            Pricing. Real Estate Made Simple.
          </h2>
          <p className="text-gray-400 text-sm md:text-base font-medium mt-4">
            Whether you're buying, selling, or investing — we've got you covered.
          </p>
        </div>

        {/* Toggle Switch */}
        <div className="flex items-center gap-4 mb-20">
          <span className={`text-sm font-medium transition-colors ${!isYearly ? 'text-slate-900' : 'text-gray-400'}`}>Monthly</span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className="w-16 h-8 bg-gray-100 rounded-full p-1 relative transition-colors duration-300 focus:outline-none"
          >
            <div className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${isYearly ? 'translate-x-8' : 'translate-x-0'}`}></div>
          </button>
          <span className={`text-sm font-medium transition-colors ${isYearly ? 'text-slate-900' : 'text-gray-400'}`}>Yearly</span>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-7xl">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="flex flex-col p-8 md:p-10 rounded-[2.5rem] bg-white border border-gray-100 hover:shadow-2xl hover:border-transparent transition-all duration-300 group"
            >
              {/* Header: Icon & Name */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl border border-gray-100 flex items-center justify-center text-slate-900 shadow-sm">
                  {plan.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
              </div>

              {/* Price */}
              <div className="mb-6">
                <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                <span className="text-gray-400 text-sm font-medium ml-1">{plan.period}</span>
              </div>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed mb-8 min-h-[60px]">
                {plan.description}
              </p>

              {/* Divider */}
              <div className="h-px w-full bg-gray-100 mb-8"></div>

              {/* Features List */}
              <ul className="flex-1 space-y-4 mb-10">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-600 font-medium">
                    <span className="text-slate-900 mt-0.5 shrink-0"><CheckIcon /></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button
                className={`w-full py-4 rounded-2xl font-bold transition-all duration-300 ${plan.isPrimary
                    ? 'bg-[#1A1A1A] text-white hover:bg-black shadow-lg hover:shadow-xl'
                    : 'bg-white text-slate-900 border border-gray-200 hover:border-gray-900'
                  }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};