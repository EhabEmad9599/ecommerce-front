import  LottieHandler  from "../components/feedback/LottieHandler/LottieHandler";
import { Link} from "react-router-dom";
import { Container } from "react-bootstrap";

const Error = () => {

  return (
    <Container className="d-flex flex-column align-items-center" style={{marginTop: "15%"}}>
      <LottieHandler type='notFound'/>
      <Link to="/" replace={true}>
        How about going back to safety?
      </Link>
    </Container>
  );
};

export default Error;
