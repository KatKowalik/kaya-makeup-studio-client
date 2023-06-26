import Header from "./Components/Header/Header";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import HomePage from "./Pages/HomePage/HomePage";
import CreateAccountPage from "./Pages/CreateAccountPage/CreateAccountPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import UserDashboardPage from "./Pages/UserDashboardPage/UserDashboardPage";
import BookAppointmentPage from "./Pages/BookAppointmentPage/BookAppointmentPage";
import AppointmentConfirmationPage from "./Pages/AppointmentConfirmationPage/AppointmentConfirmationPage";
import ArtistDashboardPage from "./Pages/ArtistDashboardPage/ArtistDashboardPage";
import ServicesPage from "./Pages/ServicesPage/ServicesPage";
import OurTeamPage from "./Pages/OurTeamPage/OurTeamPage";
import SingleArtistPage from "./Pages/SingleArtistPage/SingleArtistPage";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import PortfolioPage from "./Pages/PortfolioPage/PortfolioPage";


function App() {
  const navigate = useNavigate()
  const [loggedUser, setLoggedUser] = useState({
    email: "",
    password: ""
  });
  const [activeUser, setActiveUser] = useState([]);
  const [isLogged, setIsLogged] = useState(false);
  const [artistsArray, setArtistsArray] = useState([]);
  const [errorMessage, setErrorMessage] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const errorDiv = document.querySelector(".login__error");
        errorDiv.classList.add("hidden")
    axios
    .post("http://localhost:8080/users/login", loggedUser)
    .then((res) => {
      sessionStorage.setItem("token", res.data.token);
      axios.get("http://localhost:8080/users/profile", {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`
        }
      })
      .then((res) => {
        const user = res.data;
        setActiveUser(user);
        setIsLogged(true);
        navigate(`/user_dashboard/${user.id}`)
      })
    })
    .catch (error => {
      setErrorMessage(error.response.data);
      errorDiv.classList.remove("hidden")
    })
  }  

  const handleChange = (e) => {
    e.preventDefault();
    setLoggedUser({ ...loggedUser, [e.target.name]: e.target.value});
  }

  const handleLogOut = (e) => {
    e.preventDefault();
    setLoggedUser("");
    setIsLogged(false);
    navigate("/");
  }

  useEffect(() => {
    const getArtists = async () => {
      try{
        const artistsData = await axios.get("http://localhost:8080/artists")
        setArtistsArray(artistsData.data)
      } catch (error) {
        console.log(error)
      }
    }
    getArtists();
  }, [])

  return (
      <div>
        <Header 
          activeUser={activeUser}
          isLogged={isLogged}
          handleLogOut={handleLogOut}/>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/signup" element={<CreateAccountPage/>}/>
          <Route path="/login" element={<LoginPage 
              handleSubmit={handleSubmit} 
              handleChange={handleChange}
              loggedUser={loggedUser}
              errorMessage={errorMessage} />}/>
          <Route path="/user_dashboard/:id" element={<UserDashboardPage activeUser={activeUser}/>}/>
          <Route path="/book_appointment" element={<BookAppointmentPage 
              artists={artistsArray}
              activeUser={activeUser}/>}/>
          <Route path="/app_confirmation" element={<AppointmentConfirmationPage/>}/>
          <Route path="/artist_dashboard" element={<ArtistDashboardPage/>}/>
          <Route path="/services" element={<ServicesPage />}/>
          <Route path="/our_team" element={<OurTeamPage artists={artistsArray}/>}/>
          <Route path="/our_team/:id" element={<SingleArtistPage artists={artistsArray}/>}/>
          <Route path="/portfolio" element={<PortfolioPage/>}/>
        </Routes>
      </div>
  );
}

export default App;
