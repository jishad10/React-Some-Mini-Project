import React from "react";
import style from "./country.module.css";

const Country = (props) => {
  const { name, flags, capital, population, area } = props.country;  //destructure ko re props.country theke ei jinis golo ber ko re nicchi

  const handleRemoveCountry = (name) => {
    props.onRemoveCountry(name);
  };


  //card e hisabe je dekacchi tar kaj ei gola
  return (
    <article className={style.country}>
      <div>
        <img src={flags.png} alt={name.common} className={style.flag} />  {/** name.common e common ta url e aace oi khan theke nicchi */}
        <h3>Name: {name.common}</h3>
        <h3>Population: {population}</h3>
        <h3>Capital: {capital}</h3>
        <h3>Area: {area}</h3>
        <button
          className={style.btn}
          onClick={() => {
            handleRemoveCountry(name.common);
          }}
        >
          Remove Country
        </button>
      </div>
    </article>
  );
};

export default Country;
