<template>
  <div class="py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Page Header -->
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          {{ t('servicesPage.title') }}
        </h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          {{ t('servicesPage.subtitle') }}
        </p>
        
        <!-- Location Selector Cards -->
        <div class="mb-8">
          <div class="text-center mb-6">
            <h3 class="text-2xl font-bold text-gray-900 mb-2">
              {{ t('servicesPage.selectLocation') }}
            </h3>
          </div>
          <div class="flex flex-row gap-3 justify-center max-w-2xl mx-auto">
            <div v-for="locationKey in availableLocations" :key="locationKey" class="flex-1 min-w-0">
              <LocationCard 
                :locationKey="locationKey"
                :selectedLocation="selectedLocation"
                @select="selectLocation"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Location-specific Services -->
      <div class="mb-16">
        <!-- Location Details Card -->
        <LocationDetailsCard :locationKey="selectedLocation" />

        <!-- Munich Laim Services with Categories -->
        <div v-if="selectedLocation === 'laim'">
          <!-- Disclaimer for Laim location -->
          <div class="mb-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <div class="text-center">
              <h4 class="text-lg font-semibold text-yellow-800 mb-3">Wichtige Hinweise</h4>
              <div class="text-sm text-yellow-700 whitespace-pre-line">
                {{ currentLocationServices.disclaimer || 'Alle Massagen auch als Gutscheine erhältlich.\nGutscheine sind vom Umtausch ausgeschlossen.\nAlle Preise für Massagen sind inklusive Mehrwertsteuer.\n\nStand Oktober 2024' }}
              </div>
            </div>
          </div>
          
          <!-- Special Offers Grid -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <!-- Koh Samui Special Offer -->
            <div class="bg-gradient-to-r from-orange-400 to-red-500 rounded-xl shadow-lg p-6 text-white">
              <div class="text-center mb-6">
                <h3 class="text-2xl font-bold">
                  {{ currentLocationServices.serviceCategories.kohsamui?.title || 'KOH SAMUI MASSAGEN' }}
                </h3>
              </div>
              
              <!-- Koh Samui Special Service -->
              <div class="bg-white bg-opacity-20 rounded-lg p-4">
                <div class="mb-3">
                  <ul class="text-orange-100 text-sm mb-3 space-y-1">
                    <li class="flex items-center">
                      <span class="w-2 h-2 bg-yellow-300 rounded-full mr-2 flex-shrink-0"></span>
                      Ganzkörper Öl Massage
                    </li>
                    <li class="flex items-center">
                      <span class="w-2 h-2 bg-yellow-300 rounded-full mr-2 flex-shrink-0"></span>
                      Kräuterstempel
                    </li>
                    <li class="flex items-center">
                      <span class="w-2 h-2 bg-yellow-300 rounded-full mr-2 flex-shrink-0"></span>
                      Kopf-Gesichts Massage
                    </li>
                  </ul>
                </div>
                <!-- Duration and Price -->
                <div class="flex items-center gap-4 justify-end">
                  <span class="text-orange-100">{{ currentLocationServices.serviceCategories.kohsamui?.services.kohSamuiSpecial?.durations[0]?.duration || '90 Min' }}</span>
                  <span class="text-2xl font-bold text-yellow-300">{{ currentLocationServices.serviceCategories.kohsamui?.services.kohSamuiSpecial?.durations[0]?.price || '80€' }}</span>
                </div>
              </div>
            </div>
            
            <!-- Thai Balance + Hotstone Special Offer -->
            <div class="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl shadow-lg p-6 text-white">
              <div class="text-center mb-6">
                <h3 class="text-2xl font-bold">
                  {{ currentLocationServices.serviceCategories.thaibalance?.title || 'THAI BALANCE + HOTSTONE MASSAGEN' }}
                </h3>
              </div>
              
              <!-- Thai Balance + Hotstone Service -->
              <div class="bg-white bg-opacity-20 rounded-lg p-4">
                <div class="mb-3">
                  <ul class="text-purple-100 text-sm mb-3 space-y-1">
                    <li class="flex items-center">
                      <span class="w-2 h-2 bg-yellow-300 rounded-full mr-2 flex-shrink-0"></span>
                      Rücken und Nacken Massage
                    </li>
                    <li class="flex items-center">
                      <span class="w-2 h-2 bg-yellow-300 rounded-full mr-2 flex-shrink-0"></span>
                      HotStone
                    </li>
                  </ul>
                </div>
                <!-- Duration and Price Options -->
                <div class="space-y-2">
                  <div class="flex items-center gap-4 justify-end">
                    <span class="text-purple-100">{{ currentLocationServices.serviceCategories.thaibalance?.services.thaiBalanceHotstone?.durations[0]?.duration || '60 Min' }}</span>
                    <span class="text-2xl font-bold text-yellow-300">{{ currentLocationServices.serviceCategories.thaibalance?.services.thaiBalanceHotstone?.durations[0]?.price || '62€' }}</span>
                  </div>
                  <div class="flex items-center gap-4 justify-end">
                    <span class="text-purple-100">{{ currentLocationServices.serviceCategories.thaibalance?.services.thaiBalanceHotstone?.durations[1]?.duration || '90 Min' }}</span>
                    <span class="text-2xl font-bold text-yellow-300">{{ currentLocationServices.serviceCategories.thaibalance?.services.thaiBalanceHotstone?.durations[1]?.price || '80€' }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div 
              v-for="(category, categoryKey) in filteredRegularCategories"
              :key="categoryKey"
              class="bg-white rounded-xl shadow-lg p-6"
            >
              <!-- Category Header -->
              <div class="text-center mb-6">
                <h3 class="text-xl font-bold text-gray-900 mb-3">
                  {{ category.title }}
                </h3>
                <p class="text-sm text-gray-600">
                  {{ category.description }}
                </p>
              </div>

              <!-- Services in this category -->
              <div class="space-y-4">
                <div 
                  v-for="(service, serviceKey) in category.services" 
                  :key="serviceKey"
                  class="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors"
                >
                  <h4 class="text-lg font-semibold text-gray-900 mb-2">{{ service.name }}</h4>
                  <p class="text-sm text-gray-600 mb-3">{{ service.description }}</p>
                  
                  <!-- Duration and Price -->
                  <div class="mb-3">
                    <div class="space-y-1">
                      <div 
                        v-for="duration in service.durations" 
                        :key="duration.duration"
                        class="flex justify-between items-center text-xs"
                      >
                        <span class="text-gray-600">{{ duration.duration }}</span>
                        <span class="text-thida-gold font-semibold">{{ duration.price }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Munich Neuhausen Services with Categories -->
        <div v-else-if="selectedLocation === 'neuhausen'">
          <!-- Disclaimer for Neuhausen location -->
          <div class="mb-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <div class="text-center">
              <h4 class="text-lg font-semibold text-yellow-800 mb-3">Wichtige Hinweise</h4>
              <div class="text-sm text-yellow-700 whitespace-pre-line">
                {{ currentLocationServices.disclaimer || 'Auch als Gutscheine erhältlich.\nGutscheine sind vom Umtausch ausgeschlossen.\nAlle Preise inklusive Mehrwertsteuer\nStand September 2025' }}
              </div>
            </div>
          </div>
          
          <!-- Wärme-Kräuterstempel Special Offer -->
          <div class="mb-8">
            <div class="bg-gradient-to-r from-green-400 to-teal-500 rounded-xl shadow-lg p-6 text-white">
              <div class="text-center mb-6">
                <h3 class="text-2xl font-bold">
                  {{ currentLocationServices.serviceCategories.waerme?.title || 'WÄRME-KRÄUTERSTEMPEL' }}
                </h3>
              </div>
              
              <!-- Wärme-Kräuterstempel Service -->
              <div class="bg-white bg-opacity-20 rounded-lg p-4">
                <div class="mb-3">
                  <ul class="text-green-100 text-sm mb-3 space-y-1">
                    <li class="flex items-center">
                      <span class="w-2 h-2 bg-yellow-300 rounded-full mr-2 flex-shrink-0"></span>
                      Alle Massagen zusätzlich mit Wärme-Kräuterstempel möglich
                    </li>
                  </ul>
                </div>
                <!-- Duration and Price -->
                <div class="flex items-center gap-4 justify-end">
                  <span class="text-green-100">{{ currentLocationServices.serviceCategories.waerme?.services.waermeKraeuterstempel?.durations[0]?.duration || 'Aufpreis' }}</span>
                  <span class="text-2xl font-bold text-yellow-300">{{ currentLocationServices.serviceCategories.waerme?.services.waermeKraeuterstempel?.durations[0]?.price || '10,00 €' }}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div 
              v-for="(category, categoryKey) in filteredRegularCategories"
              :key="categoryKey"
              class="bg-white rounded-xl shadow-lg p-6"
            >
              <!-- Category Header -->
              <div class="text-center mb-6">
                <h3 class="text-xl font-bold text-gray-900 mb-3">
                  {{ category.title }}
                </h3>
                <p class="text-sm text-gray-600">
                  {{ category.description }}
                </p>
              </div>

              <!-- Services in this category -->
              <div class="space-y-4">
                <div 
                  v-for="(service, serviceKey) in category.services" 
                  :key="serviceKey"
                  class="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors"
                >
                  <h4 class="text-lg font-semibold text-gray-900 mb-2">{{ service.name }}</h4>
                  <p class="text-sm text-gray-600 mb-3">{{ service.description }}</p>
                  
                  <!-- Duration and Price -->
                  <div class="mb-3">
                    <div class="space-y-1">
                      <div 
                        v-for="duration in service.durations" 
                        :key="duration.duration"
                        class="flex justify-between items-center text-xs"
                      >
                        <span class="text-gray-600">{{ duration.duration }}</span>
                        <span class="text-thida-gold font-semibold">{{ duration.price }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    
    <!-- CTA Section -->
    <CTASection />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const { t } = useTranslations()

// Selected location state with persistence
const selectedLocation = ref('laim') // Default to Munich Laim

// Load saved location on mount - only on client side
onMounted(() => {
  if (import.meta.client) {
    const savedLocation = localStorage.getItem('thida-selected-location')
    if (savedLocation && ['laim', 'neuhausen'].includes(savedLocation)) {
      selectedLocation.value = savedLocation
    }
  }
})

// Available locations for the cards
const availableLocations = computed(() => {
  return ['laim', 'neuhausen'] // Munich Laim and Neuhausen
})

// Function to select a location
const selectLocation = (locationKey) => {
  selectedLocation.value = locationKey
  // Save to localStorage for persistence - only on client side
  if (import.meta.client) {
    localStorage.setItem('thida-selected-location', locationKey)
  }
}

// Computed property to get current location's services
const currentLocationServices = computed(() => {
  return t(`servicesPage.locationServices.${selectedLocation.value}`)
})

// Computed property to filter out special offer categories
const filteredRegularCategories = computed(() => {
  const categories = currentLocationServices.value?.serviceCategories || {}
  const filtered = {}
  
  Object.keys(categories).forEach(key => {
    if (key !== 'kohsamui' && key !== 'thaibalance' && key !== 'waerme') {
      filtered[key] = categories[key]
    }
  })
  
  return filtered
})

// Function to map service keys to their images
const getServiceImage = (serviceKey) => {
  const imageMap = {
    // Munich Laim services - Teilkörper (Partial Body)
    handNeckHead: '/images/facial-treatment.jpg', // Head/neck focus - facial treatment image
    backShoulderHead: '/images/hot-stone.jpg', // Back/shoulder - hot stone for muscle relief
    footReflexology: '/images/reflexology.jpg', // Perfect match - foot reflexology
    legMassage: '/images/aromatherapy.jpg', // Leg massage - aromatherapy for revitalization
    
    // Munich Laim services - Ganzkörper (Full Body)
    wellnessOil: '/images/aromatherapy.jpg', // Oil massage - aromatherapy oils
    asiaMix: '/images/wellness-package.jpg', // Mix of techniques - wellness package
    traditionalThai: '/images/thai-massage.jpg', // Perfect match - traditional Thai
    herbalStamp: '/images/body-scrub.jpg', // Herbal stamps - body treatment
    sportThai: '/images/hot-stone.jpg', // Sport massage - therapeutic hot stone
    
    // Munich Laim services - Royal (Premium)
    royalRelax: '/images/wellness-package.jpg', // Premium revitalization - wellness package
    royalThai: '/images/about-spa.jpg', // Premium Thai - spa environment
    royalHotstone: '/images/hot-stone.jpg', // Perfect match - hot stone therapy
    royalCoconut: '/images/aromatherapy.jpg', // Coconut oil treatment - aromatherapy oils
    
    // Munich Laim services - Koh Samui (Special Offers)
    kohSamuiSpecial: '/images/wellness-package.jpg', // Special package - wellness package
    
    // Munich Neuhausen services (traditional Thai spa)
    traditionalThaiMassage: '/images/thai-massage.jpg', // Perfect match - traditional Thai
    thaiSportMassage: '/images/hot-stone.jpg', // Sport massage - therapeutic approach
    wellnessOilMassage: '/images/aromatherapy.jpg', // Oil massage - aromatherapy
    hotstoneMassage: '/images/hot-stone.jpg', // Perfect match - hot stone
    backMassage: '/images/wellness-package.jpg', // Back massage - wellness focus
    footReflexologyMassage: '/images/reflexology.jpg', // Perfect match - reflexology
    legMassage: '/images/body-scrub.jpg', // Leg massage - body treatment
    headFacialMassage: '/images/facial-treatment.jpg' // Perfect match - facial treatment
  }
  
  return imageMap[serviceKey] || null
}

useHead({
  title: 'Services - Thida Royal Thai Massage',
  meta: [
    { name: 'description', content: 'Explore our comprehensive range of wellness services including traditional Thai massage, aromatherapy, hot stone therapy, and traditional spa treatments.' },
    { property: 'og:title', content: 'Services - Thida Royal Thai Massage' },
    { property: 'og:description', content: 'Explore our comprehensive range of wellness services including traditional Thai massage, aromatherapy, hot stone therapy, and traditional spa treatments.' },
    { property: 'og:url', content: 'https://thida-royal-thaimassage.de/services' },
    { name: 'twitter:title', content: 'Services - Thida Royal Thai Massage' },
    { name: 'twitter:description', content: 'Explore our comprehensive range of wellness services including traditional Thai massage, aromatherapy, hot stone therapy, and traditional spa treatments.' }
  ],
  link: [
    { rel: 'canonical', href: 'https://thida-royal-thaimassage.de/services' }
  ]
})
</script>