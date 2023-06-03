// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss'
    ],
    app: {
        head: {
          title: "Brand",
          link: [
            {
              rel: "icon",
              type: "image/x-icon",
              href: "/favicon.png"
            },
            {
              rel: "stylesheet",
              href: "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css",
            },
          ],
          meta: [{ name: "author", content: "Davlat Jo'rayev - jurayevcoder" }],
        },
      },
})