<template>
  <div class="relative location-selector-container">
    <button 
      @click="isOpen = !isOpen"
      class="flex items-center space-x-2 text-gray-700 hover:text-thida-gold transition-colors px-4 py-3 rounded-lg border border-gray-300 bg-white hover:border-thida-gold focus:outline-none focus:ring-2 focus:ring-thida-gold focus:border-thida-gold"
      :title="t('contactPage.selectLocation')"
      :aria-expanded="isOpen"
      aria-haspopup="true"
    >
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
      <span class="text-sm font-medium">{{ selectedLocationName }}</span>
      <svg class="w-4 h-4 transition-transform" :class="{ 'rotate-180': isOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    
    <!-- Dropdown Menu -->
    <Transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div 
        v-if="isOpen" 
        class="absolute left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50"
      >
      <div class="py-1">
        <div class="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-100">
          {{ t('contactPage.selectLocation') }}
        </div>
        
        <button 
          v-for="(location, key) in locations" 
          :key="key"
          @click="selectLocation(key)"
          class="flex items-start w-full px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
          :class="{ 'bg-thida-cream text-thida-gold': selectedLocation === key }"
        >
          <div class="flex-shrink-0 mr-3">
            <div class="w-8 h-8 bg-thida-cream rounded-full flex items-center justify-center">
              <svg class="w-4 h-4 text-thida-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
          </div>
          <div class="flex-1 text-left">
            <div class="font-medium">{{ location.name }}</div>
            <div class="text-xs text-gray-500 mt-1" v-html="location.address"></div>
            <div class="text-xs text-gray-500">{{ location.phone }}</div>
          </div>
        </button>
      </div>
    </div>
    </Transition>
  </div>
</template>

<script setup>
const { t } = useTranslations()

const props = defineProps({
  modelValue: {
    type: String,
    default: 'laim'
  }
})

const emit = defineEmits(['update:modelValue'])

const isOpen = ref(false)
const selectedLocation = ref(props.modelValue)

const locations = computed(() => t('locations'))

const selectedLocationName = computed(() => {
  return locations.value[selectedLocation.value]?.name || 'Select Location'
})

const selectLocation = (locationKey) => {
  selectedLocation.value = locationKey
  emit('update:modelValue', locationKey)
  isOpen.value = false
}

// Close dropdown when clicking outside
onMounted(() => {
  const handleClickOutside = (event) => {
    const dropdown = event.target.closest('.location-selector-container')
    if (!dropdown) {
      isOpen.value = false
    }
  }
  
  const handleEscape = (event) => {
    if (event.key === 'Escape') {
      isOpen.value = false
    }
  }
  
  // Only add event listeners on client side
  if (import.meta.client) {
    document.addEventListener('click', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    
    onUnmounted(() => {
      document.removeEventListener('click', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    })
  }
})

// Watch for prop changes
watch(() => props.modelValue, (newValue) => {
  selectedLocation.value = newValue
})
</script>
