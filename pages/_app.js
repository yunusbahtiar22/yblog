import { Context } from "../context";
import { useEffect, useState } from "react";
import "../styles/globals.css";
import "../styles/prism.css";

export default function App({ Component, pageProps }) {
  const [darkMode, toggleDarkMode] = useState(false);
  useEffect(()=> {
    document.body.classList.toggle("dark", darkMode)
  })
  return (
    <Context.Provider value={[darkMode, toggleDarkMode]}>
      <Component {...pageProps} />
    </Context.Provider>
  );
}
