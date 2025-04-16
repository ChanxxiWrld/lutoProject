import React from 'react';
import FortuneCard from '../components/FortuneCard';

interface FortunePageProps {
  fortune: any; // 임시로 any 타입 사용
  loading: boolean;
  onGetFortune: () => void;
}

const FortunePage: React.FC<FortunePageProps> = ({
  fortune,
  loading,
  onGetFortune,
}) => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-8 px-4">
      <div className="max-w-md mx-auto">
        {loading ? (
          <div className="text-center">
            <p className="text-gray-600">운세를 불러오는 중...</p>
          </div>
        ) : fortune ? (
          <FortuneCard fortune={fortune} />
        ) : (
          <div className="text-center">
            <p className="text-gray-600 mb-4">아직 운세가 없습니다.</p>
            <button
              onClick={onGetFortune}
              className="btn btn-primary"
            >
              운세 보기
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FortunePage;
