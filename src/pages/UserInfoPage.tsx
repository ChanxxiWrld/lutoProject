import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

interface UserInfo {
  name: string;
  birthDate: string;
  gender: string;
  birthTime: string;
  isTimeUnknown: boolean;
  calendar: 'solar' | 'lunar';
}

const UserInfoPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const type = searchParams.get('type');
  const [showTimeModal, setShowTimeModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: '',
    birthDate: '',
    gender: '',
    birthTime: '00:00',
    isTimeUnknown: false,
    calendar: 'solar',
  });

  const validateForm = () => {
    if (!userInfo.name.trim()) {
      setErrorMessage('이름을 입력해주세요');
      return false;
    }
    if (!userInfo.birthDate.trim()) {
      setErrorMessage('생년월일을 입력해주세요');
      return false;
    }
    if (!userInfo.gender) {
      setErrorMessage('성별을 선택해주세요');
      return false;
    }
    if (!userInfo.isTimeUnknown && !userInfo.birthTime) {
      setErrorMessage('태어난 시간을 입력해주세요');
      return false;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (validateForm()) {
      navigate(`/fortune-result?type=${type}`, { state: userInfo });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setUserInfo(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleTimeUnknownChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo(prev => ({
      ...prev,
      isTimeUnknown: e.target.checked,
      birthTime: e.target.checked ? '' : '00:00',
    }));
  };

  const handleCalendarChange = (type: 'solar' | 'lunar') => {
    setUserInfo(prev => ({
      ...prev,
      calendar: type,
    }));
  };

  return (
    <div className="min-h-screen bg-[#e6ebeb]">
      <div className="bg-[#8d9d83] px-4 py-4">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <button
            className="text-white"
            onClick={() => navigate(-1)}
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
          <h1 className="text-xl text-center text-white font-brush">
            오늘의 인연
          </h1>
          <div className="w-6"></div>
        </div>
      </div>

      <div className="px-4 py-6">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <div className="mb-8">
              <h2 className="text-2xl font-medium text-[#4A4A4A] mb-2">
                오늘의 인연
              </h2>
              <div className="inline-block px-3 py-1 bg-[#FFE7BA] rounded-full text-sm text-[#4A4A4A]">
                인연
              </div>
              <p className="mt-4 text-[#666666]">
                오늘 당신의 인연이 될 떡소녀를 만나보세요
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {errorMessage && (
                <div className="bg-red-50 text-red-500 p-3 rounded-lg text-sm">
                  {errorMessage}
                </div>
              )}

              <div>
                <label className="block text-sm text-[#4A4A4A] mb-2">
                  이름
                </label>
                <input
                  type="text"
                  name="name"
                  value={userInfo.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-[#F8F8F8] border border-[#E5E5E5] focus:outline-none focus:border-[#8B9D83]"
                  placeholder="이름을 입력해주세요"
                />
              </div>

              <div>
                <label className="block text-sm text-[#4A4A4A] mb-2">
                  생년월일
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    name="birthDate"
                    value={userInfo.birthDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#F8F8F8] border border-[#E5E5E5] focus:outline-none focus:border-[#8B9D83]"
                    placeholder="예) 1999.01.01"
                  />
                  <div className="flex h-[48px] rounded-lg overflow-hidden border border-[#E5E5E5] min-w-[140px]">
                    <button
                      type="button"
                      onClick={() => handleCalendarChange('solar')}
                      className={`px-4 flex-1 transition-colors ${
                        userInfo.calendar === 'solar'
                          ? 'bg-[#6A7D63] text-white'
                          : 'text-[#666666] hover:bg-[#F8F8F8]'
                      }`}
                    >
                      양력
                    </button>
                    <button
                      type="button"
                      onClick={() => handleCalendarChange('lunar')}
                      className={`px-4 flex-1 transition-colors ${
                        userInfo.calendar === 'lunar'
                          ? 'bg-[#6A7D63] text-white'
                          : 'text-[#666666] hover:bg-[#F8F8F8]'
                      }`}
                    >
                      음력
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm text-[#4A4A4A] mb-2">
                  성별
                </label>
                <div className="flex h-[48px] rounded-lg overflow-hidden border border-[#E5E5E5]">
                  <button
                    type="button"
                    onClick={() =>
                      setUserInfo(prev => ({ ...prev, gender: 'female' }))
                    }
                    className={`flex-1 transition-colors ${
                      userInfo.gender === 'female'
                        ? 'bg-[#6A7D63] text-white'
                        : 'text-[#666666] hover:bg-[#F8F8F8]'
                    }`}
                  >
                    여자
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setUserInfo(prev => ({ ...prev, gender: 'male' }))
                    }
                    className={`flex-1 transition-colors ${
                      userInfo.gender === 'male'
                        ? 'bg-[#6A7D63] text-white'
                        : 'text-[#666666] hover:bg-[#F8F8F8]'
                    }`}
                  >
                    남자
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm text-[#4A4A4A] mb-2">
                  태어난 시간
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="time"
                    name="birthTime"
                    value={userInfo.birthTime}
                    onChange={handleChange}
                    disabled={userInfo.isTimeUnknown}
                    className="flex-1 px-4 py-3 rounded-lg bg-[#F8F8F8] border border-[#E5E5E5] focus:outline-none focus:border-[#8B9D83] disabled:bg-[#F8F8F8] disabled:text-[#999999]"
                  />
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={userInfo.isTimeUnknown}
                      onChange={handleTimeUnknownChange}
                      className="w-4 h-4 text-[#8B9D83]"
                    />
                    <span className="text-sm text-[#666666]">시간 모름</span>
                  </label>
                </div>
                <button
                  type="button"
                  onClick={() => setShowTimeModal(true)}
                  className="mt-2 text-sm text-[#999999] hover:text-[#666666] transition-colors"
                >
                  * 태어난 시간을 몰라도 되나요?
                </button>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#8B9D83] text-white rounded-lg hover:bg-opacity-90 transition-colors mt-8"
              >
                인연 만나러 가기
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* 모달 */}
      {showTimeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl w-full max-w-md relative">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-medium text-[#4A4A4A]">
                  태어난 시간을 몰라도 되나요?
                </h3>
                <button
                  onClick={() => setShowTimeModal(false)}
                  className="text-[#999999] hover:text-[#666666]"
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="space-y-4 text-[#666666]">
                <p>
                  태어난 시간을 모르셔도 사주 분석이 가능합니다. 다만, 시간
                  정보가 없는 경우 다음과 같은 제한이 있을 수 있습니다:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>시간과 관련된 세부적인 분석 결과가 제공되지 않습니다.</li>
                  <li>운세의 정확도가 다소 낮아질 수 있습니다.</li>
                  <li>
                    시주(時柱)를 제외한 나머지 정보로 분석이 이루어집니다.
                  </li>
                </ul>
                <p className="text-[#8B9D83] mt-4">
                  가능하다면 가족에게 물어보거나 출생 기록을 확인하는 것이 더
                  정확한 결과를 얻는 데 도움이 됩니다.
                </p>
              </div>

              <button
                onClick={() => setShowTimeModal(false)}
                className="w-full mt-6 py-4 bg-[#8B9D83] text-white rounded-lg hover:bg-opacity-90 transition-colors"
              >
                확인
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserInfoPage;
