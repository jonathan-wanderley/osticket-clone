import React from "react";
import { Route, Routes } from "react-router-dom";
import { Header, Nav, Footer } from "./components";
import { Home } from "./pages";
import styles from "./App.module.css";

function App() {
  return (
    <>
    
    <div className={styles.container}>

      <Header />
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Home />} />
      </Routes>

    </div>
    <Footer />

    </>
  )
}

export default App
