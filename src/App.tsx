import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Menu/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useCheckToken } from "./customHooks/useCheckToken";
import ProtectedRouteBeforeLogin from "./components/ProtectedRouteBeforeLogin";
import Spinner from "./components/Spinner";
import Homepage from "./pages/Homepage";

function App() {
  const [checkingToken, setCheckingToken] = useState<boolean>(true);
  
  // Custom hook to check if token is valid
  useCheckToken(setCheckingToken);

  return (
    <BrowserRouter>
      <Navbar checkingToken={checkingToken}>
        <Routes>
          {checkingToken ? (
            <Route path="/" element={<Spinner/>} />
          ) : (
            <>
              <Route path="/" element={<Homepage />} />
              <Route path="/login" element={<ProtectedRouteBeforeLogin checkingToken={checkingToken}><Login /></ProtectedRouteBeforeLogin>} />
              <Route path="/register" element={<ProtectedRouteBeforeLogin checkingToken={checkingToken}><Register /></ProtectedRouteBeforeLogin>} />
            </>
          )}
        </Routes>
      </Navbar>
    </BrowserRouter>
  );
}

export default App;
