import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import sukddugImage from '../assets/image/sukddug.png';

const FortuneResultPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const type = searchParams.get('type') || 'daily';
  const [isHovered, setIsHovered] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const userInfo = location.state || {
    name: '게스트',
    birthDate: '2024.01.01',
    gender: 'female',
    calendar: 'solar',
  };

  const formatDate = (date: string) => {
    return date.replace(/[^0-9]/g, '.').replace(/(\.+)/g, '.');
  };

  const getFortuneData = () => {
    switch (type) {
      case 'daily':
        return {
          title: '오늘의 운세',
          subtitle: '힐링적인 풀이',
          message:
            '오늘은 나쁜 기운을 털어내고 새로 시작해보는 날이에요. 쑥떡처럼 상쾌하게!',
          additionalMessages: [
            '몸과 마음의 피로를 씻어내세요. 오늘은 나를 회복시키는 하루!',
            '다정한 인사 한 마디가 행운을 부를 수 있어요. 쑥의 향기처럼 은은한 매력을 뿜어보세요.',
          ],
          imageUrl: sukddugImage,
        };
      case 'love':
        return {
          title: '사랑의 운세',
          subtitle: '로맨틱한 풀이',
          message:
            '오늘은 새로운 인연이 찾아올 수 있는 날이에요. 달콤한 쑥떡처럼 달콤한 만남이 기다립니다!',
          additionalMessages: [
            '마음을 열고 새로운 만남을 받아들이세요.',
            '은은한 쑥의 향기처럼 자연스러운 만남이 기다립니다.',
          ],
          imageUrl: sukddugImage,
        };
      default:
        return {
          title: '금전운의 운세',
          subtitle: '현실적인 풀이',
          message:
            '오늘은 재물운이 상승하는 날이에요. 쑥떡처럼 부드럽게 흘러가는 금전운을 만끽하세요!',
          additionalMessages: [
            '새로운 기회가 찾아올 수 있는 날입니다.',
            '쑥의 향기처럼 은은하게 찾아오는 행운을 놓치지 마세요.',
          ],
          imageUrl: sukddugImage,
        };
    }
  };

  const fortuneData = getFortuneData();

  return (
    <div className="min-h-screen bg-[#E6EBEB] flex flex-col">
      {/* Header */}
      <div className="bg-[#8B9D83] p-4 flex items-center">
        <button
          onClick={() => navigate(-1)}
          className="text-white"
        >
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
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <h1 className="text-white font-brush text-xl mx-auto">
          {fortuneData.title}
        </h1>
        <div className="w-6" />
      </div>

      {/* Main Content */}
      <div className="flex-1 px-4 py-6 max-w-[460px] mx-auto w-full">
        {/* User Info Section */}
        <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded-2xl p-6 mb-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-medium text-[#4A4A4A]">
                {userInfo.name}
              </span>
              <span className="px-2 py-1 bg-[#8B9D83] bg-opacity-20 rounded-full text-sm text-[#4A4A4A]">
                {userInfo.gender === 'female' ? '여성' : '남성'}
              </span>
            </div>
            <span className="text-sm text-[#666666]">
              {userInfo.calendar === 'solar' ? '양력' : '음력'}{' '}
              {formatDate(userInfo.birthDate)}
            </span>
          </div>
          <div className="h-px bg-[#8B9D83] bg-opacity-20 my-4" />
          <p className="text-sm text-[#666666]">오늘의 운세를 확인해보세요!</p>
        </div>

        {/* Title Section */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-brush text-[#4A4A4A]">
            {fortuneData.title}
          </h2>
          <span className="inline-block px-3 py-1 bg-[#FFE7BA] rounded-full text-sm text-[#4A4A4A] mt-2 backdrop-blur-sm bg-opacity-70">
            {fortuneData.subtitle}
          </span>
        </div>

        {!isRevealed ? (
          // Fortune Card (Unrevealed)
          <div
            className="relative cursor-pointer mb-8 group"
            onClick={() => setIsRevealed(true)}
          >
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden p-8 transform transition-transform duration-300 group-hover:scale-105">
              <div className="flex flex-col items-center justify-center min-h-[300px] relative">
                {/* Decorative Question Mark */}
                <div className="text-8xl font-brush text-[#8B9D83] opacity-30 absolute inset-0 flex items-center justify-center">
                  ?
                </div>
                <div className="text-center z-10">
                  <p className="text-xl font-medium text-[#4A4A4A] mb-4">
                    오늘의 운세 보기
                  </p>
                  <p className="text-sm text-[#666666]">탭하여 확인하기</p>
                </div>
                {/* Animated Decorative Elements */}
                <div className="absolute top-0 left-0 w-full h-full">
                  <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#8B9D83] opacity-30" />
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#8B9D83] opacity-30" />
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Fortune Card (Revealed)
          <div
            className="relative group cursor-pointer mb-8 rounded-3xl overflow-hidden animate-fade-in"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Glass Effect Background */}
            <div className="absolute inset-0 bg-white bg-opacity-20 backdrop-blur-sm rounded-3xl shadow-lg z-10" />

            {/* Character Image Container */}
            <div className="relative z-20">
              <img
                src={fortuneData.imageUrl}
                alt="운세 캐릭터"
                className={`w-full h-auto transition-all duration-300 ${
                  isHovered ? 'scale-105 blur-sm' : 'scale-100'
                }`}
              />
              {/* Hover Overlay */}
              <div
                className={`absolute inset-0 bg-[#8B9D83] transition-opacity duration-300 ${
                  isHovered ? 'opacity-30' : 'opacity-0'
                }`}
              />

              {/* Decorative Elements */}
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(139,157,131,0.3)] to-transparent" />
            </div>
          </div>
        )}

        {/* Fortune Content - Only show when revealed */}
        {isRevealed && (
          <div className="space-y-4 animate-fade-in">
            {/* Main Message */}
            <div className="bg-white bg-opacity-40 backdrop-blur-md rounded-2xl p-6 shadow-lg">
              <p className="text-lg font-medium text-[#4A4A4A] leading-relaxed">
                {fortuneData.message}
              </p>
            </div>

            {/* Additional Messages */}
            {fortuneData.additionalMessages.map((message, index) => (
              <div
                key={index}
                className="bg-[#8B9D83] bg-opacity-10 backdrop-blur-sm rounded-2xl p-5 shadow-sm"
              >
                <p className="text-[#666666] leading-relaxed">{message}</p>
              </div>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex justify-between items-center mt-8">
          <div className="flex space-x-4">
            <button className="p-2 text-[#8B9D83] hover:text-[#6A7D63] transition-colors backdrop-blur-sm bg-white bg-opacity-50 rounded-full">
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
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
            </button>
            <button className="p-2 text-[#8B9D83] hover:text-[#6A7D63] transition-colors backdrop-blur-sm bg-white bg-opacity-50 rounded-full">
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
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
          </div>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-[#8B9D83] bg-opacity-90 backdrop-blur-sm text-white rounded-lg hover:bg-opacity-100 transition-all"
          >
            홈으로
          </button>
        </div>
      </div>
    </div>
  );
};

export default FortuneResultPage;
