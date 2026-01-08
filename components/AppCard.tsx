'use client';

interface AppCardProps {
  name: string;
  platform: 'Android' | 'Windows';
  version: string;
  size: string;
  description: string;
  downloadUrl: string;
  icon?: string;
}

export default function AppCard({
  name,
  platform,
  version,
  size,
  description,
  downloadUrl,
  icon
}: AppCardProps) {
  const handleDownload = () => {
    window.open(downloadUrl, '_blank');
  };

  return (
    <div className="group relative bg-gradient-to-br from-purple-950/20 to-black border border-purple-800/40 rounded-lg overflow-hidden hover:border-purple-600 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-900/50">
      {/* Card content */}
      <div className="p-8">
        {/* Icon/Platform */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            {icon ? (
              <img src={icon} alt={name} className="w-16 h-16 rounded-xl" />
            ) : (
              <div className="w-16 h-16 bg-gradient-to-br from-purple-700 to-purple-900 rounded-xl flex items-center justify-center">
                {platform === 'Android' ? (
                  <svg className="w-10 h-10 text-purple-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.6,9.48l1.84-3.18c0.16-0.31,0.04-0.69-0.26-0.85c-0.29-0.15-0.65-0.06-0.83,0.22l-1.88,3.24 c-2.86-1.21-6.08-1.21-8.94,0L5.65,5.67c-0.19-0.29-0.58-0.38-0.87-0.2C4.5,5.65,4.41,6.01,4.56,6.3L6.4,9.48 C3.3,11.25,1.28,14.44,1,18h22C22.72,14.44,20.7,11.25,17.6,9.48z M7,15.25c-0.69,0-1.25-0.56-1.25-1.25 c0-0.69,0.56-1.25,1.25-1.25S8.25,13.31,8.25,14C8.25,14.69,7.69,15.25,7,15.25z M17,15.25c-0.69,0-1.25-0.56-1.25-1.25 c0-0.69,0.56-1.25,1.25-1.25s1.25,0.56,1.25,1.25C18.25,14.69,17.69,15.25,17,15.25z"/>
                  </svg>
                ) : (
                  <svg className="w-10 h-10 text-purple-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M0,12.4v-1c0-1.1,0.9-2,2-2h6V6.4c0-1.1,0.9-2,2-2h12c1.1,0,2,0.9,2,2v8c0,1.1-0.9,2-2,2h-6v3c0,1.1-0.9,2-2,2H2 c-1.1,0-2-0.9-2-2V12.4z M10,14.4h10V6.4H10V14.4z"/>
                  </svg>
                )}
              </div>
            )}
            <div>
              <h3 className="text-2xl font-semibold">{name}</h3>
              <p className="text-gray-400 text-sm">{platform}</p>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 mb-6 leading-relaxed">
          {description}
        </p>

        {/* Info */}
        <div className="flex items-center space-x-6 mb-6 text-sm text-gray-400">
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
            <span>v{version}</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span>{size}</span>
          </div>
        </div>

        {/* Download button */}
        <button
          onClick={handleDownload}
          className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-4 rounded-md font-semibold hover:from-purple-500 hover:to-purple-600 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-purple-900/50"
        >
          İndir
        </button>
      </div>
    </div>
  );
}
