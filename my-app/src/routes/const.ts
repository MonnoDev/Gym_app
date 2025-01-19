import CreateMembership from "../pages/CreateMembership/CreateMembership";
import CreateUser from "../pages/CreateUser/CreateUser";
import Main from "../pages/Main/Main";
import Users from "../pages/Users/Users";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

export const MAIN_ROUTE = "/";
export const LOGIN_ROUTE = "/login";
export const REGISTER_ROUTE = "/register";
export const USERS_ROUTE = "/users";
export const CREATE_USER__ROUTE = "/createuser";
export const CREATE_MEMBERSHIP__ROUTE = "/createmembership";

export const adminRoutes ={
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
    ],
};