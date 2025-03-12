import fetchApi from "../helpers/fetchApi"

export default async function removeUserDataAndCaches(user, REFRESH_TOKEN) {
   const locale = localStorage.getItem("locale")
   localStorage.clear()
   if (locale) {
      localStorage.setItem("locale", locale)
   }
   try {
      await fetchApi("/admin/auth/logout", {
         method: "DELETE",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({
            user,
            REFRESH_TOKEN,
            //     PUSH_NOTIFICATION_TOKEN: token,
         }),
      })
   } catch (error) {
      console.log(error)
   }
}
