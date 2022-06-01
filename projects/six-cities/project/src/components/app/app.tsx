import MainScreen from '../main-screen/main-screen';

type AppProps = {
  countPlaceCard: number
}

function App({countPlaceCard}: AppProps): JSX.Element {
  return <MainScreen countPlaceCard={countPlaceCard} />;
}

export default App;
