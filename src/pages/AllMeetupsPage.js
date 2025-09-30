import MeetupItem from "../components/meetups/MeetupItem";
import classes from "./../components/meetups/MeetupList.module.css";
import originalMeetups from "../data/data.json";
import { useMeetupStore } from "../store/meetup.store";

export default function AllMeetupsPage() {
  const { newMeetups } = useMeetupStore();

  const allMeetups = [...originalMeetups, ...newMeetups];

  if (allMeetups.length === 0) return <p>Loading...</p>;
  //console.log(allMeetups.map((i) => i.id));

  return (
    <section>
      <h1>All Meetups</h1>
      <ul className={classes.list}>
        {allMeetups.map((meetup) => (
          <MeetupItem key={meetup.id} item={meetup} />
        ))}
      </ul>
    </section>
  );
}
