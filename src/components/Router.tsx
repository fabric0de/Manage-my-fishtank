import LoginPage from "pages/LoginPage";
import SignUpPage from "pages/SignUpPage";
import { Route, Routes } from "react-router-dom";

export default function Router() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/signuppage" element={<SignUpPage />} />
      </Routes>
    </>
  );
}
