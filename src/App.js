import Header from "./Components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import HomePage from "./Pages/HomePage/HomePage";
import CreateAccountPage from "./Pages/CreateAccountPage/CreateAccountPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import UserDashboardPage from "./Pages/UserDashboardPage/UserDashboardPage";
import BookAppointmentPage from "./Pages/BookAppointmentPage/BookAppointmentPage";
import AppointmentConfirmationPage from "./Pages/AppointmentConfirmationPage/AppointmentConfirmationPage";
import ArtistDashboardPage from "./Pages/ArtistDashboardPage/ArtistDashboardPage";


function App() {
  return (
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/signup" element={<CreateAccountPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/user_dashboard" element={<UserDashboardPage/>}/>
          <Route path="/book_appointment" element={<BookAppointmentPage/>}/>
          <Route path="/app_confirmation" element={<AppointmentConfirmationPage/>}/>
          <Route path="/artist_dashboard" element={<ArtistDashboardPage/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
