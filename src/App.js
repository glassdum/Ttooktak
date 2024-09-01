import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Translate from './pages/Translate';
import EditProfile from './pages/EditProfile';
import LoginPage from './pages/Login';
import MakingMembership from './pages/MakingMembership';
import Index from './pages/MainPage';
import Information from './pages/TtooktakInfo';
import Header from './components/Header';
import { UserProvider } from './context/context';

function App() {
  return (
    <UserProvider>
      <Router>
        <div>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Navigate to="/index" />} />
            <Route path="/information" element={<Information />} />
            <Route path="/translate" element={<Translate />} />
            <Route path="/edit-profile" element={<EditProfile />} />
            <Route path='/login' element={<LoginPage />}/>
            <Route path='/make-membership' element={<MakingMembership />}/>
            <Route path='/index' element={<Index />} />
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
