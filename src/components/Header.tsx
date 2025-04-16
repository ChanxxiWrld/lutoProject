import React from 'react';
import {
  UserCircleIcon,
  ArrowLeftIcon,
  HomeIcon,
} from '@heroicons/react/24/outline';

interface HeaderProps {
  onProfileClick: () => void;
  onHomeClick: () => void;
  onBackClick?: () => void;
  showBackButton?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  onProfileClick,
  onHomeClick,
  onBackClick,
  showBackButton = false,
}) => {
  return (
    <header className="fixed top-0 left-0 right-0 max-w-[460px] bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-md mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center">
          {showBackButton ? (
            <button
              onClick={onBackClick}
              className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-primary transition-colors"
            >
              <ArrowLeftIcon className="w-5 h-5" />
            </button>
          ) : (
            <button
              onClick={onHomeClick}
              className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-primary transition-colors"
            >
              <HomeIcon className="w-5 h-5" />
            </button>
          )}
        </div>
        <h1
          onClick={onHomeClick}
          className="text-xl font-bold text-primary cursor-pointer hover:opacity-80 transition-opacity"
        >
          운세방앗간
        </h1>
        <button
          onClick={onProfileClick}
          className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-primary transition-colors"
        >
          <UserCircleIcon className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
};

export default Header;
