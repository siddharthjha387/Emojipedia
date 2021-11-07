import React from "react";
import emojipedias from "../emojipedias.js";
import Entry from "./Entry";
function createCard(emojipedia) {
  return (
    <Entry
      emoji={emojipedia.emoji}
      title={emojipedia.name}
      des={emojipedia.meaning}
    />
  );
}
function App() {
  return (
    <div>
      <h1>
        <span>Emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedias.map(createCard)};</dl>
    </div>
  );
}

export default App;
