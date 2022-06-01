import PlaceCard from '../place-card/place-card';

function PlaceCardList(): JSX.Element {
  const COUNT_PLACE_CARD = 5;
  const placeCardList = [];

  for (let i = 0; i <= COUNT_PLACE_CARD; i++) {
    placeCardList.push(<PlaceCard />);
  }

  const placeCardListElement =
    (
      <div className="cities__places-list places__list tabs__content">
        {placeCardLists.map((card) => card)}
      </div>
    );

  return placeCardListElement;
}

export default PlaceCardList;
