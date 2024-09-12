import "./App.css";
import Menu from "./components/Menu";
import NameLogo from "./components/NameLogo";
import MainSectin from "./components/MainSection";
import ObjectSection from "./components/ObjectsSection";
import RoomsDescription from "./components/RoomsDescription";
import RoomsPhotos from "./components/RoomsPhotos";
import Price from "./components/Price";
import Contact from "./components/Contact";
import Lokalization from "./components/Lokalization";

function App() {
  return (
    <>
      <Menu />
      <NameLogo />

      <div className="col-8">
        <MainSectin />
        <ObjectSection />
        <RoomsDescription />
        <RoomsPhotos />
        <Price />
        <Contact />
        <Lokalization />
      </div>
    </>
  );
}

export default App;
