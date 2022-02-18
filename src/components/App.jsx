import React from "react";
import Entry from "./Entry";
import idea from "../idea";
import bg from "./video/bg.mp4";


function createEntry(ideaTerm){

  return <Entry
    key={ideaTerm.id}
    symbol={ideaTerm.symbol}
    name={ideaTerm.name}
    description={ideaTerm.meaning}
  />
//Data is extracted from Idea.js
//Structured in Entry.jsx
//Assigned in App.js-->createEntry()
//Looped through App()---->{idea.map(createEntry)} for the required data and where .map(createEntry) retrieves the data to be looped
//sent from App()--->Index.js and presented.

}

function App() {
  return (
    <div>
    <video
    autoPlay loop muted
    style={{
      position: "absolute",
      width: "100%",
      left: "50%",
      top: "50%",
      height: "100%",
      objectFit: "cover",
      transform: "translate(-50%, -50%)",
      zIndex: "-1"

    }}
    >
     <source src={bg} type="video/mp4"/>
    </video>
      <h1>
        <span>An idea</span>
      </h1>

      <dl className="dictionary">  
      {/* Dictionary List {dl} */}
     {idea.map(createEntry)}
      
        
     
      </dl>
    </div>
  );
}

export default App;
