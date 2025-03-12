import { lazy } from "react"
import { Route } from "react-router-dom"
const utilisateursListPage = lazy(() => import("../../pages/utilisateurs/UtilisateurListPage"))
const newUtilisateurPage = lazy(() => import("../../pages/utilisateurs/NewUtilisateurPage"))
const editUtilisateurPage = lazy(() => import("../../pages/utilisateurs/EditUtilisateurPage"))

export const administration_routes_items = {
   utilisateurs: {
      path: "utilisateurs",
      name: "Utilisateurs",
      component: utilisateursListPage,
   },
   new_utilisateurs: {
      path: "utilisateurs/new",
      name: "Nouveau utilisateur",
      component: newUtilisateurPage,
   },
   edit_utilisateurs: {
      path: "utilisateurs/edit/:idUtilisateur",
      name: "Modifier l'utilisateur",
      component: editUtilisateurPage,
   },
}
var administration_routes = []
for (let key in administration_routes_items) {
   const route = administration_routes_items[key]
   administration_routes.push(<Route path={route.path} Component={route.component} key={route.path} />)
}
export default administration_routes
