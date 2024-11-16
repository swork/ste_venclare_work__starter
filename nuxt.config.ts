// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    experimental: {
        defaults: {
            nuxtLink: {
                // "best practice" per https://nuxt.com/docs/api/components/nuxt-link#nuxtlink
                externalRelAttribute: 'noopener noreferrer',
            }
        }
    }
})
