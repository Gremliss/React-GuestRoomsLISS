import roomPhoto from "../assets/images/photos/room-lights.jpg";

function RoomsDescription() {
  return (
    <section id="rooms">
      <div className="col-5 lights_img">
        <img src={roomPhoto} alt="Pokój" />
      </div>
      <div className="col-5">
        <h3>Pokoje</h3>
        <p>Dom podzielony jest na 2 osobne części.</p>
        <p>
          W części górnej znajduje się kuchnia z ekspresem do kawy oraz osobną
          lodówką dla każdego z 4 pokoi:
          <p>
            Pokój 1: 3-osobowy
            <br />
            Pokój 2: 3-osobowy z balkonem
            <br />
            Pokój 3: 4-osobowy z balkonem
            <br />
            Pokój 4: 3-osobowy
            <br />
          </p>
        </p>
        <p>
          W części dolnej znajduje się kuchnia oraz 2 pokoje:
          <p>
            Pokój 5: 2-osobowy
            <br />
            Pokój 6: 4-osobowy
            <br />
          </p>
        </p>
        <p>
          Istnieje możliwość wynajęcia całej części dolnej wraz z kuchnią na
          własny użytek.
        </p>
      </div>
    </section>
  );
}

export default RoomsDescription;
