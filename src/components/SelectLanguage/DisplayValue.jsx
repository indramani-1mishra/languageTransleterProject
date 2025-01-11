import { useEffect, useState } from "react";
import Inputfield from "../inputdata/inputfield";
import './Select.css';
import axios from "axios";

function DisplayValue({ languageValues }) {
  const [value, setValue] = useState(''); // Input value state
  const [translatedValue, setTranslatedValue] = useState(''); // Translated value state
  const[copytext, setCopytext] = useState('');

  
  function debounce(func, delay) {
   let timerid;
   return ((...args) => {
   clearTimeout(timerid);
   timerid= setTimeout(() => 
  {
    func(...args);
   }, delay);
  })
  }


  async function convertLanguage() {
    if (value.trim() === "") {
      setTranslatedValue(''); 
      return; 
    }

    try {
      const response = await axios.get(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${languageValues}&dt=t&q=${value}`);
      console.log("Translated data:", response);
      
      // Extract translated text from API response and update state
      setTranslatedValue(response.data[0][0][0]);
    } catch (error) {
      console.error("Error in translation:", error);
    }
  }

 // const callAfterDlay= debounce(convertLanguage,1000);

  // Handle input change
  function onChangeHandler(e) {
    console.log("Value changed:", e.target.value);
    setValue(e.target.value); // Update input field value
    
  }
  const callAfterDlay= debounce(onChangeHandler,1000);

  function onClickf()
  {
    navigator.clipboard.writeText(translatedValue);
    alert("Text copied to clipboard!");
     setCopytext("Text copied to clipboard");

     setTimeout(() => {
      setCopytext("");
    }, 100); // Reset copytext after 2 seconds
 
  }

  
  useEffect(() => {
    convertLanguage(); //
    //callAfterDlay(); // Call translation function after 1 second delay when input changes
  }, [value, languageValues]); 

  return (
    <>
      <div className="raj">
        <Inputfield onChangeHandler={callAfterDlay} />
      </div>
      <div className="raj3">
        {translatedValue && <p>{(value==="")?" ":translatedValue}</p>}
         <button type="button" className="btn1" onClick={onClickf}>{(copytext)? copytext:"copy to clipbord"}</button> 
             </div>
    </>
  );
}

export default DisplayValue;
