import { render, screen, fireEvent } from "@testing-library/react";
import MeetupItem from "./MeetupItem";
import placeholderImg from "../../assets/images/placeholderImg.jpg";
import { useFavoriteStore } from "../../store/favorites.store";

// Mock de persist (igual que en tu otro test con Zustand)
jest.mock("zustand/middleware", () => ({
  persist: (config) => config,
}));

const fakeItem = {
  id: "1",
  title: "Meetup Test",
  image: "https://via.placeholder.com/150",
  address: "123 Main St",
  description: "A test meetup",
};

const fakeItemNoImage = {
  id: "2",
  title: "Meetup without image",
  image: null,
  address: "456 Secondary St",
  description: "Meetup without image to test placeholder image",
};

const fakeItemNoDescription = {
  id: "3",
  title: "Meetup without description",
  image: "https://via.placeholder.com/150",
  address: "789 Another St",
  description: "",
};

describe("MeetupItem Integration Test", () => {
  beforeEach(() => {
    useFavoriteStore.setState({ favorites: [] });
  });
  test("renders a MeetupItem", () => {
    render(<MeetupItem item={fakeItem} />);
    const titleElement = screen.getByText(fakeItem.title);
    const imageElement = screen.getByRole("img");
    const addressElement = screen.getByText(fakeItem.address);
    const descriptionElement = screen.getByText(fakeItem.description);
    expect(titleElement).toBeTruthy();
    expect(addressElement).toBeTruthy();
    expect(descriptionElement).toBeTruthy();
    expect(imageElement).toBeTruthy();
    expect(imageElement.src).toBe(fakeItem.image);
  });

  test("renders placeholder img when item has no img", () => {
    render(<MeetupItem item={fakeItemNoImage} />);
    const imageElement = screen.getByRole("img");
    expect(imageElement).toBeTruthy();
    expect(imageElement.src).toContain(placeholderImg);
  });

  test("renders a MeetupItem without description", () => {
    render(<MeetupItem item={fakeItemNoDescription} />);

    expect(screen.getByText(fakeItemNoDescription.title)).toBeTruthy();
    expect(screen.getByText(fakeItemNoDescription.address)).toBeTruthy();
    expect(screen.getByRole("img")).toBeTruthy();

    const descriptionEl = screen.getByText((content, element) => {
      return element.tagName.toLowerCase() === "p" && content === "";
    });
    expect(descriptionEl).toBeTruthy();
  });

  test("renders favorite button and toggles on click", () => {
    render(<MeetupItem item={fakeItem} />);

    let button = screen.getByRole("button", { name: /add to favorites/i });
    expect(button).toBeTruthy();
    expect(useFavoriteStore.getState().isFavorite(fakeItem.id)).toBe(false);
    fireEvent.click(button);

    expect(useFavoriteStore.getState().isFavorite(fakeItem.id)).toBe(true);
    button = screen.getByRole("button", {
      name: /remove from favorites/i,
    });
    expect(button).toBeTruthy();

    expect(useFavoriteStore.getState().isFavorite(fakeItem.id)).toBe(true);
    fireEvent.click(button);
    button = screen.getByRole("button", {
      name: /add to favorites/i,
    });
    expect(button).toBeTruthy();
  });
});
