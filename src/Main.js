import React, { useState } from 'react'
import Header from './Componts/Header'
import Footer from './Componts/Footer'
import TextForm from './Componts/TextForm'
import About from './Componts/About'
import Alert from './Componts/Alert'
import { BrowserRouter, Routes, Route } from "react-router-dom";
function Main() {
    // const alert=("anil the boss")
    const [AlertText, setAlertText] = useState(null);
    const ShowAlertText = (massage, type) => {
        setAlertText({
            msg: massage,
            type: type
        })
        setTimeout(() => {
            setAlertText(null)
        }, 1000);
    }
    const heading = ("This is Text APP")
    const [mode, setMode] = useState('light')
    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark')
            document.body.style.backgroundColor = 'black'
            // ShowAlertText("Dark mode has been enable", "success")
        }
        else {
            setMode('light')
            document.body.style.backgroundColor = 'white'
            // ShowAlertText("Light mode has been enable", "success")
        }
    }
    return (
        <>
            <BrowserRouter>
                <Header Mode={mode} toggleMode={toggleMode} />
                <Alert Alertm={AlertText} />
                <Routes>

                    <Route exact path="/" element={<TextForm Heading={heading} Mode={mode} Alertm={ShowAlertText} />}> </Route>

                    <Route axact path="/about" element={<About Mode={mode} />} />

                </Routes>
                <Footer Mode={mode} />
            </BrowserRouter>
        </>
    )
}
export default Main