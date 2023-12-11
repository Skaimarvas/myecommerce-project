import "./App.css";
import BestsellerProduct from "./components/BestsellerProduct";
import EditorPick from "./components/EditorPick";
import Header from "./layouts/header";

function App() {
  return (
    <>
      <Header />
      <EditorPick />
      <BestsellerProduct />
    </>
  );
}

export default App;
