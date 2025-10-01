import NewMeetupForm from "../components/meetups/NewMeetupForm";
import Layout from "../components/layout/Layout";

export default function NewMeetupsPage() {
  return (
    <Layout
      title="New Meetups | React Meetup"
      description="Create and share new Meetups with the community."
      link="new"
    >
      <section>
        <h1>Add New Meetup</h1>
        <NewMeetupForm />
      </section>
    </Layout>
  );
}
