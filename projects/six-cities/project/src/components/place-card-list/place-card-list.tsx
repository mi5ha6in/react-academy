import PlaceCard from '../place-card/place-card';

type PlaceCardListProps = {
  countPlaceCard: number
}

function PlaceCardList({countPlaceCard}: PlaceCardListProps): JSX.Element {
  const placeCardList = [];

  for (let i = 0; i < countPlaceCard; i++) {
    placeCardList.push(<PlaceCard />);
  }

  const placeCardListElement =
    (
      <div className="cities__places-list places__list tabs__content">
        {placeCardList.map((card) => card)}
      </div>
    );

  return placeCardListElement;
}

export default PlaceCardList;
