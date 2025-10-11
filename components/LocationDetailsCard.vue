<template>
  <div class="mb-8">
    <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-100 overflow-hidden">
      <!-- Header with Icon and Title -->
      <div class="flex items-center gap-3 mb-6">
        <!-- Studio Images for Both Locations -->
        <div v-if="locationKey === 'laim'" class="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 shadow-md">
          <img 
            src="/images/studio-laim-1.jpg" 
            alt="Thida Royal Thai Massage Laim"
            class="w-full h-full object-cover"
          />
        </div>
        <div v-else class="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 shadow-md">
          <img 
            src="/images/studio-neuhausen-1.jpg" 
            alt="Thida Royal Thai Massage Neuhausen"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="flex-1">
          <h2 class="text-2xl font-bold text-gray-900 mb-1">
            {{ t(`servicesPage.locationServices.${locationKey}.title`) }}
          </h2>
          <p class="text-sm text-gray-600">{{ t(`servicesPage.locationServices.${locationKey}.subtitle`) }}</p>
        </div>
      </div>
      
      <!-- Action Buttons Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        <!-- Address Button -->
        <a 
          :href="getDirectionsUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="group flex items-center gap-3 p-3 bg-gradient-to-r from-yellow-300 to-yellow-400 hover:from-yellow-400 hover:to-yellow-500 text-white rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
        >
          <div class="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div class="flex-1">
            <div class="text-xs font-medium opacity-90 whitespace-nowrap">Get Directions</div>
            <div class="text-sm font-bold whitespace-nowrap overflow-hidden text-ellipsis" v-html="t(`locations.${locationKey}.address`)"></div>
          </div>
        </a>
        
        <!-- Phone Button -->
        <a 
          :href="`tel:${t(`locations.${locationKey}.phone`)}`"
          class="group flex items-center gap-3 p-3 bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
        >
          <div class="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div class="flex-1">
            <div class="text-xs font-medium opacity-90 whitespace-nowrap">Call Now</div>
            <div class="text-sm font-bold whitespace-nowrap">{{ t(`locations.${locationKey}.phone`) }}</div>
          </div>
        </a>
        
        <!-- Email Button -->
        <a 
          :href="`mailto:${t(`locations.${locationKey}.email`)}`"
          class="group flex items-center gap-3 p-3 bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
        >
          <div class="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div class="flex-1">
            <div class="text-xs font-medium opacity-90 whitespace-nowrap">Send Email</div>
            <div class="text-sm font-bold whitespace-nowrap overflow-hidden text-ellipsis">{{ t(`locations.${locationKey}.email`) }}</div>
          </div>
        </a>
        
        <!-- Hours Button -->
        <div class="group flex items-center gap-3 p-3 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
          <div class="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
            <svg class="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
            </svg>
          </div>
          <div class="flex-1">
            <div class="text-xs font-medium text-gray-500 whitespace-nowrap">Hours</div>
            <div class="text-sm font-bold text-gray-900 whitespace-nowrap">{{ t(`locations.${locationKey}.hours`) }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useTranslations } from '~/composables/useTranslations'
import { computed } from 'vue'

const props = defineProps({
  locationKey: {
    type: String,
    required: true
  }
})

const { t } = useTranslations()

// Get directions URL based on location
const getDirectionsUrl = computed(() => {
  const addresses = {
    laim: 'Agnes-Bernauer-Str. 85, 80687 München Laim',
    neuhausen: 'Wendl-Dietrich-Straße 18, 80634 München Neuhausen'
  }
  
  const address = addresses[props.locationKey]
  if (!address) return '#'
  
  // Create Google Maps directions URL
  const encodedAddress = encodeURIComponent(address)
  return `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`
})
</script>
