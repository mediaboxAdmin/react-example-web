import { Route, Routes } from "react-router-dom"
import RootPage from "../pages/home/RootPage"
import administration_routes from "./admin/administration_routes"
import NotFound from "../components/app/NotFound"
import { Suspense } from "react"
import SlimTopLoading from "../components/app/SlimTopLoading"

export default function RoutesProvider() {
   return (
      <Suspense fallback={<SlimTopLoading />}>
         <Routes>
            <Route path="/" element={<RootPage />}></Route>
            {administration_routes}
            <Route Component={NotFound} path="*" />
         </Routes>
      </Suspense>
   )
}
