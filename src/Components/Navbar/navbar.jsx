import React  from "react";
import {Routes , Route} from "react-router-dom"
import Homepage  from "../Home page/homepage";
import Kid from "../Kid/kid"
import Parent from '../Parent/parent';
import Teacher from '../Teacher/teacher';

function Navbar () {
    return (
      <Routes>
         <Route exact path ="/" element={<Homepage/>}/>
         <Route path ="/kid" element={<Kid/>}/>
         <Route  path ="/teacher" element={<Teacher/>}/>
         <Route  path ="/parent" element = {<Parent/>}/>
      </Routes>
    )
}

export default Navbar ;
