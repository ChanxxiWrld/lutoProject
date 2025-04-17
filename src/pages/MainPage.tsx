import React from 'react';
import { useNavigate } from 'react-router-dom';
import FortuneTypeCard from '../components/FortuneTypeCard';
import MainHeader from '../components/MainHeader';

interface MainPageProps {
  onFortuneTypeSelect: (type: string) => void;
  onProfileClick: () => void;
}

const MainPage: React.FC<MainPageProps> = ({
  onFortuneTypeSelect,
  onProfileClick,
}) => {
  const navigate = useNavigate();

  const handleFortuneTypeClick = (type: string) => {
    onFortuneTypeSelect(type);
    navigate(`/fortune/${type}`);
  };

  const scrollToContent = () => {
    const contentElement = document.getElementById('fortune-content');
    if (contentElement) {
      contentElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const fortuneTypes = [
    {
      type: 'daily',
      title: '오늘의 운세',
      subtitle: '하루의 운세를 알아보세요',
      description:
        '오늘 하루 당신의 전반적인 운세에 대해 알아보세요. 금전운, 애정운, 사업운 등을 종합적으로 분석해드립니다.',
      icon: '🎯',
    },
    {
      type: 'love',
      title: '연애운',
      subtitle: '당신의 사랑을 응원합니다',
      description:
        '현재 또는 다가올 인연에 대해 알아보세요. 당신의 사랑이 이루어질 수 있도록 도와드립니다.',
      icon: '💝',
    },
    {
      type: 'money',
      title: '재물운',
      subtitle: '금전운을 알아보세요',
      description:
        '돈과 관련된 모든 운세를 알아보세요. 재물이 들어올 시기와 주의해야 할 점을 알려드립니다.',
      icon: '💰',
    },
  ];

  return (
    <div className="min-h-screen w-full flex flex-col bg-[#E6EBEB]">
      <MainHeader onProfileClick={onProfileClick} />

      {/* Hero Section */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4 min-h-[60vh]">
        <div className="space-y-8 max-w-[460px]">
          <h1 className="text-4xl font-brush text-[#8B9D83] leading-tight">
            당신의 운세를
            <br />
            <span className="text-[#C4B998]">떡</span>으로 만나보세요
          </h1>

          <p className="text-lg text-[#8B9D83] leading-relaxed">
            매일 아침, 당신만을 위한 특별한 운세 떡이 준비되어 있어요.
            <br />
            오늘의 운세를 확인하고
            <br />
            <span className="font-medium text-[#C4B998]">행운의 떡</span>을
            모아보세요.
          </p>

          <div className="flex justify-center">
            <button
              onClick={scrollToContent}
              className="mt-8 flex flex-col items-center text-[#8B9D83] hover:text-[#6B7D63] transition-colors"
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
          {fortuneTypes.map(fortune => (
            <FortuneTypeCard
              key={fortune.type}
              title={fortune.title}
              subtitle={fortune.subtitle}
              description={fortune.description}
              icon={fortune.icon}
              onClick={() => handleFortuneTypeClick(fortune.type)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
