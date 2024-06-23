import Navigation from "./components/Navigation/Navigation"
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import NotFound from "./components/404/404";
import CreateMovie from "./components/CreateMovie/CreateMovie";
import EditMovie from "./components/EditMovie/EditMovie";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Bookmarked from "./components/Bookmarked/Bookmarked";
import AuthContextProvider from "./contexts/AuthContext";


function App() {  



  return (
    <main className="mx-[12%]">
      <AuthContextProvider>
      <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/movie-details/:idMovie' element={<MovieDetails />} />
        <Route path='/404' element={<NotFound />} />
        <Route path='/bookmarked' element={<Bookmarked />} />
        <Route path='/create-movie' element={<CreateMovie />} />
        <Route path='/edit-movie/:id' element={<EditMovie />} />
        <Route path='register' element={<Register></Register>} />
        <Route path='login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      </BrowserRouter>
      </AuthContextProvider>
    </main>
  )
}

export default App
