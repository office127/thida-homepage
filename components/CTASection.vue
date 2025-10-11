<template>
  <section class="py-20 gradient-maroon">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
        {{ t('cta.title') }}
      </h2>
      <p class="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
        {{ t('cta.subtitle') }}
      </p>
      
      <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12">
        <NuxtLink 
          to="/contact" 
          class="btn-primary"
        >
          {{ t('cta.bookSession') }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
const { t } = useTranslations()
</script>
