import classes from "./Footer.module.css"

function Footer() {
  return (
    <footer className={classes.footer}>
      <p>Technical test for ISKRA</p>
        <a href="https://github.com/NigelFerrefe/react-meetup" target="_blank">
        Access to repository
        </a>
      <p>by Nigel Ferreres</p>
    </footer>
  );
}

export default Footer;