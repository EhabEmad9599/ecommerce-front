import styles from './styles.module.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { HeaderBasket } from '../../eCommerce/HeaderBasket/HeaderBasket';
import { NavLink } from 'react-router-dom';
import { HeaderWishlist } from '../../eCommerce';


const {login, register} = styles;

export const Header = () => {
  return (
    <header>
    <Navbar className="bg-body-tertiary p-3" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={NavLink} to="/">E-commerce App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/Categories">categories</Nav.Link>
            <Nav.Link as={NavLink} to="/AboutUs">About</Nav.Link>  
            <Nav.Link as={NavLink} to="/Login" className={login}>Login</Nav.Link>
            <Nav.Link as={NavLink} to="/Register" className={register}>Register</Nav.Link>
          </Nav>
          <HeaderWishlist/>
          <HeaderBasket/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}
