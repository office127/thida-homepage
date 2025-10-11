export const useSEO = () => {
  const getLanguage = () => {
    if (process.client) {
      return localStorage.getItem('language') || 'en'
    }
    return 'en'
  }

  const getCanonicalUrl = (path: string = '') => {
    const baseUrl = 'https://thida-royal-thaimassage.de'
    return `${baseUrl}${path}`
  }

  const getMetaTags = (title: string, description: string, path: string = '') => {
    const canonicalUrl = getCanonicalUrl(path)
    const currentLang = getLanguage()
    
    return {
      title,
      meta: [
        { name: 'description', content: description },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:url', content: canonicalUrl },
        { property: 'og:locale', content: currentLang === 'de' ? 'de_DE' : 'en_US' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description }
      ],
      link: [
        { rel: 'canonical', href: canonicalUrl }
      ],
      htmlAttrs: {
        lang: currentLang
      }
    }
  }

  return {
    getLanguage,
    getCanonicalUrl,
    getMetaTags
  }
}
