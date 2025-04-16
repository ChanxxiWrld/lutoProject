import React from 'react';
import FortuneTypeCard from '../components/FortuneTypeCard';
import MainHeader from '../components/MainHeader';

interface MainPageProps {
  onFortuneTypeSelect: (type: string) => void;
  onProfileClick: () => void;
}

const fortuneTypes = [
  {
    id: 'daily',
    title: '오늘의 운세',
    subtitle: "Today's Fortune",
    description: '오늘 나의 운세떡은? 오늘은 어떤 일이 벌어질까?',
    icon: '🎯',
  },
  {
    id: 'love',
    title: '사랑운',
    subtitle: 'Love Fortune',
    description: '당신의 사랑운을 떡으로 알아보세요.',
    icon: '💝',
  },
  {
    id: 'money',
    title: '금전운',
    subtitle: 'Money Fortune',
    description: '오늘의 재물운을 떡으로 확인해보세요.',
    icon: '💰',
  },
];

const MainPage: React.FC<MainPageProps> = ({
  onFortuneTypeSelect,
  onProfileClick,
}) => {
  const scrollToContent = () => {
    const contentElement = document.getElementById('fortune-content');
    if (contentElement) {
      contentElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-[#E6EBEB]">
      <MainHeader onProfileClick={onProfileClick} />

      {/* Hero Section */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4 min-h-[60vh]">
        <div className="space-y-8 max-w-[460px]">
          <h1 className="text-4xl font-bold text-[#2B4D4D] leading-tight">
            당신의 운세를
            <br />
            <span className="text-[#C4B998]">떡</span>으로 만나보세요
          </h1>

          <p className="text-lg text-[#436666] leading-relaxed">
            매일 아침, 당신만을 위한 특별한 운세 떡이 준비되어 있어요.
            <br />
            오늘의 운세를 확인하고
            <br />
            <span className="font-medium text-[#C4B998]">행운의 떡</span>을
            모아보세요.
          </p>

          <div className="w-full flex justify-center">
            <button
              onClick={scrollToContent}
              className="mt-8 flex flex-col items-center text-[#436666] hover:text-[#2B4D4D] transition-colors"
            >
              <span className="text-sm mb-2">아래로 내려 운세보기</span>
              <div className="animate-bounce-slow">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Fortune Content Section */}
      <div
        id="fortune-content"
        className="w-full flex justify-center px-4 py-16"
      >
        <div className="w-full max-w-[460px] space-y-4">
          {fortuneTypes.map(type => (
            <FortuneTypeCard
              key={type.id}
              title={type.title}
              subtitle={type.subtitle}
              description={type.description}
              icon={type.icon}
              onClick={() => onFortuneTypeSelect(type.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
