import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//CSS
import "./App.css";

//Components
import ScrollToUpButton from "./components/ScrollToUpButton";
import Confirm from "./components/Confirm";
//Layout
import Header from "./layouts/header";
import Footer from "./layouts/footer";
import PageContent from "./layouts/pagecontent";

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
  return (
    <>
      <Header setConfirm={setConfirm} />
      <PageContent />
      <Footer />
      <ToastContainer />
      <ScrollToUpButton />
      {confirm && <Confirm setConfirm={setConfirm} />}
    </>
  );
}

export default App;
