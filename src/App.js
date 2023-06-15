import Header from "./Components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import HomePage from "./Pages/HomePage/HomePage";
import CreateAccountPage from "./Pages/CreateAccountPage/CreateAccountPage";


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/create_account" element={<CreateAccountPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
