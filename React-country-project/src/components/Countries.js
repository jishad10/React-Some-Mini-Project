import React from "react";
import { v4 as uuidv4 } from "uuid";
import Country from "./Country";
import style from "./countries.module.css";


//Countries e amra props ta ke recieve kortechi
const Countries = (props) => {
  return (
    <section className={style.countries}>
      {props.countries.map((country) => {
        const countryNew = { country, id: uuidv4() }; //country ekta object oi ta ke nicchi && id er modde every time unoque id generate kortechi
        return (         
          <Country
            {...countryNew} //country te ja ja aace sob ni e nicchi
            key={countryNew.id}
            onRemoveCountry={props.onRemoveCountry}  //ei props ta app.js theke recieve korchi
          />
        );
      })}
    </section>
  );
};

export default Countries;
