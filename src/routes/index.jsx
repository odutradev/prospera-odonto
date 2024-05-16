import { BrowserRouter, Routes, Route, Navigate, Outlet} from "react-router-dom";

import Dashboard from "../pages/dashboard";
import SignIn from "../pages/signin";
import SignUp from "../pages/signup";
import Error from "../pages/error";
import Logout from "../pages/logout";
import Profile from "../pages/profile";

  export const Router = () => {

    const PrivateRoute = () => localStorage.getItem("token") != null ? <Outlet  /> : <Navigate to="/signin" />;
    
    return(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/signin" replace/>}/>
          <Route path="*" element={<Navigate to="/404" replace/>}/>
          <Route path="/signin" element={<SignIn />}/>
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/logout" element={<Logout />}/>
          <Route path="/404" element={<Error />}/>

          <Route exact element={<PrivateRoute  />}>
            <Route path="/dashboard" element={<Dashboard />}/>
            <Route path="/dashboard/profile" element={<Profile />}/>
          </Route>

        </Routes>
      </BrowserRouter>
    )
  }


  export default Router