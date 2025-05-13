import CreateMembership from "../pages/CreateMembership/CreateMembership";
import CreateUser from "../pages/CreateUser/CreateUser";
import Main from "../pages/Main/Main";
import Users from "../pages/Users/Users";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Profile from "../pages/Profile/Profile";
import Admin from "../pages/Admin/Admin";
import CheckoutPage from "../pages/Chekout/Chekout";

export const MAIN_ROUTE = "/";
export const LOGIN_ROUTE = "/login";
export const REGISTER_ROUTE = "/register";
export const PROFILE_ROUTE = "/profile";
export const USERS_ROUTE = "/users";
export const CREATE_USER__ROUTE = "/createuser";
export const CREATE_MEMBERSHIP__ROUTE = "/createmembership";
export const ADMIN_ROUTE = "/admin";
export const CHEKOUT_ROUTE = "/chekout";


export const adminRoutes = {
    routes: [
        {   
            path: ADMIN_ROUTE,
            Component: Admin,

        },
        {
            path: USERS_ROUTE,
            Component: Users,
        },
        {
            path: CREATE_USER__ROUTE,
            Component: CreateUser,
        },
        {
            path: CREATE_MEMBERSHIP__ROUTE,
            Component: CreateMembership,
        },
    ]
}

export const clientRoutes ={
    routes: [
        {
            path: MAIN_ROUTE,
            Component: Main,
        },
        {
            path: LOGIN_ROUTE,
            Component: Login,
        },
        {
            path: REGISTER_ROUTE,
            Component: Register,
        },
        {
            path: PROFILE_ROUTE,
            Component: Profile,
        },
        {
            path: CHEKOUT_ROUTE,
            Component: CheckoutPage,
        },
    ],
};