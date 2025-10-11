<template>
  <section class="relative bg-thida-maroon py-20 lg:py-32 thai-pattern">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Content -->
        <div>
          <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {{ t('hero.title') }}
            <span class="text-thida-gold">{{ t('hero.titleHighlight') }}</span>
            {{ t('hero.titleEnd') }}
          </h2>
          <p class="text-xl text-gray-200 mb-8 leading-relaxed">
            {{ t('hero.subtitle') }}
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <NuxtLink 
              to="/contact" 
              class="btn-primary text-lg px-8 py-4"
            >
              {{ t('hero.bookSession') }}
            </NuxtLink>
            <NuxtLink 
              to="/services" 
              class="btn-secondary text-lg px-8 py-4"
            >
              {{ t('hero.exploreServices') }}
            </NuxtLink>
          </div>
          
          <!-- Trust Indicators -->
          <div class="mt-12 grid grid-cols-3 gap-8">
            <div class="text-center">
              <div class="text-2xl font-bold text-thida-gold mb-1">10+</div>
              <div class="text-sm text-gray-200">{{ t('hero.yearsExperience') }}</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-thida-gold mb-1">5000+</div>
              <div class="text-sm text-gray-200">{{ t('hero.happyClients') }}</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-thida-gold mb-1">100%</div>
              <div class="text-sm text-gray-200">{{ t('hero.satisfaction') }}</div>
            </div>
          </div>
        </div>
        
        <!-- Image -->
        <div class="relative">
          <div class="relative z-10">
            <img 
              src="/images/hero-spa.jpg" 
              alt="Traditional Thai massage treatment room at Thida Royal with authentic Thai decor and professional massage setup" 
              class="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
              loading="eager"
              width="800"
              height="500"
            />
          </div>
          <!-- Decorative elements -->
          <div class="absolute -top-4 -right-4 w-24 h-24 bg-thida-gold rounded-full opacity-60"></div>
          <div class="absolute -bottom-6 -left-6 w-32 h-32 bg-thida-orange rounded-full opacity-40"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { t } = useTranslations()
</script>
