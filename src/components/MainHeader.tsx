import React from 'react';

interface MainHeaderProps {
  onProfileClick: () => void;
}

const MainHeader: React.FC<MainHeaderProps> = ({ onProfileClick }) => {
  return (
    <header className="w-full bg-[#E6EBEB] border-b border-[#F3F5F2]">
      <div className="max-w-[460px] mx-auto px-4 h-16 flex items-center relative">
        <h1 className="text-2xl font-700 font-brush text-[var(--title-black)] absolute left-1/2 -translate-x-1/2">
          운세방앗간
        </h1>
        <div className="ml-auto">
          <button
            onClick={onProfileClick}
            className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-[#F3F5F2] transition-colors"
          >
            <svg
              className="w-6 h-6 text-[#8B9D83]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
