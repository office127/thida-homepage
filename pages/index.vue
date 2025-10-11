<template>
  <div>
    <!-- Page Title -->
    <section class="bg-white py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-3xl md:text-4xl font-bold text-gray-900 hidden">
          Thida Royal Thai Massage - Traditional Thai Massage Experience in München
        </h1>
      </div>
    </section>
    
    <!-- Hero Section -->
    <HeroSection />
    
    <!-- About Preview -->
    <AboutPreview />
    
    <!-- Testimonials -->
    <TestimonialsSection />
    
    <!-- CTA Section -->
    <CTASection />
  </div>
</template>

<script setup>
// SEO Meta
useHead({
  title: 'Thida Royal - Traditional Thai Massage Experience',
  meta: [
    { name: 'description', content: 'Experience traditional Thai Massage at Thida Royal. Professional treatments, harmony studio, and personalized care for your mind, body, and soul.' },
    { property: 'og:title', content: 'Thida Royal - Traditional Thai Massage Experience' },
    { property: 'og:description', content: 'Experience traditional Thai Massage at Thida Royal. Professional treatments, harmony studio, and personalized care for your mind, body, and soul.' },
    { property: 'og:url', content: 'https://thida-royal-thaimassage.de' },
    { name: 'twitter:title', content: 'Thida Royal - Traditional Thai Massage Experience' },
    { name: 'twitter:description', content: 'Experience traditional Thai Massage at Thida Royal. Professional treatments, harmony studio, and personalized care for your mind, body, and soul.' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Thida Royal Thai Massage",
        "description": "Traditional Thai massage and wellness treatments in München Laim and Neuhausen",
        "url": "https://thida-royal-thaimassage.de",
        "telephone": "+49 89 123 4567",
        "email": "info@thida-royal.de",
        "address": [
          {
            "@type": "PostalAddress",
            "streetAddress": "Agnes-Bernauer-Str. 85",
            "addressLocality": "München",
            "addressRegion": "Bayern",
            "postalCode": "80687",
            "addressCountry": "DE"
          },
          {
            "@type": "PostalAddress",
            "streetAddress": "Nymphenburger Str. 123",
            "addressLocality": "München",
            "addressRegion": "Bayern",
            "postalCode": "80636",
            "addressCountry": "DE"
          }
        ],
        "geo": [
          {
            "@type": "GeoCoordinates",
            "latitude": "48.1351",
            "longitude": "11.5820"
          }
        ],
        "openingHours": [
          "Mo-Fr 09:00-20:00",
          "Sa 09:00-18:00",
          "Su 10:00-16:00"
        ],
        "priceRange": "€50-€120",
        "paymentAccepted": "Cash, Credit Card",
        "currenciesAccepted": "EUR",
        "serviceArea": {
          "@type": "City",
          "name": "München"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Thai Massage Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Traditional Thai Massage",
                "description": "Authentic Thai massage techniques for relaxation and healing"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Aromatherapy",
                "description": "Essential oil treatments for enhanced wellness"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Hot Stone Therapy",
                "description": "Heated stone therapy for deep muscle relaxation"
              }
            }
          ]
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "5000",
          "bestRating": "5",
          "worstRating": "1"
        },
        "image": "https://thida-royal-thaimassage.de/images/hero-spa.jpg",
        "logo": "https://thida-royal-thaimassage.de/logo.png",
        "sameAs": [
          "https://www.facebook.com/thidaroyal",
          "https://www.instagram.com/thidaroyal"
        ]
      })
    }
  ]
})
</script>
