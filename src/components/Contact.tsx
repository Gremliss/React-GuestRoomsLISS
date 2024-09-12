function Contact() {
  return (
    <div className="col-5" id="contact">
      <h3>Kontakt</h3>
      <table>
        <tr>
          <th className="width50">
            <span className="">Telefon komórkowy: </span>
          </th>
          <th className="width50">
            <span className="bold_orange">
              <a href="tel:609562423">609 562 423</a>
            </span>
          </th>
        </tr>
        <tr>
          <th className="width50">
            <span className="">Telefon stacjonarny: </span>
          </th>
          <th className="width50">
            <span className="bold_orange">
              <a href="tel:7742555">77 42 555</a>
            </span>
          </th>
        </tr>
        <tr>
          <th className="width50">
            <span className="">E-mail: </span>
          </th>
          <th className="width50">
            <span className="bold_orange">
              <a href="mailto:lissandrzej@wp.pl">lissandrzej@wp.pl</a>
            </span>
          </th>
        </tr>
      </table>
    </div>
  );
}

export default Contact;
