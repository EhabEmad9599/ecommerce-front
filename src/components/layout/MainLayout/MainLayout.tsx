import { Container } from "react-bootstrap";
import styles from './styles.module.css';
import { Header } from "../../common/Header/Header";
import { Footer } from '../../common/Footer/Footer';
import { Outlet } from 'react-router-dom';

const { container, wrapper } = styles;

export const MainLayout = () => {
  return (
    <>
      <Header/>
        <Container className={container}>
          <div className={wrapper}>
        <Outlet/>
          </div>
          <Footer/> 
        </Container>
    </>
  )
}