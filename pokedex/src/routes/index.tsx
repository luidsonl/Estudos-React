import { Routes as ReactRouterDomRoutes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import PokemonArchive from '../pages/PokemonArchive';
import PokemonSearch from '../pages/PokemonSearch';
import PokemonSingle from '../pages/PokemonSingle';

function Routes() {
  return (
    <ReactRouterDomRoutes>
      <Route index element={<Home />} />
      <Route path='pokemon' element={<PokemonArchive />} />
      <Route path='pokemon/:id' element={<PokemonSingle />} />
      <Route path='search/:term' element={<PokemonSearch />} />
      <Route path='search' element={<PokemonSearch />} />
      <Route path='*' element={<NotFound />} />
    </ReactRouterDomRoutes>
  );
}

export default Routes;
