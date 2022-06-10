import { Routes, Route, BrowserRouter } from 'react-router-dom';

import MainScreen from '../main-screen/main-screen';
import LoginScreen from '../login-screen/login-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import PropertyScreen from '../property-screen/property-screen';

import { AppRoute } from '../../const';
import NotFoundScreen from '../not-found-screen/not-found-screen';

type AppProps = {
  countPlaceCard: number;
};

function App({ countPlaceCard }: AppProps): JSX.Element {
  // return <MainScreen countPlaceCard={countPlaceCard} />;
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainScreen countPlaceCard={countPlaceCard} />}
        />
        <Route path={AppRoute.Login} element={<LoginScreen />} />
        <Route path={AppRoute.Favorites} element={<FavoritesScreen />} />
        <Route path={AppRoute.Room} element={<PropertyScreen />} />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
