import React from "react";
import ContextProvider from "./context/langContext";
import Contenu from "./Components/Contenu/Contenu";
import ToggleLangs from "./Components/ToggleLangs/ToggleLangs";

function App() {
  return (
    <ContextProvider>
      <ToggleLangs />
      <Contenu />
    </ContextProvider>
  );
}

export default App;
