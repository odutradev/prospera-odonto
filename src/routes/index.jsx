import { BrowserRouter, Routes, Route, } from "react-router-dom";

import Error from "../pages/error";
import Main from '../pages/main';


  export const Router = () => {
    return(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="*" element={<Error />}/>
        </Routes>
      </BrowserRouter>
    )
  }


  export default Router