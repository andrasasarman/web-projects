
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import GalleryList from './components/GalleryList/GalleryList.jsx'
import Header from './components/PageHeader/PageHeader.jsx'
import Painting from './components/Painting/Painting.jsx'

function App() {

  return (
    <main>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<GalleryList />} />
        <Route path="/paintings" element={<GalleryList />} />
        <Route path="/paintings/:id" element={<Painting />} />
      </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
