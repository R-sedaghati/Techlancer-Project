import Preloader from "./component/preloader";
import Header from "./component/header";
import ModalCantact from "./component/modal-contact";
import ModalLogin from "./component/modal-login";
import ResetPassword from "./component/modal-reset-password";
import ModalOtp from "./component/modal-otp";
import ModalSignup from "./component/modal-signup";
import AboutUs from "./component/about-us";
import Services from "./component/services";
import TeameUs from "./component/team-us";
import ChatBox from "./component/chatbox";
import Footer from "./component/footer";
function App() {
  return (
    <>
      <Preloader />
      <Header />
      <ModalCantact />
      <ModalLogin />
      <ResetPassword />
      <ModalOtp />
      <ModalSignup />
      <AboutUs />
      <Services />
      <TeameUs />
      <ChatBox />
      <Footer />
    </>
  );
}

export default App;
