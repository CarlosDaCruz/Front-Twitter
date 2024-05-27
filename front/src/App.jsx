import { BrowserRouter, Routes, Route } from "react-router-dom";

import RegisterPage from "./pages/RegisterPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import UpdatePage from "./pages/UpdatePage.jsx";
import TweetsPage from "./pages/TweetsPage.jsx";
import TweetFormPage from "./pages/TweetFormPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import ProtectedRoute from "./ProtectedRout.jsx";
import { TweetProvider } from "./context/TweetContext.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <AuthProvider>
      <TweetProvider>
        <BrowserRouter>
        <main className="container mx-auto p-10">
        <Navbar />
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<TweetFormPage />} />
              <Route path="/tweets" element={<TweetsPage />} />
              <Route path="/tweet/:id" element={<UpdatePage />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Route>
          </Routes>
        </main>
        </BrowserRouter>
      </TweetProvider>
    </AuthProvider>
  );
}

export default App;
