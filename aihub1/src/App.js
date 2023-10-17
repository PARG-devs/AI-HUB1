import React, { useState } from "react";
import { Route, Routes,useNavigate} from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Suggestion from "./Suggestion";
import Contact from "./Contact";
import Interface from "./Interface";

function App() {
  const navigate=useNavigate()
  const [search,setsearch]=useState('')
  const [search2,setsearch2]=useState('')
  const [switchToggle,setswitchToggle]=useState(true)
  return (
    <div className="App">
      {switchToggle ? ( 
                        <Routes>
                          <Route path='/' element={<Home search={search} setsearch={setsearch} search2={search2} setsearch2={setsearch2} />}>
                                <Route path='about' element={<About navigate={navigate}/>} />
                                <Route path='suggestions' element={<Suggestion navigate={navigate}/>} />
                                <Route path='contact' element={<Contact navigate={navigate}/>} />
                          </Route>
                        </Routes>
                      ) : (<Interface 
                              setSwitchtoggel={setswitchToggle}
                          />)}
      
    </div>
  );
}

export default App;
