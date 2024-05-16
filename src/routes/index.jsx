import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

import SignIn from "../pages/signin";
import SignUp from "../pages/signup";
import Error from "../pages/error";

  export const Router = () => {
    return(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/signin" replace/>}/>
          <Route path="*" element={<Navigate to="/404" replace/>}/>
          <Route path="/signin" element={<SignIn />}/>
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/404" element={<Error />}/>

          

        </Routes>
      </BrowserRouter>
    )
  }


  export default Router