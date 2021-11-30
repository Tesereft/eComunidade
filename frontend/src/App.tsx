import React from 'react';
import './App.css';
import Woman1 from './aseets/woman1.png'
import Form from "./components/Form";

function App() {
  return (
      <>
      <div className={"grid"}>
        <div className={"sd"}>
        </div>
        <div className={"content"}>
            <Form/>
        </div>
          <img src={Woman1} className={"mid-grid-image"}/>
      </div>
      </>
  );
}

export default App;
