import { Helmet } from "react-helmet-async";
import MainNavigation from "./MainNavigation"
import classes from "./Layout.module.css";
import Footer from "./Footer";

export default function Layout({ children, title, description, canonical }) {
  return (
    <>
      <Helmet>
        {title && <title>{title}</title>}
        {description && <meta name="description" content={description} />}
        {canonical && <link rel="canonical" href={canonical} />}
      </Helmet>
      <MainNavigation />
      <main className={classes.main}>{children}</main>
      <Footer />
    </>
  );
}
