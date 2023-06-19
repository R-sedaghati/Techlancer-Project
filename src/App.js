import Header from "./component/header";
import ModalCantact from "./component/modal-contact";
import ModalLogin from "./component/modal-login";
import ModalSignup from "./component/modal-signup";
function App() {
  return (
    <>
      <Header />
      <ModalCantact />
      <ModalLogin />
      <ModalSignup />
    </>
  );
}

export default App;
