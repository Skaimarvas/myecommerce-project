import { useEffect } from "react";

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
    </>
  );
}

export default App;
