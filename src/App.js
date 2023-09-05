import React from "react";
import './App.scss';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Hire from "./hire/Hire";
import Contacts from "./contacts/Contacts";
import Footer from "./footer/Footer";
import Button from "./common/components/button/Button";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Hire/>
            <Contacts/>
            <Footer/>
            <Button/>
        </div>
    );
}

export default App;
