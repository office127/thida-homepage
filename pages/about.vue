<template>
  <div class="py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Page Header -->
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          {{ t('aboutPage.title') }}
        </h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          {{ t('aboutPage.subtitle') }}
        </p>
      </div>

      <!-- Story Section -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
        <div>
          <h2 class="text-3xl font-bold text-gray-900 mb-6">{{ t('aboutPage.ourStory') }}</h2>
          <p class="text-gray-600 mb-6">
            {{ t('aboutPage.storyText1') }}
          </p>
          <p class="text-gray-600 mb-6">
            {{ t('aboutPage.storyText2') }}
          </p>
          <p class="text-gray-600">
            {{ t('aboutPage.storyText3') }}
          </p>
        </div>
        <div class="relative">
          <div class="aspect-w-4 aspect-h-3 bg-gray-200 rounded-lg overflow-hidden">
            <img 
              src="/images/about-spa.jpg" 
              alt="Peaceful interior of Thida Royal Thai Massage spa with traditional Thai elements and serene atmosphere" 
              class="w-full h-full object-cover"
              loading="lazy"
              width="600"
              height="400"
            />
          </div>
        </div>
      </div>

      <!-- Values Section -->
      <div class="mb-20">
        <h2 class="text-3xl font-bold text-gray-900 text-center mb-12">{{ t('aboutPage.ourValues') }}</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-thida-cream rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-thida-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">{{ t('aboutPage.authenticity') }}</h3>
            <p class="text-gray-600">
              {{ t('aboutPage.authenticityDesc') }}
            </p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-thida-cream rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-thida-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">{{ t('aboutPage.excellence') }}</h3>
            <p class="text-gray-600">
              {{ t('aboutPage.excellenceDesc') }}
            </p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-thida-cream rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-thida-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">{{ t('aboutPage.community') }}</h3>
            <p class="text-gray-600">
              {{ t('aboutPage.communityDesc') }}
            </p>
          </div>
        </div>
      </div>

    </div>
    
    <!-- CTA Section -->
    <CTASection />
  </div>
</template>

<script setup>
const { t } = useTranslations()


    useHead({
      title: 'About Us - Thida Royal Thai Massage',
      meta: [
        { name: 'description', content: 'Learn about Thida Royal Thai Massage\'s story, values, and dedicated team of wellness professionals committed to your health and revitalization.' },
        { property: 'og:title', content: 'About Us - Thida Royal Thai Massage' },
        { property: 'og:description', content: 'Learn about Thida Royal Thai Massage\'s story, values, and dedicated team of wellness professionals committed to your health and revitalization.' },
        { property: 'og:url', content: 'https://thida-royal-thaimassage.de/about' },
        { name: 'twitter:title', content: 'About Us - Thida Royal Thai Massage' },
        { name: 'twitter:description', content: 'Learn about Thida Royal Thai Massage\'s story, values, and dedicated team of wellness professionals committed to your health and revitalization.' }
      ],
      link: [
        { rel: 'canonical', href: 'https://thida-royal-thaimassage.de/about' }
      ]
    })
</script>
