import { useEffect, useState } from "react";
import Inputfield from "../inputdata/inputfield";
import './Select.css';
import axios from "axios";

function DisplayValue({ languageValues }) {
  const [value, setValue] = useState(''); // Input value state
  const [translatedValue, setTranslatedValue] = useState(''); // Translated value state
  const[copytext, setCopytext] = useState('');

  // Handle button click to copy translated value to clipboard
  

  // API call function to fetch translated text
  async function convertLanguage() {
    if (value.trim() === "") {
      setTranslatedValue(''); // Reset translated value when input is empty
      return; // Prevent empty API call
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

  // Handle input change
  function onChangeHandler(e) {
    console.log("Value changed:", e.target.value);
    setValue(e.target.value); // Update input field value
  }

  function onClickf()
  {
    navigator.clipboard.writeText(translatedValue);
    alert("Text copied to clipboard!");
     setCopytext("Text copied to clipboard");

     setTimeout(() => {
      setCopytext("");
    }, 2000); // Reset copytext after 2 seconds
 
  }

  
  useEffect(() => {
    convertLanguage(); //
  }, [value, languageValues]); 

  return (
    <>
      <div className="raj">
        <Inputfield onChangeHandler={onChangeHandler} />
      </div>
      <div className="raj3">
        {translatedValue && <p>{(value==="")?" ":translatedValue}</p>}
         <button type="button" className="btn1" onClick={onClickf}>{(copytext)? copytext:"copy to clipbord"}</button> 
             </div>
    </>
  );
}

export default DisplayValue;
