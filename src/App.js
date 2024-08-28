import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Translate from './pages/Translate';
import History from './pages/History';
import EditProfile from './pages/EditProfile';
import LoginPage from './pages/Login';
import MakingMembership from './pages/MakingMembership';
// import Board from './pages/Board';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Navigate to="/translate" />} />
          <Route path="/translate" element={<Translate />} />
          <Route path="/history" element={<History />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path='/login' element={<LoginPage />}/>
          <Route path='/make-membership' element={<MakingMembership />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
