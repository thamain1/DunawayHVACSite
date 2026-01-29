import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SmsTermsPage from './pages/SmsTermsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsModal from './components/TermsModal';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <HomePage />
                <Footer />
                <TermsModal />
              </>
            }
          />
          <Route
            path="/sms-terms"
            element={<SmsTermsPage />}
          />
          <Route
            path="/privacy-policy"
            element={<PrivacyPolicyPage />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
