# React Meetup App

## Description

This is a simple meetup management application built with React. Users can view a list of meetups, add new meetups, and mark meetups as favorites. The app uses global state management with Zustand, and all user interactions, including creating meetups and managing favorites, are persisted across sessions using localStorage. Navigation is handled with React Router DOM, and the UI is responsive and interactive, with smooth header animations and page transitions.

## Technology Stack

- **React Router DOM**: Handles client-side routing and URL management.
- **Zustand**: State management library used for global stores with localStorage persistence.
- **Cypress**: Used for end-to-end testing to validate complete user flows in the browser.
- **CSS Modules**: For component-scoped and responsive styling.
- **React Helmet Async**: Used to dynamically manage `<title>`, `<meta>` description, and `<link>`  tags to improve SEO.

## Brief Explanation of the Implemented Solution

**Global State with Zustand:**  
We manage two main stores with Zustand: one for meetups and one for favorites. The meetup store keeps track of the meetups that are created throughout the application, while the favorites store maintains an array of meetups that the user marks as favorites. Both stores use localStorage persistence to ensure data is retained across sessions.

**Screens and Navigation:**  
- The home screen renders the initial meetups from the data set as well as any new meetups created via the Zustand store.  
- The “Add New Meetup” feature allows users to create new meetups, which are automatically added to the store and displayed in the main list.  
- The “My Favorites” screen uses the favorites store to show all selected meetups, including both initial and newly created meetups.


**Navbar:**  
The header includes an animation to provide quick access to different pages while scrolling. When scrolling down, the header disappears, and when scrolling up, it reappears in the correct page position. This is implemented using pure CSS without any additional libraries.

**React Router DOM:**  
Navigation between pages is implemented with React Router DOM, ensuring that routes are always reflected in the URL for SEO purposes. For example, the favorites page is accessible via `/favorites`.

**React Helmet Async and SEO:**  
For SEO, each page uses `react-helmet-async` to dynamically update the page title, meta description, and canonical link. The `<title>` tells search engines the main topic of the page, `<meta name="description">` helps create a concise and relevant snippet in search results, and `<link rel="canonical">` prevents duplicate content issues by pointing to the preferred URL.

**Toggle Favorites:**  
The logic to add and remove meetups from favorites is handled through the Zustand store, enabling a simple and consistent toggle functionality throughout the app.

**End-to-End Testing with Cypress:**  
The app also includes E2E tests with Cypress to validate full user flows. For example, a test simulates visiting the home page, creating a new meetup via the form, adding it to favorites, and verifying it appears on the “My Favorites” page. This ensures that all critical interactions work as expected in the browser environment.

## Installation and Running

1. Clone the repository:

```shell
git clone https://github.com/NigelFerrefe/react-meetup.git
cd react-meetup
```

2. Install dependencies:

```shell
npm install
```

3. Run the application:

```shell
npm run
```

4. Available Scripts

In the project directory, you can run:

```shell
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

```shell
npm test
```

Launches the test runner in the interactive watch mode.\
