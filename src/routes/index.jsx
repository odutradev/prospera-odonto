import { BrowserRouter, Routes, Route, Navigate, Outlet} from "react-router-dom";

import CreateService from "../pages/createService";
import CreateSpace from "../pages/createSpace";
import Dashboard from "../pages/dashboard";
import Services from "../pages/services";
import Profile from "../pages/profile";
import SignIn from "../pages/signin";
import Spaces from "../pages/spaces";
import SignUp from "../pages/signup";
import Logout from "../pages/logout";
import Error from "../pages/error";
import Space from "../pages/space";

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
            <Route exact path="/dashboard/service/create" element={<CreateService/>}/>
            <Route exact path="/dashboard/space/create" element={<CreateSpace/>}/>
            <Route path="/dashboard/profile" element={<Profile />}/>
            <Route path="/dashboard/space/:id" element={<Space/>}/>
            <Route path="/dashboard/spaces" element={<Spaces />}/>
            <Route path="/dashboard/services" element={<Services />}/>
            <Route path="/dashboard" element={<Dashboard />}/>
          </Route>

        </Routes>
      </BrowserRouter>
    )
  }


  export default Router