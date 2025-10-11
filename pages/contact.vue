<template>
  <div class="py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Success Message -->
      <div v-if="submitSuccess" id="message-container" class="max-w-2xl mx-auto mb-8">
        <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
          <div class="flex items-center">
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            {{ t('contactPage.successMessage') || 'Message sent successfully! We will get back to you soon.' }}
          </div>
        </div>
      </div>

      <!-- Error Message -->
      <div v-if="submitError" id="message-container" class="max-w-2xl mx-auto mb-8">
        <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
          <div class="flex items-center">
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
            </svg>
            {{ submitError }}
          </div>
        </div>
      </div>

      <!-- Page Header -->
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          {{ t('contactPage.title') }}
        </h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          {{ t('contactPage.subtitle') }}
        </p>
      </div>



      <!-- Location Selection Cards -->
      <div class="text-center mb-12">
        <h2 class="text-xl font-bold text-gray-900 mb-4">{{ t('contactPage.selectLocation') }}</h2>
        
        <div class="flex flex-row gap-3 justify-center max-w-2xl mx-auto">
          <div v-for="locationKey in ['laim', 'neuhausen']" :key="locationKey" class="flex-1 min-w-0">
            <LocationCard 
              :locationKey="locationKey"
              :selectedLocation="selectedLocation"
              @select="selectLocation"
            />
          </div>
        </div>
      </div>

      <!-- Location Details Card -->
      <LocationDetailsCard :locationKey="selectedLocation" />

      <div class="max-w-2xl mx-auto">
        <!-- Contact Form -->
        <div>
          <h2 class="text-2xl font-bold text-gray-900 mb-6">{{ t('contactPage.sendMessage') }}</h2>
            <form 
              :action="getFormsparkEndpoint(selectedLocation)" 
              method="POST" 
              @submit="submitForm" 
              class="space-y-6"
            >
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Hidden fields for Formspark -->
              <input type="hidden" name="_redirect" :value="`${getCurrentUrl()}/contact?formspark=success`" />
              <input type="hidden" name="_error" :value="`${getCurrentUrl()}/contact?formspark=error`" />
              <input type="hidden" name="_email.from" v-model="form.email" />
              <input type="hidden" name="_email.subject" :value="`Kontaktformular für ${getLocationName(selectedLocation)}`" />
              <input type="hidden" name="location" v-model="selectedLocation" />
              <input type="hidden" name="locationAddress" :value="getLocationAddress(selectedLocation)" />
              <input type="hidden" name="language" v-model="currentLanguage" />
              
              <div>
                <label for="firstName" class="block text-sm font-medium text-gray-700 mb-2">
                  {{ t('contactPage.firstName') }} *
                </label>
                <input 
                  type="text" 
                  id="firstName" 
                  name="firstName"
                  v-model="form.firstName"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-thida-gold focus:border-thida-gold transition-colors"
                />
              </div>
              <div>
                <label for="lastName" class="block text-sm font-medium text-gray-700 mb-2">
                  {{ t('contactPage.lastName') }} *
                </label>
                <input 
                  type="text" 
                  id="lastName" 
                  name="lastName"
                  v-model="form.lastName"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-thida-gold focus:border-thida-gold transition-colors"
                />
              </div>
            </div>
            
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                {{ t('contactPage.emailAddress') }} *
              </label>
              <input 
                type="email" 
                id="email" 
                name="email"
                v-model="form.email"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-thida-gold focus:border-thida-gold transition-colors"
              />
            </div>
            
            <div>
              <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">
                {{ t('contactPage.phoneNumber') }} *
              </label>
              <input 
                type="tel" 
                id="phone" 
                name="phone"
                v-model="form.phone"
                required
                pattern="^(\+49|0)[1-9][0-9]{1,14}$"
                title="Please enter a valid German mobile number (e.g., +49 123 4567890 or 0123 4567890)"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-thida-gold focus:border-thida-gold transition-colors"
                :class="{ 'border-red-500': phoneError }"
                @blur="validatePhone"
                @input="clearPhoneError"
              />
              <p v-if="phoneError" class="mt-1 text-sm text-red-600">{{ phoneError }}</p>
            </div>
            
            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
                {{ t('contactPage.message') }} *
              </label>
              <textarea 
                id="message" 
                name="message"
                v-model="form.message"
                rows="4"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-thida-gold focus:border-thida-gold transition-colors"
                :placeholder="t('contactPage.messagePlaceholder')"
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              :disabled="isSubmitting"
              class="w-full bg-thida-gold hover:bg-thida-gold-dark text-white py-3 px-6 rounded-lg font-semibold transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <span v-if="isSubmitting" class="flex items-center justify-center">
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {{ t('contactPage.sending') || 'Sending...' }}
              </span>
              <span v-else>
                {{ t('contactPage.sendMessageBtn') || 'Send Message' }}
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
    
    
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useTranslations } from '~/composables/useTranslations'

