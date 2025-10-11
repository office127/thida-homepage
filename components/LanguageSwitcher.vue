<template>
  <div class="relative language-switcher-container">
    <button 
      @click="isOpen = !isOpen"
      class="flex items-center space-x-2 text-gray-700 hover:text-thida-gold transition-colors"
      :title="safeT('languageSwitcher.selectLanguage')"
    >
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
      <span class="text-sm font-medium">{{ currentLanguage.toUpperCase() }}</span>
      <svg class="w-4 h-4 transition-transform" :class="{ 'rotate-180': isOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    
    <!-- Dropdown Menu -->
    <div 
      v-if="isOpen" 
      class="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 z-50"
    >
      <div class="py-1">
        <div class="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-100">
          {{ safeT('languageSwitcher.selectLanguage') }}
        </div>
        <button 
          @click="switchLanguage('en'); isOpen = false"
          class="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
          :class="{ 'bg-thida-cream text-thida-gold': currentLanguage === 'en' }"
        >
          <span class="mr-3 text-lg">🇺🇸</span>
          <div class="flex flex-col items-start">
            <span class="font-medium">{{ safeT('languageSwitcher.english') }}</span>
            <span class="text-xs text-gray-500">English</span>
          </div>
        </button>
        <button 
          @click="switchLanguage('de'); isOpen = false"
          class="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
          :class="{ 'bg-thida-cream text-thida-gold': currentLanguage === 'de' }"
        >
          <span class="mr-3 text-lg">🇩🇪</span>
          <div class="flex flex-col items-start">
            <span class="font-medium">{{ safeT('languageSwitcher.german') }}</span>
            <span class="text-xs text-gray-500">Deutsch</span>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const { currentLanguage, switchLanguage, t } = useTranslations()
const isOpen = ref(false)

// Fallback function in case t is not available
const safeT = (key) => {
  try {
    return t ? t(key) : key
  } catch (error) {
    return key
  }
}

// Close dropdown when clicking outside
onMounted(() => {
  const handleClickOutside = (event) => {
    const dropdown = event.target.closest('.language-switcher-container')
    if (!dropdown) {
      isOpen.value = false
    }
  }
  
  // Only add event listeners on client side
  if (import.meta.client) {
    document.addEventListener('click', handleClickOutside)
    
    onUnmounted(() => {
      document.removeEventListener('click', handleClickOutside)
    })
  }
})
</script>
