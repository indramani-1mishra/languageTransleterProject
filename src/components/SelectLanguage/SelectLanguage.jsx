//import Inputfield from "../inputdata/inputfield";

import { useState } from "react";
import DisplayValue from "./displayValue";
import './Select.css';

function SelectLanguages({ LanguageList }) {

    const [languageValues,setvalue] =  useState('');

    {/*function onchange1(e)
    {
      console.log('changed to', e.target.value);
      // your code goes here to send the value to your backend or do whatever you want with it.
    
    } */}
     function setvaluef(e)
    {
     setvalue(e.target.value);
    }



    return (
        <>
       {/* <div>
            <Inputfield   onChangeHandler={onchange1} />
        </div> */}
        <div className="select">
        <div className="select1">
        <select id="select2" value={languageValues} onChange={setvaluef} >
        {Object.entries(LanguageList).map(([languageName, languageCode]) => (
          <option key={languageCode} value={languageCode}>
            {languageName}
          </option>
        ))}
      </select>
        </div>
        <div className="value1">
           <DisplayValue  languageValues={languageValues}/>
        </div>
         
       </div>
      </>
    );
  }
 
  
  export default SelectLanguages;
  