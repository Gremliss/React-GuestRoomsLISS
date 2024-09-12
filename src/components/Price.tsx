function Price() {
  return (
    <div className="col-5" id="price">
      <h3>Cennik</h3>
      <table>
        <tr>
          <th className="width50">
            <span className="">W sezonie: </span>
          </th>
          <th className="width50">
            <span className="bold_orange">65 zł/os</span>
          </th>
        </tr>
        <tr>
          <th className="width50">
            <span className="">Poza sezonem:</span>
          </th>
          <th className="width50">
            <span className="bold_orange">50 zł/os</span>
          </th>
        </tr>
      </table>
      <p className="">
        Doba noclegowa rozpoczyna się o godzinie 14:00,
        <br />
        kończy w dniu wyjazdu o godzinie 10:00.
      </p>
      <p>Płatność w dniu przyjazdu.</p>
    </div>
  );
}

export default Price;
