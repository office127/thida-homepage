<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-thida-maroon to-thida-gold py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-thida-gold mb-4">
          {{ t('impressum.title') }}
        </h1>
        <p class="text-xl text-gray-200">
          {{ t('impressum.subtitle') }}
        </p>
      </div>
    </section>

    <!-- Impressum Content -->
    <section class="py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-xl shadow-lg p-8">
          <!-- Provider Information -->
          <div class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">
              {{ t('impressum.provider.title') }}
            </h2>
            <div class="space-y-4 text-gray-700">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p class="font-semibold">{{ t('impressum.provider.name') }}</p>
                  <p>{{ t('impressum.provider.companyName') }}</p>
                </div>
                <div>
                  <p class="font-semibold">{{ t('impressum.provider.owner') }}</p>
                  <p>{{ t('impressum.provider.ownerName') }}</p>
                </div>
              </div>
              <div>
                <p class="font-semibold">{{ t('impressum.provider.legalForm') }}</p>
                <p>{{ t('impressum.provider.legalFormType') }}</p>
              </div>
              <div>
                <p class="font-semibold">{{ t('impressum.provider.address') }}</p>
                <p>{{ t('impressum.provider.street') }}</p>
                <p>{{ t('impressum.provider.city') }}</p>
                <p>{{ t('impressum.provider.country') }}</p>
              </div>
            </div>
          </div>

          <!-- Contact Information -->
          <div class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">
              {{ t('impressum.contact.title') }}
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
              <div>
                <p class="font-semibold">{{ t('impressum.contact.phone') }}</p>
                <p>{{ t('impressum.contact.phoneNumber') }}</p>
              </div>
                     <div>
                       <p class="font-semibold">{{ t('impressum.contact.email') }}</p>
                       <p><ProtectedEmail :email="t('impressum.contact.emailAddress')" /></p>
                     </div>
              <div>
                <p class="font-semibold">{{ t('impressum.contact.website') }}</p>
                <p>{{ t('impressum.contact.websiteUrl') }}</p>
              </div>
            </div>
          </div>

          <!-- Legal Information -->
          <div class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">
              {{ t('impressum.legal.title') }}
            </h2>
            <div class="text-gray-700">
              <p class="font-semibold">{{ t('impressum.legal.vatId.title') }}</p>
              <p>{{ t('impressum.legal.vatId.number') }}</p>
            </div>
          </div>

          <!-- Disclaimer -->
          <div class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">
              {{ t('impressum.disclaimer.title') }}
            </h2>
            <div class="space-y-6 text-gray-700">
              <div>
                <h3 class="text-lg font-semibold mb-3">{{ t('impressum.disclaimer.content.title') }}</h3>
                <p class="leading-relaxed">{{ t('impressum.disclaimer.content.text') }}</p>
              </div>
              <div>
                <h3 class="text-lg font-semibold mb-3">{{ t('impressum.disclaimer.links.title') }}</h3>
                <p class="leading-relaxed">{{ t('impressum.disclaimer.links.text') }}</p>
              </div>
              <div>
                <h3 class="text-lg font-semibold mb-3">{{ t('impressum.disclaimer.copyright.title') }}</h3>
                <p class="leading-relaxed">{{ t('impressum.disclaimer.copyright.text') }}</p>
              </div>
            </div>
          </div>

          <!-- Privacy Policy -->
          <div class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">
              {{ t('impressum.privacy.title') }}
            </h2>
            <div class="space-y-4 text-gray-700">
              <p class="leading-relaxed">{{ t('impressum.privacy.text') }}</p>
              <p><strong>{{ t('impressum.privacy.contact') }}:</strong> 
                <ProtectedEmail :email="t('impressum.privacy.contactEmail')" />
              </p>
            </div>
          </div>

          <!-- DSGVO Compliance -->
          <div class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">
              {{ t('impressum.dsgvo.title') }}
            </h2>
            <div class="space-y-6 text-gray-700">
              <!-- Data Controller -->
              <div>
                <h3 class="text-lg font-semibold mb-3">{{ t('impressum.dsgvo.controller.title') }}</h3>
                <p class="mb-2">{{ t('impressum.dsgvo.controller.text') }}</p>
                <div class="ml-4 space-y-1">
                  <p><strong>{{ t('impressum.dsgvo.controller.name') }}</strong></p>
                  <p>{{ t('impressum.dsgvo.controller.company') }}</p>
                  <p>{{ t('impressum.dsgvo.controller.address') }}</p>
                  <p>{{ t('impressum.dsgvo.controller.phone') }}</p>
                  <p><ProtectedEmail :email="t('impressum.dsgvo.controller.email')" /></p>
                </div>
              </div>

              <!-- Processing Purposes -->
              <div>
                <h3 class="text-lg font-semibold mb-3">{{ t('impressum.dsgvo.processing.title') }}</h3>
                <ul class="ml-4 space-y-1 list-disc">
                  <li v-for="purpose in t('impressum.dsgvo.processing.purposes')" :key="purpose">{{ purpose }}</li>
                </ul>
              </div>

              <!-- Legal Basis -->
              <div>
                <h3 class="text-lg font-semibold mb-3">{{ t('impressum.dsgvo.legalBasis.title') }}</h3>
                <p class="mb-2">{{ t('impressum.dsgvo.legalBasis.text') }}</p>
                <ul class="ml-4 space-y-1 list-disc">
                  <li v-for="basis in t('impressum.dsgvo.legalBasis.bases')" :key="basis">{{ basis }}</li>
                </ul>
              </div>

              <!-- Data Types -->
              <div>
                <h3 class="text-lg font-semibold mb-3">{{ t('impressum.dsgvo.dataTypes.title') }}</h3>
                <p class="mb-2">{{ t('impressum.dsgvo.dataTypes.text') }}</p>
                <ul class="ml-4 space-y-1 list-disc">
                  <li v-for="type in t('impressum.dsgvo.dataTypes.types')" :key="type">{{ type }}</li>
                </ul>
              </div>

              <!-- Retention Periods -->
              <div>
                <h3 class="text-lg font-semibold mb-3">{{ t('impressum.dsgvo.retention.title') }}</h3>
                <p class="mb-2">{{ t('impressum.dsgvo.retention.text') }}</p>
                <ul class="ml-4 space-y-1 list-disc">
                  <li v-for="period in t('impressum.dsgvo.retention.periods')" :key="period">{{ period }}</li>
                </ul>
              </div>

              <!-- User Rights -->
              <div>
                <h3 class="text-lg font-semibold mb-3">{{ t('impressum.dsgvo.rights.title') }}</h3>
                <p class="mb-2">{{ t('impressum.dsgvo.rights.text') }}</p>
                <ul class="ml-4 space-y-1 list-disc mb-3">
                  <li v-for="right in t('impressum.dsgvo.rights.rights')" :key="right">{{ right }}</li>
                </ul>
                <p><strong>{{ t('impressum.dsgvo.rights.contact') }}:</strong> {{ t('impressum.dsgvo.rights.contactEmail') }}</p>
              </div>

              <!-- Complaint Right -->
              <div>
                <h3 class="text-lg font-semibold mb-3">{{ t('impressum.dsgvo.complaint.title') }}</h3>
                <p class="mb-2">{{ t('impressum.dsgvo.complaint.text') }}</p>
                <div class="ml-4 space-y-1">
                  <p><strong>{{ t('impressum.dsgvo.complaint.authority') }}</strong></p>
                  <p>{{ t('impressum.dsgvo.complaint.address') }}</p>
                  <p>{{ t('impressum.dsgvo.complaint.website') }}</p>
                </div>
              </div>

              <!-- Cookies -->
              <div>
                <h3 class="text-lg font-semibold mb-3">{{ t('impressum.dsgvo.cookies.title') }}</h3>
                <p class="mb-2">{{ t('impressum.dsgvo.cookies.text') }}</p>
                <ul class="ml-4 space-y-1 list-disc">
                  <li>{{ t('impressum.dsgvo.cookies.essential') }}</li>
                  <li>{{ t('impressum.dsgvo.cookies.analytics') }}</li>
                  <li>{{ t('impressum.dsgvo.cookies.control') }}</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Additional Information -->
          <div class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">
              {{ t('impressum.additional.title') }}
            </h2>
            <div class="space-y-6 text-gray-700">
              <div>
                <h3 class="text-lg font-semibold mb-3">{{ t('impressum.additional.accessData.title') }}</h3>
                <p class="leading-relaxed">{{ t('impressum.additional.accessData.text') }}</p>
              </div>
              <div>
                <h3 class="text-lg font-semibold mb-3">{{ t('impressum.additional.legalValidity.title') }}</h3>
                <p class="leading-relaxed">{{ t('impressum.additional.legalValidity.text') }}</p>
              </div>
              <div>
                <h3 class="text-lg font-semibold mb-3">{{ t('impressum.additional.noWarning.title') }}</h3>
                <p class="leading-relaxed">{{ t('impressum.additional.noWarning.text') }}</p>
              </div>
            </div>
          </div>

          <!-- Copyright -->
          <div class="border-t border-gray-200 pt-6">
            <p class="text-sm text-gray-500 text-center">
              © {{ new Date().getFullYear() }} {{ t('impressum.provider.companyName') }} - {{ t('impressum.copyright') }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useTranslations } from '~/composables/useTranslations'

const { t } = useTranslations()

// Set page meta
useHead({
  title: 'Impressum - Thida Royal Thai Massage',
  meta: [
    { name: 'description', content: 'Legal notice and company information for Thida Royal Thai Massage' },
    { property: 'og:title', content: 'Impressum - Thida Royal Thai Massage' },
    { property: 'og:description', content: 'Legal notice and company information for Thida Royal Thai Massage' },
    { property: 'og:url', content: 'https://thida-royal-thaimassage.de/impressum' },
    { name: 'twitter:title', content: 'Impressum - Thida Royal Thai Massage' },
    { name: 'twitter:description', content: 'Legal notice and company information for Thida Royal Thai Massage' }
  ],
  link: [
    { rel: 'canonical', href: 'https://thida-royal-thaimassage.de/impressum' }
  ]
})
</script>
