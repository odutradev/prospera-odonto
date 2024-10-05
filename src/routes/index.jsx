import { BrowserRouter, Routes, Route, Navigate, Outlet} from "react-router-dom";

import RequestResetPassword from "../pages/requestResetPassword";
import ResetPassword from "../pages/resetPassword";
import CreateService from "../pages/createService";
import BlockAccount from "../pages/blockAccount";
import CreateSpace from "../pages/createSpace";
import Dashboard from "../pages/dashboard";
import Services from "../pages/services";
import Profile from "../pages/profile";
import Service from "../pages/service";
import SignIn from "../pages/signin";
import Spaces from "../pages/spaces";
import SignUp from "../pages/signup";
import Logout from "../pages/logout";
import Error from "../pages/error";
import Space from "../pages/space";
import Users from "../pages/users";
import User from "../pages/user";

  export const Router = () => {

    const PrivateRoute = () => localStorage.getItem("token") != null ? <Outlet  /> : <Navigate to="/signin" />;
    
    return(
      <BrowserRouter>
        <Routes>
          <Route path="/request-reset-password" element={<RequestResetPassword />}/>
          <Route path="/reset-password/:id" element={<ResetPassword />}/>
          <Route path="/" element={<Navigate to="/signin" replace/>}/>
          <Route path="*" element={<Navigate to="/404" replace/>}/>
          <Route path="/block-account" element={<BlockAccount />}/>
          <Route path="/signin" element={<SignIn />}/>
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/logout" element={<Logout />}/>
          <Route path="/404" element={<Error />}/>

          <Route exact element={<PrivateRoute  />}>
            <Route path="/dashboard/service/create" element={<CreateService/>}/>
            <Route path="/dashboard/admin/user/:id" element={<User/>}/>
            <Route path="/dashboard/space/create" element={<CreateSpace/>}/>
            <Route path="/dashboard/service/:id" element={<Service/>}/>
            <Route path="/dashboard/admin/users" element={<Users />}/>
            <Route path="/dashboard/services" element={<Services />}/>
            <Route path="/dashboard/profile" element={<Profile />}/>
            <Route path="/dashboard/space/:id" element={<Space/>}/>
            <Route path="/dashboard/spaces" element={<Spaces />}/>
            <Route path="/dashboard" element={<Dashboard />}/>
          </Route>

        </Routes>
      </BrowserRouter>
    )
  }


  export default Router