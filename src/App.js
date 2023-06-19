import Header from "./component/header";
import ModalCantact from "./component/modal-contact";
import ModalLogin from "./component/modal-login";
import ModalSignup from "./component/modal-signup";
import AboutUs from "./component/about-us";
import Services from "./component/services";
function App() {
  return (
    <>
      <Header />
      <ModalCantact />
      <ModalLogin />
      <ModalSignup />
      <AboutUs />
      <Services />
    </>
  );
}

export default App;
