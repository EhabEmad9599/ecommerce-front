import Lottie from "lottie-react";
import notFound from "../../../assets/lottiefiles/notFound.json";
import AddingItem from "../../../assets/lottiefiles/AddingItem.json";
import emptyCart from "../../../assets/lottiefiles/emptyCart.json";
import error from "../../../assets/lottiefiles/emptyCart.json";


const lottiefilesMap = {
  notFound,
  emptyCart,
  AddingItem,
  error
}


type LottieHandlerProps = {
  type: keyof typeof lottiefilesMap;
  message?: string;
}

const LottieHandler = ({type, message}: LottieHandlerProps) => {
  const lottie = lottiefilesMap[type ]
  return (
    <div className="d-flex flex-column align-items-center">
      <Lottie animationData={lottie} style={{width:'600px', marginBottom: '30px'}} />
      {message && <h3>Message</h3>}
    </div>
  )
}

export default LottieHandler;