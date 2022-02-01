import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { GifExpertApp } from '../components/gifs-component/GifExpertApp';
import { HeroesApp } from '../components/hero-component/HeroesApp';
import { DCScreen } from '../components/hero-component/dc/DCScreen';
import { MarvelScreen } from '../components/hero-component/marvel/MarvelScreen';
import { SearchScreen } from '../components/hero-component/search/SearchScreen';
import { TodoApp } from '../components/tasks-component/TodoApp';
import { Homepage } from '../pages/Homepage';
import { Login } from '../pages/Login';
import { Navbar } from '../components/ui/Navbar';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/hero" element={<HeroesApp />} />
          <Route path="/hero/marvel" element={<MarvelScreen />} />
          <Route path="/hero/dc" element={<DCScreen />} />
          <Route path="/hero/search" element={<SearchScreen />} />
        <Route path="/gifs" element={<GifExpertApp />} />
        <Route path="/tasks" element={<TodoApp />} />
      </Routes>
    </BrowserRouter>
  )
};
