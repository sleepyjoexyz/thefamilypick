import React from 'react';

interface DealCardProps {
  id: string;
  title: string;
  category: 'Baby Gear' | 'Pet Tech';
  originalPrice: number;
  dealPrice: number;
  percentOff: number;
  source: string;
  sourceUrl: string;
  amazonUrl: string;
  timeLeft: string;
  imageAlt: string;
}

export default function DealCard({
  id,
  title,
  category,
  originalPrice,
  dealPrice,
  percentOff,
  source,
  sourceUrl,
  amazonUrl,
  timeLeft,
  imageAlt,
}: DealCardProps) {
  const categoryColor = category === 'Baby Gear' ? 'blue' : 'green';
  const badgeBgColor = categoryColor === 'blue' ? 'bg-blue-100' : 'bg-green-100';
  const badgeTextColor = categoryColor === 'blue' ? 'text-blue-700' : 'text-green-700';
  const buttonHoverColor = categoryColor === 'blue' ? 'hover:bg-blue-700' : 'hover:bg-green-700';

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
      {/* Placeholder Image Area */}
      <div className="bg-gray-100 h-48 flex items-center justify-center text-gray-400">
        <span className="text-sm">Image: {imageAlt}</span>
      </div>

      {/* Card Body */}
      <div className="p-4">
        {/* Category Badge */}
        <div className="flex items-start justify-between mb-3">
          <span className={`inline-block ${badgeBgColor} ${badgeTextColor} text-xs font-semibold px-2.5 py-1 rounded`}>
            {category}
          </span>
        </div>

        {/* Product Title */}
        <h3 className="text-sm font-bold text-gray-900 mb-2 line-clamp-2">{title}</h3>

        {/* Price Section */}
        <div className="flex items-baseline gap-2 mb-3">
          <span className="text-lg font-bold text-gray-900">${dealPrice.toFixed(2)}</span>
          <span className="text-sm text-gray-500 line-through">${originalPrice.toFixed(2)}</span>
        </div>

        {/* % Off Badge */}
        <div className="mb-3">
          <span className="bg-red-100 text-red-700 text-xs font-bold px-2 py-1 rounded">
            {percentOff}% OFF
          </span>
        </div>

        {/* Time Left */}
        <p className="text-xs text-gray-600 mb-3">
          <span className="font-semibold">{timeLeft}</span>
        </p>

        {/* Source Tag */}
        <a
          href={sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-xs text-gray-500 hover:text-gray-700 mb-4"
        >
          via {source}
        </a>

        {/* View Deal Button */}
        <a
          href={amazonUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`block w-full text-center bg-orange-500 text-white font-semibold py-2 rounded transition-colors ${buttonHoverColor}`}
          style={{ backgroundColor: '#FF9900' }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#E68A00')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#FF9900')}
        >
          View Deal
        </a>
      </div>
    </div>
  );
}
