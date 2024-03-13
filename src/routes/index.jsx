import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

import Error from "../pages/error";
import InsertUser from '../pages/insertUser';
import InsertClass from '../pages/insertClass';
import Finish from '../pages/finish';

  export const Router = () => {
    return(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Navigate to="/404" replace/>}/>
          <Route path="/404" element={<Error />}/>
          <Route path="/" element={<InsertUser />}/>
          <Route path="/insert-class" element={<InsertClass />}/>
          <Route path="/finish" element={<Finish/>}/>

        </Routes>
      </BrowserRouter>
    )
  }


  export default Router