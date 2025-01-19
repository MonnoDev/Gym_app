import { Routes as RouteContainer, Route } from "react-router-dom";
import { adminRoutes } from "./const";

const AppRoutes: React.FC = () => {
    const {routes} = adminRoutes
    
    return (
        <RouteContainer>
            {routes.map(({path, Component}) => (
                <Route
                key={path}
                path={path}
                element={
                        <Component/>
                }
                />
        ))}
        </RouteContainer>
    )
}

export default AppRoutes;