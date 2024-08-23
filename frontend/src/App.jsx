import { useState } from "react";
import "./App.css";
import AppRoutes from "./routes/AppRoutes.jsx";

function App() {

  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <AppRoutes/>
    </div>
  );
}

export default App;
