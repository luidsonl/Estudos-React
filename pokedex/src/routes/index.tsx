import { Routes as ReactRouterDomRoutes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

function Routes() {
  return (
    <ReactRouterDomRoutes>
      <Route index element={<Home />} />
      <Route path='*' element={<NotFound />} />
    </ReactRouterDomRoutes>
  );
}

export default Routes;
