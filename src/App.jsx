
import './App.css'

import { LanguageList } from './components/helpercode/CountryCodes';
import SelectLanguages from './components/SelectLanguage/SelectLanguage';


function App() {
  return(
     <div className='co-wraper'>
     
      <SelectLanguages  LanguageList={LanguageList}/>
      

     </div>
  );
}

export default App
