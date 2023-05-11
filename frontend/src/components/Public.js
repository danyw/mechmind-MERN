import { Link } from "react-router-dom";

const Public = () => {
  const content = (
    <section className="public">
      <header>
        <h1>
          Welcome to <span className="nowrap">MechMind Garage!</span>
        </h1>
      </header>
      <main className="public__main">
        <p>Located in London, MechMind Garage provides a trained staff ready to meet your needs.</p>
        <address className="public__addr">
          Mechmind LTD
          <br />
          110 Essex Road
          <br />
          NG10 1AB London
          <br />
          <a href="tel:+15555555555">0123123332</a>
        </address>
        <br />
        <p>Owner: Daniel Who</p>
        <br />
        <br />
        <p>Login for testing:</p>
        <p>Username: Admin</p>
        <p>Password: Admin</p>
      </main>
      <footer>
        <Link to="/login">Employee Login</Link>
      </footer>
    </section>
  );
  return content;
};
export default Public;