// SEO
useHead({
  title: 'Contact Us - Thida Royal Thai Massage',
  meta: [
    { name: 'description', content: 'Contact Thida Royal Thai Massage to book your wellness appointment. Located in München Laim and München Neuhausen, Germany. Call +49 89 123 4567 or send us a message.' },
    { property: 'og:title', content: 'Contact Us - Thida Royal Thai Massage' },
    { property: 'og:description', content: 'Contact Thida Royal Thai Massage to book your wellness appointment. Located in München Laim and München Neuhausen, Germany. Call +49 89 123 4567 or send us a message.' },
    { property: 'og:url', content: 'https://thida-royal-thaimassage.de/contact' },
    { name: 'twitter:title', content: 'Contact Us - Thida Royal Thai Massage' },
    { name: 'twitter:description', content: 'Contact Thida Royal Thai Massage to book your wellness appointment. Located in München Laim and München Neuhausen, Germany. Call +49 89 123 4567 or send us a message.' }
  ],
  link: [
    { rel: 'canonical', href: 'https://thida-royal-thaimassage.de/contact' }
  ]
})

const { t, currentLanguage } = useTranslations()

const selectedLocation = ref('laim')

// Load saved location on mount - only on client side
onMounted(() => {
  if (import.meta.client) {
    const savedLocation = localStorage.getItem('thida-selected-location')
    if (savedLocation && ['laim', 'neuhausen'].includes(savedLocation)) {
      selectedLocation.value = savedLocation
    }
    
    // Check if user was redirected from Formspark success
    const urlParams = new URLSearchParams(window.location.search)
    if (urlParams.get('formspark') === 'success') {
      submitSuccess.value = true
      // Scroll to message after a short delay to ensure it's rendered
      setTimeout(() => {
        scrollToMessage()
      }, 100)
      // Hide success message after 5 seconds
      setTimeout(() => {
        submitSuccess.value = false
        // Clean up URL
        const newUrl = window.location.pathname
        window.history.replaceState({}, document.title, newUrl)
      }, 5000)
    } else if (urlParams.get('formspark') === 'error') {
      submitError.value = t('contactPage.errorMessage') || 'Failed to send message. Please try again.'
      // Scroll to message after a short delay to ensure it's rendered
      setTimeout(() => {
        scrollToMessage()
      }, 100)
      // Hide error message after 5 seconds
      setTimeout(() => {
        submitError.value = ''
        // Clean up URL
        const newUrl = window.location.pathname
        window.history.replaceState({}, document.title, newUrl)
      }, 5000)
    }
  }
})

// Function to select a location
const selectLocation = (locationKey) => {
  selectedLocation.value = locationKey
  // Save to localStorage for persistence - only on client side
  if (import.meta.client) {
    localStorage.setItem('thida-selected-location', locationKey)
  }
}

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: ''
})

const isSubmitting = ref(false)
const submitError = ref('')
const submitSuccess = ref(false)
const phoneError = ref('')

// Function to get Formspark endpoint based on location
const getFormsparkEndpoint = (locationKey) => {
  const endpoints = {
    'laim': 'https://submit-form.com/2wnTW9eKw', // Replace with actual Laim Formspark ID
    'neuhausen': 'https://submit-form.com/uyj4Ks0ZH' // Replace with actual Neuhausen Formspark ID
  }
  
  return endpoints[locationKey] || endpoints['laim'] // Default to Laim if location not found
}

// Function to get location name for email subject
const getLocationName = (locationKey) => {
  // Get location name from translations
  const locationName = t(`locations.${locationKey}.name`)
  if (!locationName) return t('locations.laim.name') // Default to Laim if location not found
  
  return `Thida Royal ${locationName}`
}

// Function to get location address
const getLocationAddress = (locationKey) => {
  // Get address from translations and strip HTML tags
  const address = t(`locations.${locationKey}.address`)
  if (!address) return t('locations.laim.address') // Default to Laim if location not found
  
  // Remove HTML tags and convert to plain text
  return address.replace(/<br\s*\/?>/gi, ', ').replace(/<[^>]*>/g, '')
}

// Function to scroll to message container
const scrollToMessage = () => {
  const messageContainer = document.getElementById('message-container')
  if (messageContainer) {
    messageContainer.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'center' 
    })
  }
}

// Function to get current URL for Formspark redirects
const getCurrentUrl = () => {
  if (import.meta.client) {
    return window.location.origin
  }
  // Fallback for SSR
  return 'https://thida-royal-thaimassage.de'
}

// Phone validation function
const validatePhone = () => {
  const phone = form.value.phone.trim()
  
  if (!phone) {
    phoneError.value = 'Phone number is required'
    return false
  }
  
  // Remove all spaces, dashes, and parentheses for validation
  const cleanPhone = phone.replace(/[\s\-\(\)]/g, '')
  
  // German mobile number patterns
  const patterns = [
    /^(\+49|0049)[1-9][0-9]{8,11}$/, // International format
    /^0[1-9][0-9]{8,11}$/, // National format
    /^[1-9][0-9]{8,11}$/ // Without country code
  ]
  
  const isValid = patterns.some(pattern => pattern.test(cleanPhone))
  
  if (!isValid) {
    phoneError.value = 'Please enter a valid German mobile number (e.g., +49 123 4567890 or 0123 4567890)'
    return false
  }
  
  phoneError.value = ''
  return true
}

// Clear phone error when user starts typing
const clearPhoneError = () => {
  if (phoneError.value) {
    phoneError.value = ''
  }
}

const submitForm = (event) => {
  // Validate phone number before submission
  if (!validatePhone()) {
    event.preventDefault()
    return false
  }
  
  // Show loading state
  isSubmitting.value = true
  
  // Clear any previous messages
  submitSuccess.value = false
  submitError.value = ''
  
  // Let the form submit naturally to Formspark
  // Formspark will handle the submission and redirect
  // The success/error messages will be shown based on the redirect URL
}
</script>