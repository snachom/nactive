import { Routes, Route } from 'react-router-dom';
import { Navbar } from '../components/ui/Navbar';
import { GifExpertApp } from '../components/gifs-component/GifExpertApp';
import { HeroesApp } from '../components/hero-component/HeroesApp';
import { DCScreen } from '../components/hero-component/dc/DCScreen';
import { MarvelScreen } from '../components/hero-component/marvel/MarvelScreen';
import { SearchScreen } from '../components/hero-component/search/SearchScreen';
import { TodoApp } from '../components/tasks-component/TodoApp';
import { Homepage } from '../pages/home/Homepage';
import { HeroDetail } from '../components/hero-component/hero-detail/HeroDetail';

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="hero" element={<HeroesApp />} />
          <Route path="/hero/marvel" element={<MarvelScreen />} />
          <Route path="/hero/dc" element={<DCScreen />} />
          <Route path="/hero/search" element={<SearchScreen />} />
            <Route path="/hero/hero-detail/:heroId" element={<HeroDetail />} />
        <Route path="gifs" element={<GifExpertApp />} />
        <Route path="tasks" element={<TodoApp />} />
        <Route index path="/nactive" element={<Homepage />} />
        <Route index path="/" element={<Homepage />} />
      </Routes>
    </>
  )
};
