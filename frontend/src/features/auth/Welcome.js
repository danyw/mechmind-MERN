import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useTitle from "../../hooks/useTitle";

const Welcome = () => {
  const { username, isManager, isAdmin } = useAuth();
  useTitle(`MechMind Notes: ${username}`);
  const date = new Date();
  const today = new Intl.DateTimeFormat("en-GB", { dateStyle: "full", timeStyle: "long" }).format(date);

  const content = (
    <section className="welcome">
      <p>{today}</p>

      <h1>Welcome!</h1>

      <p>
        <Link to="/dash/notes">View Mechmind Notes</Link>
      </p>
      <p>
        <Link to="/dash/notes/new">Add New Mechmind Note</Link>
      </p>
      {(isManager || isAdmin) && (
        <p>
          <Link to="/dash/users">View User Settings</Link>
        </p>
      )}

      {(isManager || isAdmin) && (
        <p>
          <Link to="/dash/users/new">Add New User</Link>
        </p>
      )}
    </section>
  );

  return content;
};
export default Welcome;
