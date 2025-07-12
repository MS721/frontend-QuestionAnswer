import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AskQuestion from './pages/AskQuestion';
import QuestionPage from './pages/QuestionPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ProfilePage from './pages/ProfilePage';
import TopicPage from './pages/TopicPage'; // ✅ New route for topic-based pages
import { AppContextProvider } from './context/AppContext';
import './App.css'; // Global styles

function App() {
  return (
    <AppContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ask" element={<AskQuestion />} />
          <Route path="/question/:id" element={<QuestionPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/topic/:topicName" element={<TopicPage />} /> {/* ✅ Added for topic-based filtering */}
        </Routes>
      </Router>
    </AppContextProvider>
  );
}

export default App;
