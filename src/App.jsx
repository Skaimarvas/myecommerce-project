import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//CSS
import "./App.css";

//Components
import ScrollToUpButton from "./components/ScrollToUpButton";
import Confirm from "./components/Confirm";
//Layout
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import PageContent from "./layouts/PageContent";

//Hooks
import { useDispatch } from "react-redux";
//Actions

import { verifyToken } from "./store/thunks/userThunk";

function App() {
  const [confirm, setConfirm] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(verifyToken());
  }, []);

  /**
   * Header'a setConfirm'i prob olarak başka nasıl gönderebiliriz? Context Api'yi sadece 1 prob için yüklemek istemedim.
   */

  return (
    <>
      <Header setConfirm={setConfirm} />
      <PageContent />
      <Footer />
      <ToastContainer />
      <ScrollToUpButton />
      {confirm && <Confirm confirm={confirm} setConfirm={setConfirm} />}
    </>
  );
}

export default App;
