
import {
    Route,
    Routes
} from "react-router-dom";
import RootPage from "../pages/home/RootPage";
import administration_routes from "./admin/administration_routes";
import categories_routes from "./Boutique/Categories/categories_routes";
import articles_routes from "./Boutique/Articles/articles_routes";
import main_routes from "./components/Main.routes";

export default function RoutesProvider() {
    return (
        <Routes>
            <Route path="/" element={<RootPage />}></Route>
            {administration_routes}
            {categories_routes}
            {articles_routes}
            {main_routes}
        </Routes>
    )
}