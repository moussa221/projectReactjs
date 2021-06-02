import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

function Headers() {
  let user = JSON.parse(localStorage.getItem("user-info"));

  const history = useHistory();

  function logOut() {
    localStorage.clear();
    history.push("/connexion");
  }

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#">Navbar</Navbar.Brand>
        <Nav className="mr-auto nav_bar_wrapper">
          {localStorage.getItem("user-info") ? (
            <>
              <Link to="/add">Add</Link>
              <Link to="/update">Update</Link>
            </>
          ) : (
            <>
              <Link to="/connexion">Connexion</Link>
              <Link to="/inscription">Register</Link>
            </>
          )}
        </Nav>
        {localStorage.getItem("user-info") ? (
          <Nav>
            <NavDropdown title={user && user.name}>
              <NavDropdown.Item onClick={logOut}>Déconnexion</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        ) : null}
      </Navbar>
    </div>
  );
}

export default Headers;
