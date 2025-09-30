import { create } from "zustand";
import { persist } from "zustand/middleware";
import originalMeetups from "../data/data.json";

export const useMeetupStore = create(
  persist(
    (set, get) => ({
      newMeetups: [],
      addMeetup: (meetup) => {
        const { newMeetups } = get();
        const combinedMeetups = [...originalMeetups, ...newMeetups];

        const lastIdNumber =
          combinedMeetups.length > 0
            ? parseInt(combinedMeetups[combinedMeetups.length - 1].id.slice(1))
            : 0;
        const newId = "m" + (lastIdNumber + 1);
        const newMeetup = { id: newId, ...meetup };
        set({ newMeetups: [...newMeetups, newMeetup] });
      },
    }),
    { name: "meetups-storage" }
  )
);
