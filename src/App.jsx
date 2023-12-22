import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//CSS
import "./App.css";

//Components

//Layout
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import PageContent from "./layouts/PageContent";

//Hooks
import { useDispatch, useSelector } from "react-redux";
//Actions
import { getCategories } from "./store/actions/globalActions";
import { getProduct } from "./store/thunks/productThunk";

function App() {
  const { productlist } = useSelector((store) => store.product);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("productlist", productlist);
    if (productlist.length === 0) {
      dispatch(getCategories());
      dispatch(getProduct());
    }
  }, []);
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
