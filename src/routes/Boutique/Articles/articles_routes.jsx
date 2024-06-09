import { Route } from "react-router-dom";

import AddArticlesPage from "../../../pages/Boutique/Articles/AddArticlesPage";
import EditArticlePage from "../../../pages/Boutique/Articles/EditArticlePage";
import ListeArticlesPage from "../../../pages/Boutique/Articles/ListeArticlesPage";

export const articles_routes_items = {
    articles: {
        path: "article",
        name: "Articles",
        component: ListeArticlesPage
    },
    add_articles: {
        path: "article/add",
        name: "Nouveau article",
        component: AddArticlesPage
    },
    edit_articles: {
        path: "article/edit/:ID_ARTICLE",
        name: "Modifier article",
        component: EditArticlePage
    }
}

var article_routes = []

for (let key in articles_routes_items) {
    const route = articles_routes_items[key]
    article_routes.push(<Route path={route.path} Component={route.component} key={route.path} />)
}

export default article_routes