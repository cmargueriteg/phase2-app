import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavBar() {




  return (

<>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Musher Database</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/doglist">Dogs</Nav.Link>
            <Nav.Link href="/build">Team Build</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
   
    </>






    // <div>
    //   <NavLink
    //   to="/"
    //   style={style}>
    //       Home
    //   </NavLink>

    //   <NavLink
    //   to="/doglist">
    //     Dogs
    //   </NavLink>

    //   <NavLink 
    //   to="/build">
    //     Team Build
    //   </NavLink>
    // </div>
  )
}

export {NavBar}
