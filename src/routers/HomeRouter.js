import { Routes, Route } from 'react-router-dom';
import { Homepage } from '../pages/home/Homepage';


export const HomeRouter = () => {
  return (
    <>
      <Routes>
        <Route index path="/nactive" element={<Homepage />} />
        <Route index path="/" element={<Homepage />} />
      </Routes>
    </>
  )
};
