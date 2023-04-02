import { useState } from 'react';
import './App.css';
import {motion} from "framer-motion";
import {StepperContext} from "./contexts/StepperContext";
import FormStepper from './Components/FormStepper';
import Navbar from './Components/Navbar';
import Modal from './Components/JoinTalkPopup';
import StepperControl from './Components/StepperControl';
import FinalForm from './Components/Steps/FinalForm';
import Form1 from './Components/Steps/Form1';
import Form2 from './Components/Steps/Form2';
import Form3 from './Components/Steps/Form3';
import Form4 from './Components/Steps/Form4';
import Form5 from './Components/Steps/Form5';
import Form6 from './Components/Steps/Form6';
import Form7 from './Components/Steps/Form7';
import Form8 from './Components/Steps/Form8';
import Form9 from './Components/Steps/Form9';
import Form10 from './Components/Steps/Form10';



function App() {

  const [currStep, setStep] = useState(1);
  const [userData, setUserData] = useState({"XP":[]});
  const [finalData, setFinalData] = useState([]);
  const [showModal, setShowModel] = useState(false);
  const handleOnClose = () => setShowModel(false);


  return (
    <div className="App">
      <Navbar></Navbar>
      <div className='main'>
        <div className='container'>
          <br></br>
          <button onClick={() => setShowModel(true)} className="bg-red-400 text-white px-3 py-2 rounded text-xl">
              Join Talk
          </button>
          {/* STEPPER */}

          {/* DISPLAY FORMS */}
          <Modal oncClose={handleOnClose} isvisible={showModal} />


          
          {/* Navigation Control */}
        </div>
      </div>
      
    </div>
  );
}

export default App;

