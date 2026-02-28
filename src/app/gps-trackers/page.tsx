export default function CategoryPage() {
  const categoryName = "GPS Pet Trackers";
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {categoryName} — Coming Soon
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          We&apos;re building detailed comparisons for {categoryName.toLowerCase()}. Check back soon!
        </p>
        <div className="mt-12">
          <svg className="w-24 h-24 mx-auto text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 13H5" />
          </svg>
        </div>
      </div>
    </div>
  );
}
