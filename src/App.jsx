import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//CSS
import "./App.css";

//LAYOUT
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import PageContent from "./layouts/PageContent";

//COMPONENTS
//Hooks
import useAxios from "./hooks/useAxios";

function App() {
  const [resData, dataRequest] = useAxios();

  return (
    <>
      <Header />
      <PageContent />
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
