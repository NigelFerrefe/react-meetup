import MeetupItem from "../components/meetups/MeetupItem";
import classes from "./../components/meetups/MeetupList.module.css";
import originalMeetups from "../data/data.json";
import { useMeetupStore } from "../store/meetup.store";
import { useFavoriteStore } from "../store/favorites.store";

export default function FavoritesPage() {
  const { newMeetups } = useMeetupStore();
  const { favorites } = useFavoriteStore();

  const allMeetups = [...originalMeetups, ...newMeetups];

  const favoriteMeetups = allMeetups.filter((meetup) =>
    favorites.includes(meetup.id)
  );

  if (favoriteMeetups.length === 0) {
    return <p>No favorites yet!</p>;
  }

  return (
    <section>
      <h1>My Favorites</h1>
      <ul className={classes.list}>
        {favoriteMeetups.map((meetup) => (
          <MeetupItem key={meetup.id} item={meetup} />
        ))}
      </ul>
    </section>
  );
}
