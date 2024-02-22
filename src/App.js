import './App.scss';

//css file for tostify
import 'react-toastify/dist/ReactToastify.css';
//bootstrap js file
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"

import { ToastContainer } from "react-toastify"
import HandlePath from './pages/Routes';
import AuthContextProvider from './contexts/AuthContext';
import { useEffect, useState } from 'react';
import { Hourglass } from 'react-loader-spinner';

function App() {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000);

  }, [])

  return (
    <>
      {isLoading
        ? <div style={{ minHeight: "100vh", }} className="d-flex justify-content-center align-items-center" >
          <Hourglass
            visible={true}
            height="80"
            width="80"
            ariaLabel="hourglass-loading"
            wrapperStyle={{}}
            wrapperClass=""
            colors={['#306cce', '#72a1ed']}
          />
        </div >
        : <>
          <AuthContextProvider>
            <HandlePath />
          </AuthContextProvider>

          <ToastContainer />
        </>
      }
    </>
  );

}
export default App;
