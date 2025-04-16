import { useState } from 'react';
// import { supabase, Fortune } from './lib/supabase'
import Header from './components/Header';
import MainPage from './pages/MainPage';
import FortunePage from './pages/FortunePage';
import ProfilePage from './pages/ProfilePage';

// 임시 데이터
const mockFortune = {
  id: '1',
  user_id: '1',
  date: '2024-03-19',
  fortune_type: 'daily' as const,
  rice_cake_type: '인절미',
  description:
    '오늘은 행운이 가득한 날입니다. 새로운 시작을 하기에 좋은 날이에요.',
  created_at: new Date().toISOString(),
};

type Page = 'main' | 'fortune' | 'profile';

function App() {
  const [fortune, setFortune] = useState(mockFortune);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>('main');
  const [pageHistory, setPageHistory] = useState<Page[]>(['main']);
  const [selectedFortuneType, setSelectedFortuneType] =
    useState<string>('daily');

  const getFortune = async () => {
    setLoading(true);
    // 임시로 1초 후에 로딩이 끝나도록 설정
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const navigateToPage = (page: Page) => {
    setPageHistory(prev => [...prev, page]);
    setCurrentPage(page);
  };

  const handleProfileClick = () => {
    navigateToPage('profile');
  };

  const handleHomeClick = () => {
    navigateToPage('main');
  };

  const handleBackClick = () => {
    if (pageHistory.length > 1) {
      const newHistory = [...pageHistory];
      newHistory.pop(); // 현재 페이지 제거
      const previousPage = newHistory[newHistory.length - 1];
      setPageHistory(newHistory);
      setCurrentPage(previousPage);
    }
  };

  const handleFortuneTypeSelect = (type: string) => {
    setSelectedFortuneType(type);
    navigateToPage('fortune');
    getFortune();
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'main':
        return (
          <main className="max-w-[460px] mx-auto">
            <MainPage
              onFortuneTypeSelect={handleFortuneTypeSelect}
              onProfileClick={handleProfileClick}
            />
          </main>
        );
      case 'fortune':
        return (
          <FortunePage
            fortune={fortune}
            loading={loading}
            onGetFortune={getFortune}
          />
        );
      case 'profile':
        return <ProfilePage />;
    }
  };

  // 메인 페이지에서는 헤더를 표시하지 않음
  if (currentPage === 'main') {
    return renderContent();
  }

  return (
    <>
      <Header
        onProfileClick={handleProfileClick}
        onHomeClick={handleHomeClick}
        onBackClick={handleBackClick}
        showBackButton={true}
      />
      {renderContent()}
    </>
  );
}

export default App;
