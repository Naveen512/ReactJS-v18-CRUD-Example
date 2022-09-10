import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Layout(props) {
  return (
    <div>
        <Navbar expand="lg" variant="dark" bg="success">
          <Container>
            <Navbar.Brand >Fruits Bucket</Navbar.Brand>
          </Container>
        </Navbar>
      <Container className="mt-2">{props.children}</Container>
    </div>
  );
}

export default Layout;