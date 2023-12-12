//CSS
import "./App.css";

//LAYOUT
import Header from "./layouts/header";

//COMPONENTS
import BestsellerProduct from "./components/BestsellerProduct";
import EditorPick from "./components/EditorPick";
import CarouselMid from "./components/CarouselMid";
import Footer from "./layouts/Footer";
import ContainerFluid from "./components/ContainerFluid";
import Blog from "./components/Blog";

function App() {
  return (
    <>
      <Header />
      <EditorPick />
      <BestsellerProduct />
      <CarouselMid />
      <ContainerFluid />
      <Blog />
      <Footer />
    </>
  );
}

export default App;
