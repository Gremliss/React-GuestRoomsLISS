import lissLogo from "../assets/images/liss_logo.png";
import seaPhoto from "../assets/images/photos/sea-4.jpg";

function NameLogo() {
  return (
    <>
      <section className="firm">
        <img src={lissLogo} alt="Liss logo" className="logo" />
        <h1>LISS - Pokoje Gościnne</h1>
      </section>
      <header>
        <h1>
          POKOJE GOŚCINNE W MALOWNICZYM <br />
          KARWIEŃSKIM BŁOCIE KOŁO KARWII
        </h1>
      </header>
      <div className="background-photo">
        <img src={seaPhoto} alt="Morze" />
      </div>
    </>
  );
}

export default NameLogo;
