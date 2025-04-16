import React from 'react';

interface FortuneTypeCardProps {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  onClick: () => void;
}

const FortuneTypeCard: React.FC<FortuneTypeCardProps> = ({
  title,
  subtitle,
  description,
  icon,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="w-full text-left bg-[#8B9D83] rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 group border border-[#8B9D83] hover:bg-[#7A8C72]"
    >
      <div className="relative">
        {/* Top Decorative Pattern */}
        <div className="absolute top-0 left-0 right-0 h-12 opacity-10">
          <div className="absolute top-2 left-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#2B4D4D"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <div className="absolute top-2 right-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#2B4D4D"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-3">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-2xl font-brush text-[#F8FAF7]">{title}</h3>
              <p className="text-sm text-[#E6EBEB]">{subtitle}</p>
            </div>
            <span className="text-2xl">{icon}</span>
          </div>

          <p className="text-[#E6EBEB] text-sm leading-relaxed">
            {description}
          </p>

          {/* Footer */}
          <div className="pt-4 flex items-center justify-between text-sm">
            <span className="font-brush text-base text-[#F8FAF7] group-hover:text-white transition-colors">
              바로 확인하러가기
            </span>
            <svg
              className="w-5 h-5 text-[#F8FAF7] group-hover:text-white transition-colors transform group-hover:translate-x-1 duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>
    </button>
  );
};

export default FortuneTypeCard;
