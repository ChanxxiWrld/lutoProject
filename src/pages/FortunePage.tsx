import React from 'react';
import { useNavigate } from 'react-router-dom';

interface FortunePageProps {
  type?: string;
}

const FortunePage: React.FC<FortunePageProps> = ({ type = 'daily' }) => {
  const navigate = useNavigate();

  const getFortuneDetails = () => {
    switch (type) {
      case 'daily':
        return {
          title: '오늘의 인연',
          tag: '신규',
          description: '오늘 당신의 인연이 될 떡소녀를 만나보세요',
          items: [
            '당신을 기다리는 특별한 인연',
            '오늘의 운세와 조화로운 떡소녀',
            '은은한 향과 함께 전해지는 메시지',
            '당신만을 위한 운명의 만남',
            '소중한 인연이 될 오늘의 떡소녀',
          ],
          price: 24000,
          originalPrice: 48000,
          discount: 50,
        };
      case 'love':
        return {
          title: '사랑의 떡소녀',
          tag: '인기',
          description: '달콤한 사랑의 기운을 담은 특별한 만남',
          items: [
            '로맨틱한 분위기의 떡소녀',
            '달콤한 사랑의 메시지',
            '당신의 로맨스를 이끌어줄 인연',
            '마음을 설레게 할 특별한 만남',
            '사랑의 기운이 담긴 오늘의 떡소녀',
          ],
          price: 18000,
          originalPrice: 36000,
          discount: 50,
        };
      default:
        return {
          title: '금전운의 떡소녀',
          tag: '추천',
          description: '재물운을 이끄는 행운의 만남',
          items: [
            '금전운을 이끄는 떡소녀의 기운',
            '재물과 인연을 연결하는 특별한 만남',
            '행운이 깃든 오늘의 메시지',
            '풍요로움을 선사할 인연',
            '금전운을 높여줄 오늘의 떡소녀',
          ],
          price: 18000,
          originalPrice: 36000,
          discount: 50,
        };
    }
  };

  const details = getFortuneDetails();

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
          {details.title}
        </h1>
        <div className="w-6" />
      </div>

      {/* Content */}
      <div className="flex-1 p-6 max-w-[460px] mx-auto w-full">
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <div className="space-y-6">
            {/* Title Section */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-brush text-[#8B9D83]">
                  {details.title}
                </h2>
                <span className="px-3 py-1 bg-[#FFF3E0] text-[#FF9800] rounded-full text-sm">
                  {details.tag}
                </span>
              </div>
              <p className="text-[#8B9D83] font-medium">
                {details.description}
              </p>
            </div>

            {/* Items List */}
            <div className="space-y-3">
              {details.items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 text-[#8B9D83]"
                >
                  <span className="text-[#FFD700]">✿</span>
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* Price Section */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="text-[#FF5722] font-bold">
                  {details.discount}%
                </span>
                <span className="text-gray-400 line-through">
                  {details.originalPrice.toLocaleString()}원
                </span>
              </div>
              <div className="text-2xl font-bold text-[#8B9D83]">
                {details.price.toLocaleString()}원
              </div>
            </div>

            {/* Button */}
            <button
              onClick={() => navigate(`/user-info?type=${type}`)}
              className="w-full bg-[#8B9D83] hover:bg-[#7A8C72] text-white py-4 rounded-xl font-brush text-lg transition-colors"
            >
              인연 만나러 가기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FortunePage;
