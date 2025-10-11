<template>
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {{ t('services.title') }}
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          {{ t('services.subtitle') }}
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Traditional Thai Massage -->
        <div class="group cursor-pointer">
          <div class="relative overflow-hidden rounded-lg mb-4">
            <div 
              class="w-full h-48 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
              style="background-image: url('/images/thai-massage.jpg')"
              role="img"
              aria-label="Traditional Thai Massage"
            ></div>
            <div class="absolute inset-0 bg-thida-gold bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
              <span class="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn More
              </span>
            </div>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ t('services.traditionalThai') }}</h3>
          <p class="text-gray-600 mb-4">
            {{ t('services.traditionalThaiDesc') }}
          </p>
          <div class="flex justify-between items-center">
            <span class="text-thida-gold font-semibold">90 min - $120</span>
            <NuxtLink 
              to="/services" 
              class="text-thida-gold hover:text-thida-orange font-medium"
            >
              {{ t('services.bookNow') }} →
            </NuxtLink>
          </div>
        </div>

        <!-- Aromatherapy -->
        <div class="group cursor-pointer">
          <div class="relative overflow-hidden rounded-lg mb-4">
            <div 
              class="w-full h-48 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
              style="background-image: url('/images/aromatherapy.jpg')"
              role="img"
              aria-label="Aromatherapy"
            ></div>
            <div class="absolute inset-0 bg-thida-gold bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
              <span class="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn More
              </span>
            </div>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ t('services.aromatherapy') }}</h3>
          <p class="text-gray-600 mb-4">
            {{ t('services.aromatherapyDesc') }}
          </p>
          <div class="flex justify-between items-center">
            <span class="text-thida-gold font-semibold">60 min - $80</span>
            <NuxtLink 
              to="/services" 
              class="text-thida-gold hover:text-thida-orange font-medium"
            >
              {{ t('services.bookNow') }} →
            </NuxtLink>
          </div>
        </div>

        <!-- Hot Stone Therapy -->
        <div class="group cursor-pointer">
          <div class="relative overflow-hidden rounded-lg mb-4">
            <div 
              class="w-full h-48 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
              style="background-image: url('/images/hot-stone.jpg')"
              role="img"
              aria-label="Hot Stone Therapy"
            ></div>
            <div class="absolute inset-0 bg-thida-gold bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
              <span class="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn More
              </span>
            </div>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ t('services.hotStone') }}</h3>
          <p class="text-gray-600 mb-4">
            {{ t('services.hotStoneDesc') }}
          </p>
          <div class="flex justify-between items-center">
            <span class="text-thida-gold font-semibold">75 min - $100</span>
            <NuxtLink 
              to="/services" 
              class="text-thida-gold hover:text-thida-orange font-medium"
            >
              {{ t('services.bookNow') }} →
            </NuxtLink>
          </div>
        </div>

        <!-- Reflexology -->
        <div class="group cursor-pointer">
          <div class="relative overflow-hidden rounded-lg mb-4">
            <div 
              class="w-full h-48 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
              style="background-image: url('/images/reflexology.jpg')"
              role="img"
              aria-label="Reflexology"
            ></div>
            <div class="absolute inset-0 bg-thida-gold bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
              <span class="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn More
              </span>
            </div>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ t('services.reflexology') }}</h3>
          <p class="text-gray-600 mb-4">
            {{ t('services.reflexologyDesc') }}
          </p>
          <div class="flex justify-between items-center">
            <span class="text-thida-gold font-semibold">60 min - $85</span>
            <NuxtLink 
              to="/services" 
              class="text-thida-gold hover:text-thida-orange font-medium"
            >
              {{ t('services.bookNow') }} →
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center mt-12">
        <NuxtLink 
          to="/services" 
          class="btn-primary inline-flex items-center"
        >
          {{ t('services.viewAllServices') }}
          <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
const { t } = useTranslations()
</script>
