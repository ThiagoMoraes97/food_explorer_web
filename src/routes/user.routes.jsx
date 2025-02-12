import { Route, Routes } from 'react-router-dom';

import { Home } from '../pages/Home';
import { DishDetails } from '../pages/DishDetails';

export function UserRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dish/:id" element={<DishDetails />} />
    </Routes>
  );
}