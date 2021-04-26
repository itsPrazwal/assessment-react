import {ToastContainer} from 'react-toastify';
import { BrowserRouter } from "react-router-dom";


import './App.css';
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
      <>
        <BrowserRouter>
          <ToastContainer>
            <div className="App" />
          </ToastContainer>
        </BrowserRouter>
      </>
  );
}

export default App;
