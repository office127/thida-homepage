<template>
  <section class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <!-- Content -->
        <div>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {{ t('about.whyChoose') }}
          </h2>
          <p class="text-lg text-gray-600 mb-8">
            {{ t('about.subtitle') }}
          </p>
          
          <!-- Features -->
          <div class="space-y-6">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <div class="w-8 h-8 bg-thida-cream rounded-full flex items-center justify-center">
                  <svg class="w-5 h-5 text-thida-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ t('about.certifiedTherapists') }}</h3>
                <p class="text-gray-600">
                  {{ t('about.certifiedTherapistsDesc') }}
                </p>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <div class="w-8 h-8 bg-thida-cream rounded-full flex items-center justify-center">
                  <svg class="w-5 h-5 text-thida-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ t('about.premiumProducts') }}</h3>
                <p class="text-gray-600">
                  {{ t('about.premiumProductsDesc') }}
                </p>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <div class="w-8 h-8 bg-thida-cream rounded-full flex items-center justify-center">
                  <svg class="w-5 h-5 text-thida-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ t('about.sereneEnvironment') }}</h3>
                <p class="text-gray-600">
                  {{ t('about.sereneEnvironmentDesc') }}
                </p>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <div class="w-8 h-8 bg-thida-cream rounded-full flex items-center justify-center">
                  <svg class="w-5 h-5 text-thida-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ t('about.personalizedCare') }}</h3>
                <p class="text-gray-600">
                  {{ t('about.personalizedCareDesc') }}
                </p>
              </div>
            </div>
          </div>
          
          <div class="mt-8 flex flex-col sm:flex-row gap-4">
            <NuxtLink 
              to="/about" 
              class="inline-flex items-center text-thida-gold hover:text-thida-orange font-semibold"
            >
              {{ t('about.learnMore') }}
              <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </NuxtLink>
            <NuxtLink 
              to="/services" 
              class="inline-flex items-center text-thida-gold hover:text-thida-orange font-semibold"
            >
              {{ t('about.viewServices') }}
              <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </NuxtLink>
          </div>
        </div>
        
        <!-- Image Column -->
        <div class="space-y-8">
          <!-- Google Reviews Card -->
          <a 
            href="https://www.google.com/maps/search/?api=1&query=Thida+Royal+Thai+Massage+München" 
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-100"
          >
            <!-- Google Icon -->
            <div class="flex-shrink-0">
              <svg class="w-12 h-12" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            </div>
            
            <!-- Rating Info -->
            <div class="flex-1 text-left">
              <div class="flex items-center gap-2 mb-2">
                <span class="text-2xl font-bold text-gray-900">4.7</span>
                <div class="flex text-yellow-400">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
              </div>
              <p class="text-xs text-thida-gold font-medium">{{ t('nav.contact') === 'Contact' ? 'View our Google Reviews' : 'Unsere Google Bewertungen ansehen' }} →</p>
            </div>
          </a>
          
          <!-- Image -->
          <div class="relative">
          <img 
            src="/images/about-spa.jpg" 
            alt="Thida Royal Therapist" 
            class="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-xl"
          />
          <!-- Floating stats -->
          <div class="absolute -bottom-6 -left-6 bg-thida-gold rounded-lg shadow-lg p-6">
            <div class="text-center">
              <div class="text-2xl font-bold text-white mb-1">10+</div>
              <div class="text-sm text-gray-200">{{ t('hero.yearsExperience') }}</div>
            </div>
          </div>
          <div class="absolute -top-6 -right-6 bg-thida-gold rounded-lg shadow-lg p-6">
            <div class="text-center">
              <div class="text-2xl font-bold text-white mb-1">5000+</div>
              <div class="text-sm text-gray-200">{{ t('hero.happyClients') }}</div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { t } = useTranslations()
</script>
