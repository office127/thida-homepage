<template>
  <div class="min-h-screen bg-white">
    <!-- Header -->
    <header class="bg-white shadow-sm sticky top-0 z-50">
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
              <!-- Logo -->
              <div class="flex-shrink-0">
                <NuxtLink to="/" class="flex items-center space-x-3">
                  <img 
                    src="/logo.png" 
                    alt="Thida Royal Thai Massage Logo" 
                    class="h-12 w-auto"
                  />
                  <span class="text-2xl font-bold text-thida-gold">
                    Thida Royal Thai Massage
                  </span>
                </NuxtLink>
              </div>
          
          <!-- Desktop Navigation -->
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-8">
                  <NuxtLink 
                    to="/" 
                    class="text-gray-700 hover:text-thida-gold px-3 py-2 text-sm font-medium transition-colors"
                    :class="{ 'text-thida-gold': $route.path === '/' }"
                  >
                    {{ safeT('nav.home') }}
                  </NuxtLink>
                  <NuxtLink 
                    to="/about" 
                    class="text-gray-700 hover:text-thida-gold px-3 py-2 text-sm font-medium transition-colors"
                    :class="{ 'text-thida-gold': $route.path === '/about' }"
                  >
                    {{ safeT('nav.about') }}
                  </NuxtLink>
                  <NuxtLink 
                    to="/services" 
                    class="text-gray-700 hover:text-thida-gold px-3 py-2 text-sm font-medium transition-colors"
                    :class="{ 'text-thida-gold': $route.path === '/services' }"
                  >
                    {{ safeT('nav.services') }}
                  </NuxtLink>
                  <NuxtLink 
                    to="/contact" 
                    class="text-gray-700 hover:text-thida-gold px-3 py-2 text-sm font-medium transition-colors"
                    :class="{ 'text-thida-gold': $route.path === '/contact' }"
                  >
                    {{ safeT('nav.contact') }}
                  </NuxtLink>
                  <NuxtLink 
                    to="/contact" 
                    class="btn-primary"
                  >
                    {{ safeT('nav.bookNow') }}
                  </NuxtLink>
              <LanguageSwitcher />
            </div>
          </div>
          
          <!-- Mobile menu button -->
          <div class="md:hidden">
            <button 
              @click="mobileMenuOpen = !mobileMenuOpen"
              class="text-gray-700 hover:text-thida-gold focus:outline-none focus:text-thida-gold"
            >
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        
        <!-- Mobile Navigation -->
        <div v-if="mobileMenuOpen" class="md:hidden">
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                <NuxtLink 
                  to="/" 
                  class="text-gray-700 hover:text-thida-gold block px-3 py-2 text-base font-medium"
                  @click="mobileMenuOpen = false"
                >
                  {{ safeT('nav.home') }}
                </NuxtLink>
                <NuxtLink 
                  to="/about" 
                  class="text-gray-700 hover:text-thida-gold block px-3 py-2 text-base font-medium"
                  @click="mobileMenuOpen = false"
                >
                  {{ safeT('nav.about') }}
                </NuxtLink>
                <NuxtLink 
                  to="/services" 
                  class="text-gray-700 hover:text-thida-gold block px-3 py-2 text-base font-medium"
                  @click="mobileMenuOpen = false"
                >
                  {{ safeT('nav.services') }}
                </NuxtLink>
                <NuxtLink 
                  to="/contact" 
                  class="text-gray-700 hover:text-thida-gold block px-3 py-2 text-base font-medium"
                  @click="mobileMenuOpen = false"
                >
                  {{ safeT('nav.contact') }}
                </NuxtLink>
                <NuxtLink 
                  to="/contact" 
                  class="btn-primary block px-3 py-2 text-base font-medium"
                  @click="mobileMenuOpen = false"
                >
                  {{ safeT('nav.bookNow') }}
                </NuxtLink>
            <div class="px-3 py-2">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </nav>
    </header>

    <!-- Main Content -->
    <main>
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-thida-dark text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Logo and Description -->
          <div class="md:col-span-1">
            <h3 class="text-xl font-bold text-thida-gold mb-2">Thida Royal Thai Massage</h3>
            <p class="text-sm text-gray-300 mb-4" v-html="safeT('footer.description')"></p>
          </div>
          
          <!-- Quick Links -->
          <div class="md:col-span-1">
            <h4 class="text-lg font-semibold mb-3">{{ safeT('footer.quickLinks') }}</h4>
            <div class="grid grid-cols-2 gap-2">
              <NuxtLink to="/" class="text-sm text-gray-300 hover:text-thida-gold transition-colors">{{ safeT('nav.home') }}</NuxtLink>
              <NuxtLink to="/about" class="text-sm text-gray-300 hover:text-thida-gold transition-colors">{{ safeT('nav.about') }}</NuxtLink>
              <NuxtLink to="/services" class="text-sm text-gray-300 hover:text-thida-gold transition-colors">{{ safeT('nav.services') }}</NuxtLink>
              <NuxtLink to="/contact" class="text-sm text-gray-300 hover:text-thida-gold transition-colors">{{ safeT('nav.contact') }}</NuxtLink>
              <NuxtLink to="/impressum" class="text-sm text-gray-300 hover:text-thida-gold transition-colors col-span-2">{{ safeT('impressum.title') }}</NuxtLink>
            </div>
          </div>
        </div>
        
        <div class="border-t border-gray-800 mt-6 pt-4 text-center text-gray-400">
          <p class="text-sm" v-html="safeT('footer.copyright')"></p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
const { t } = useTranslations()
const mobileMenuOpen = ref(false)

// Set favicon
useHead({
  link: [
    { rel: 'icon', type: 'image/png', href: '/logo.png' },
    { rel: 'apple-touch-icon', href: '/logo.png' }
  ]
})

// Fallback function in case t is not available
const safeT = (key) => {
  try {
    return t ? t(key) : key
  } catch (error) {
    return key
  }
}
</script>
