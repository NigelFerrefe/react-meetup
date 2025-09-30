import { useMeetupStore } from "../../store/meetup.store";
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

export default function NewMeetupForm() {
  const { addMeetup } = useMeetupStore();

  function submitHandler(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const newMeetup = {
      title: formData.get("title"),
      image: formData.get("image"),
      address: formData.get("address"),
      description: formData.get("description"),
    };

    addMeetup(newMeetup);
    console.log(newMeetup);
    event.target.reset();
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" id="title" name="title" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" id="image" name="image" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" id="address" name="address" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            required
            rows="5"
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}
