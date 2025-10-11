<template>
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {{ t('testimonials.title') }}
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          {{ t('testimonials.subtitle') }}
        </p>
      </div>

      <!-- Testimonials Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Testimonial 1 -->
        <div class="bg-gray-50 rounded-lg p-6 relative">
          <div class="absolute -top-3 -left-3">
            <svg class="w-8 h-8 text-thida-gold" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
            </svg>
          </div>
          <p class="text-gray-700 mb-4 italic">
            "{{ t('testimonials.testimonial1') }}"
          </p>
          <div>
            <h4 class="font-semibold text-gray-900">Sarah J.</h4>
            <p class="text-sm text-gray-600">{{ t('testimonials.regularClient') }}</p>
          </div>
        </div>

        <!-- Testimonial 2 -->
        <div class="bg-gray-50 rounded-lg p-6 relative">
          <div class="absolute -top-3 -left-3">
            <svg class="w-8 h-8 text-thida-gold" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
            </svg>
          </div>
          <p class="text-gray-700 mb-4 italic">
            "{{ t('testimonials.testimonial2') }}"
          </p>
          <div>
            <h4 class="font-semibold text-gray-900">Michael C.</h4>
            <p class="text-sm text-gray-600">{{ t('testimonials.businessTraveler') }}</p>
          </div>
        </div>

        <!-- Testimonial 3 -->
        <div class="bg-gray-50 rounded-lg p-6 relative">
          <div class="absolute -top-3 -left-3">
            <svg class="w-8 h-8 text-thida-gold" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
            </svg>
          </div>
          <p class="text-gray-700 mb-4 italic">
            "{{ t('testimonials.testimonial3') }}"
          </p>
          <div>
            <h4 class="font-semibold text-gray-900">Emma R.</h4>
            <p class="text-sm text-gray-600">{{ t('testimonials.wellnessEnthusiast') }}</p>
          </div>
        </div>
      </div>
      
      <!-- Call to Action -->
      <div class="text-center mt-12">
        <p class="text-lg text-gray-600 mb-6">
          {{ t('testimonials.ctaText') }}
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink 
            to="/contact" 
            class="btn-primary"
          >
            {{ t('testimonials.bookNow') }}
          </NuxtLink>
          <NuxtLink 
            to="/services" 
            class="btn-secondary"
          >
            {{ t('testimonials.viewServices') }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { t } = useTranslations()
</script>
