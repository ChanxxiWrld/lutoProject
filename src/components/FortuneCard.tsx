import React from 'react';

interface Fortune {
  id: string;
  user_id: string;
  date: string;
  fortune_type: 'daily' | 'weekly' | 'monthly';
  rice_cake_type: string;
  description: string;
  created_at: string;
}

interface FortuneCardProps {
  fortune: Fortune;
}

const FortuneCard: React.FC<FortuneCardProps> = ({ fortune }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-gray-800">
          {fortune.fortune_type === 'daily'
            ? '오늘의 운세'
            : fortune.fortune_type === 'weekly'
            ? '이번 주 운세'
            : '이번 달 운세'}
        </h3>
        <span className="text-sm text-gray-500">{fortune.date}</span>
      </div>
      <div className="bg-accent/20 p-4 rounded-lg mb-4">
        <p className="text-lg font-medium text-gray-700">
          {fortune.rice_cake_type}
        </p>
      </div>
      <p className="text-gray-600">{fortune.description}</p>
    </div>
  );
};

export default FortuneCard;
