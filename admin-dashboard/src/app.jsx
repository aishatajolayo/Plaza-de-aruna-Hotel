import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookRoomPage from "./pages/BookRoomPage";
import PaymentPage from "./pages/PaymentPage";
import SuccessPage from "./pages/SuccessPage";
import FailurePage from "./pages/FailurePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BookRoomPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/failure" element={<FailurePage />} />
      </Routes>
    </Router>
  );
}

export default App;
