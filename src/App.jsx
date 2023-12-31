import Home from "./components/pages/Home/Home";
import AppPage from "./components/pages/AppPage";
import ResponsiveAppBar from "./components/pages/Home/Navbar";

import { Routes, Route, Navigate } from "react-router-dom";

import { Navbar } from "./components/pages/Home";
import { useState, useEffect } from "react";

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

function App() {
  const commands = [
    {
      command: ["Open *"],
      callback: (redirectPage) => setRedirectUrl(redirectPage),
    },
  ];
  const [redirectUrl, setRedirectUrl] = useState("");
  const pages = ["home", "app"];
  const urls = {
    home: "/",
    app: "app",
  };

  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  useEffect(() => {
    if (browserSupportsSpeechRecognition) {
      SpeechRecognition.startListening({ language: "en-US" });
    }
  }, [browserSupportsSpeechRecognition]);

  useEffect(() => {
    if (transcript) {
      setRedirectUrl(transcript);
    } else {
      setRedirectUrl("");
    }
  }, [transcript]);

  let redirect = "";

  if (redirectUrl) {
    if (pages.includes(redirectUrl)) {
      redirect = <Navigate to={urls[redirectUrl]} />;
    } else {
      redirect = <p>Could not find page: {redirectUrl}</p>;
    }
  }

  return (
    <>
      {/*Navigation */}
      <ResponsiveAppBar onStart={SpeechRecognition.startListening} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="app" element={<AppPage />} />
      </Routes>
    </>
  );
}

export default App;
