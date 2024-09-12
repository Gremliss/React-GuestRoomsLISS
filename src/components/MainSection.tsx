import housePhoto from "../assets/images/photos/house.jpg";

function MainSection() {
  return (
    <section className="main">
      <div className="col-5 top_photo">
        <picture>
          <source srcSet={housePhoto} type="image/jpeg" />
          <img alt="Dom z zewnątrz" />
        </picture>
      </div>
      <article className="col-5">
        <h3>Witamy Państwa serdecznie!</h3>
        <p>
          Zapraszamy do malowniczej nadmorskiej miejscowości, znajdującej się
          niedaleko Karwii - Karwieńskie Błoto Pierwsze.
        </p>
        <p>
          Znajduje się ona z dala od miejskiego zgiełku, co umożliwia spokojny
          wypoczynek wśród lasów, bądź przy akompaniamencie szumu fal.
        </p>
        <p>
          Do Państwa dyspozycji posiadamy pokoje dwu, trzy oraz czteroosobowe.
        </p>
      </article>
    </section>
  );
}

export default MainSection;
