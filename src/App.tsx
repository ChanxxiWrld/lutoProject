import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from 'react-router-dom';
import MainPage from './pages/MainPage';
import FortunePage from './pages/FortunePage';
import ProfilePage from './pages/ProfilePage';
import UserInfoPage from './pages/UserInfoPage';
import FortuneResultPage from './pages/FortuneResultPage';

// FortunePageWrapper 컴포넌트 추가
const FortunePageWrapper = () => {
  const { type } = useParams();
  return <FortunePage type={type} />;
};

function App() {
  const handleFortuneTypeSelect = (type: string) => {
    // 나중에 필요한 로직 추가
  };

  const handleProfileClick = () => {
    // 나중에 필요한 로직 추가
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainPage
              onFortuneTypeSelect={handleFortuneTypeSelect}
              onProfileClick={handleProfileClick}
            />
          }
        />
        <Route
          path="/fortune/:type"
          element={<FortunePageWrapper />}
        />
        <Route
          path="/profile"
          element={<ProfilePage />}
        />
        <Route
          path="/user-info"
          element={<UserInfoPage />}
        />
        <Route
          path="/fortune-result"
          element={<FortuneResultPage />}
        />
      </Routes>
    </Router>
  );
}

export default App;
