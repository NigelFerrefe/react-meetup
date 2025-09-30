import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import placeholderImg from "../../assets/images/placeholderImg.jpg";
import { useFavoriteStore } from "../../store/favorites.store";

export default function MeetupItem({ item }) {
  const { isFavorite, toggleFavorite } = useFavoriteStore();
  return (
    <li className={classes.item} data-test="meet-up-item">
      <Card>
        <div className={classes.image}>
          <img
            src={item.image || placeholderImg}
            alt={item.title}
            onError={(e) => {
              e.currentTarget.src = placeholderImg;
            }}
          />
        </div>
        <div className={classes.content}>
          <h3>{item.title}</h3>
          <address>{item.address}</address>
          <p>{item.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={() => toggleFavorite(item.id)}>
            {isFavorite(item.id) ? "Remove from Favorites" : "Add to Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
}
