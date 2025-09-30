import { render, screen, fireEvent } from "@testing-library/react";
import NewMeetupForm from "./NewMeetupForm";
import { useMeetupStore } from "../../store/meetup.store";


jest.mock("zustand/middleware", () => ({
  persist: (config) => config, 
}));


describe("NewMeetupForm Integration Test", () => {
  beforeEach(() => {
    useMeetupStore.setState({ newMeetups: [] });
  });
  test("allows typing in the form inputs", () => {
    render(<NewMeetupForm />);

    //Select inputs and simulate user typing
    const titleInput = screen.getByLabelText(/meetup title/i);
    const imageInput = screen.getByLabelText(/meetup image/i);
    const addressInput = screen.getByLabelText(/address/i);
    const descriptionInput = screen.getByLabelText(/description/i);

    fireEvent.change(titleInput, { target: { value: "Test Meetup" } });
    fireEvent.change(imageInput, {
      target: { value: "https://i.pravatar.cc/300" },
    });
    fireEvent.change(addressInput, { target: { value: "123 Test Street" } });
    fireEvent.change(descriptionInput, {
      target: { value: "This is a test meetup description" },
    });

    //Submit and check new meetup in the store
    const submitButton = screen.getByRole("button", { name: /add meetup/i });
    fireEvent.click(submitButton);

    const state = useMeetupStore.getState();
    expect(state.newMeetups.length).toBe(1);

    const newMeetup = state.newMeetups[0];
    expect(newMeetup.title).toBe("Test Meetup");
    expect(newMeetup.image).toBe("https://i.pravatar.cc/300");
    expect(newMeetup.address).toBe("123 Test Street");
    expect(newMeetup.description).toBe("This is a test meetup description");
  });
});
