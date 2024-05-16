import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

import Error from "../pages/error";
import SignIn from "../pages/signin"

  export const Router = () => {
    return(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Navigate to="/404" replace/>}/>
          <Route path="/404" element={<Error />}/>
          <Route path="/" element={<Navigate to="/signin" replace/>}/>
          <Route path="/signin" element={<SignIn />}/>

        </Routes>
      </BrowserRouter>
    )
  }


  export default Router