<template>
  <div 
    @click="emit('select', locationKey)"
    class="relative rounded-lg border-2 cursor-pointer transition-all duration-200 hover:shadow-md h-full"
    :class="selectedLocation === locationKey ? 'bg-thida-gold border-thida-gold shadow-md' : 'bg-white border-gray-200 hover:border-thida-gold'"
  >
    <div class="p-4 h-full flex items-center justify-center">
      <!-- Location Icon and Name -->
      <div class="flex items-center justify-center gap-3 text-center">
        <div 
          class="w-10 h-10 rounded-md flex items-center justify-center flex-shrink-0"
          :class="locationKey === 'laim' ? 'bg-gradient-to-br from-thida-gold to-thida-orange' : 'bg-gradient-to-br from-thida-maroon to-thida-gold'"
        >
          <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <h4 class="text-lg font-bold leading-tight" :class="selectedLocation === locationKey ? 'text-white' : 'text-gray-900'">{{ t(`locations.${locationKey}.name`) }}</h4>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useTranslations } from '~/composables/useTranslations'

const props = defineProps({
  locationKey: {
    type: String,
    required: true
  },
  selectedLocation: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['select'])

const { t } = useTranslations()
</script>
