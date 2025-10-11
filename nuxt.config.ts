// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: { enabled: false },
  devServer: {
    port: 3000
  },
  ssr: true,
  // Optimize resource loading to prevent preload warnings
  experimental: {
    payloadExtraction: false,
    inlineSSRStyles: false
  },
  // Disable unnecessary preloading in development
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: undefined
        }
      }
    }
  },
  nitro: {
    preset: 'static',
    prerender: {
      crawlLinks: true,
      routes: ['/', '/about', '/services', '/contact', '/impressum']
    }
  },
  modules: ['@nuxtjs/tailwindcss'],
  sitemap: {
    hostname: 'https://thida-royal-thaimassage.de',
    gzip: true,
    routes: [
      '/',
      '/about',
      '/services',
      '/contact',
      '/impressum'
    ]
  },
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://thida-royal-thaimassage.de'
    }
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: 'Thida Royal - Traditional Thai Massage Experience',
      titleTemplate: '%s | Thida Royal Thai Massage',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'robots', content: 'index, follow' },
        { name: 'author', content: 'Thida Royal Thai Massage' },
        { name: 'keywords', content: 'Thai massage, traditional massage, wellness, spa, München, Laim, Neuhausen, aromatherapy, hot stone therapy, relaxation, stress relief, therapeutic massage' },
        { name: 'description', content: 'Experience authentic traditional Thai massage at Thida Royal. Professional wellness treatments in München Laim and Neuhausen. Book your appointment today for ultimate relaxation and healing.' },
        { name: 'theme-color', content: '#8B4513' },
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Thida Royal Thai Massage' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:image', content: '/images/hero-spa.jpg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'Thida Royal Thai Massage Interior' },
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: '/images/hero-spa.jpg' },
        { name: 'twitter:image:alt', content: 'Thida Royal Thai Massage Interior' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/logo.png' },
        { rel: 'shortcut icon', href: '/logo.png' },
        { rel: 'apple-touch-icon', href: '/logo.png' },
        { rel: 'apple-touch-icon-precomposed', href: '/logo.png' },
        { rel: 'canonical', href: 'https://thida-royal-thaimassage.de' }
      ]
    }
  }
})
