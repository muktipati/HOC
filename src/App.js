import './App.css';
import React from "react";
import Withuser from "./HOC/withuser";
import ListUser from './component/listuser';
import Tableuser from './component/usertable/table';

function App() {
 const Listuserdata = Withuser(ListUser);
 const Tableuserdata = Withuser(Tableuser)
  return (
   <>
   <h3>Root Component</h3>
   <Listuserdata />
   <Tableuserdata />
   </>
  );
}

export default App;
