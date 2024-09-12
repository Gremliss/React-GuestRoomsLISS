import "./App.css";
import Menu from "./components/Menu";
import NameLogo from "./components/NameLogo";

function App() {
  return (
    <>
      <Menu />
      <NameLogo />

      <div className="col-8">
        <section className="main">
          <div className="col-5 top_photo">
            <picture>
              <source srcSet="src/assets/images/photos/house.jpg" />
              <img src="png_house.jpg" alt="" />
            </picture>
          </div>
          <div className="col-5">
            <h3>Witamy Państwa serdecznie!</h3>
            <p>
              Zapraszamy do malowniczej nadmorskiej miejscowości, znajdującej
              się niedaleko Karwii - Karwieńskie Błoto Pierwsze.
            </p>
            <p>
              Znajduje się ona z dala od miejskiego zgiełku, co umożliwia
              spokojny wypoczynek wśród lasów, bądź przy akompaniamencie szumu
              fal.
            </p>
            <p>
              Do Państwa dyspozycji posiadamy pokoje dwu, trzy oraz cztero -
              osobowe.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
