// Nuxt composables are auto-imported, but adding explicit imports for TypeScript
// These imports help with TypeScript IntelliSense and linting

// Explicit imports for TypeScript (Nuxt auto-imports these at runtime)
import { useState, useCookie } from 'nuxt/app'
import { readonly } from 'vue'

// Language translations
const translations = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      contact: 'Contact',
      bookNow: 'Book Now'
    },
    // Hero Section
    hero: {
      title: 'Experience',
      titleHighlight: 'Traditional Thai Massage',
      titleEnd: 'at Thida Royal Thai Massage',
      subtitle: 'Discover the perfect harmony of traditional Thai healing and modern wellness techniques. Our harmony studio offers revitalizing treatments designed to restore balance to your mind, body, and spirit.',
      bookSession: 'Book Your Session',
      exploreServices: 'Explore Services',
      yearsExperience: 'Years Experience',
      happyClients: 'Satisfied Clients',
      satisfaction: 'Satisfaction'
    },
    // Services
    services: {
      title: 'Our Signature Services',
      subtitle: 'Experience our carefully curated selection of wellness treatments, each designed to provide unique benefits for your health and revitalization.',
      traditionalThai: 'Traditional Thai Massage',
      traditionalThaiDesc: 'Ancient healing art combining acupressure, assisted yoga postures, and energy work for complete wellness.',
      aromatherapy: 'Aromatherapy',
      aromatherapyDesc: 'Premium essential oils carefully blended to promote revitalization, healing, and emotional balance.',
      hotStone: 'Hot Stone Therapy',
      hotStoneDesc: 'Heated basalt stones melt away tension and promote deep revitalization and muscle relief.',
      reflexology: 'Reflexology',
      reflexologyDesc: 'Ancient healing technique that applies pressure to specific points on feet, hands, and ears to promote overall wellness.',
      bookNow: 'Book Now',
      viewAllServices: 'View All Services'
    },
    // About
    about: {
      whyChoose: 'Why Choose Thida Royal Thai Massage?',
      subtitle: 'For over 10 years, we\'ve been Munich\'s premier destination for traditional Thai Massage. Our commitment to authentic healing practices and personalized care sets us apart.',
      certifiedTherapists: 'Certified Therapists',
      certifiedTherapistsDesc: 'Our team consists of highly trained and certified professionals with years of experience in traditional and modern wellness techniques.',
      premiumProducts: 'Premium Products',
      premiumProductsDesc: 'We use only the finest organic and natural products, carefully selected for their therapeutic properties and quality.',
      sereneEnvironment: 'Harmony Studio',
      sereneEnvironmentDesc: 'Our harmony studio is designed to promote revitalization and healing, with calming music, soft lighting, and peaceful ambiance.',
      personalizedCare: 'Personalized Care',
      personalizedCareDesc: 'Every treatment is tailored to your specific needs and wellness goals, ensuring the most effective and enjoyable experience.',
      learnMore: 'Learn More About Us'
    },
    // Testimonials
    testimonials: {
      title: 'What Our Clients Say',
      subtitle: 'Don\'t just take our word for it. Here\'s what our valued clients have to say about their revitalizing experiences at Thida Royal Thai Massage.',
      testimonial1: 'The traditional Thai massage at Thida Royal Thai Massage was absolutely incredible. Thanks to the therapist’s expertise and the peaceful setting, the massage became a deeply revitalizing experience.. I left feeling completely rejuvenated.',
      testimonial2: 'I\'ve been to many spas around the world, but Thida Royal Thai Massage stands out for its authentic approach and attention to detail. The aromatherapy session was pure bliss, and the staff\'s professionalism is unmatched.',
      testimonial3: 'The complete wellness package exceeded all my expectations. From the moment I walked in, I felt transported to a world of peace and tranquility. This is truly a special place.',
      regularClient: 'Regular Client',
      businessTraveler: 'Business Traveler',
      wellnessEnthusiast: 'Wellness Enthusiast',
      basedOnReviews: 'Based on 159+ reviews from satisfied clients',
      ctaText: 'Ready to experience the same level of care and expertise?',
      bookNow: 'Book Your Session',
      viewServices: 'View Our Services'
    },
    // CTA
    cta: {
      title: 'Ready to Begin Your Wellness Journey?',
      subtitle: 'Book your appointment today and experience the revitalizing power of our treatments. Our expert therapists are ready to guide you on your path to wellness and revitalization.',
      bookSession: 'Book Your Session',
      viewAllServices: 'View All Services',
      callNow: 'Call Now',
      callNowNeuhausen: 'Call Neuhausen',
      phoneNumber: '+49 89 69333228',
      phoneNumberNeuhausen: '+49 89 44234838',
      email: 'info@thida-royal.de',
    },
    // Footer
    footer: {
      description: 'Experience traditional Thai Massage in a harmony studio. Our professional treatments and personalized care will rejuvenate your mind, body, and soul.',
      quickLinks: 'Quick Links',
      contactInfo: 'Contact Info',
      email: 'info@thida-royal.de',
      copyright: '© 2024 Thida Royal Thai Massage. All rights reserved.'
    },
    // Language Switcher
    languageSwitcher: {
      selectLanguage: 'Select Language',
      english: 'English',
      german: 'German',
      currentLanguage: 'Current Language'
    },
    // About Page
    aboutPage: {
      title: 'About Thida Royal Thai Massage',
      subtitle: 'Discover our story, our passion for wellness, and the dedicated team that makes every visit to Thida Royal Thai Massage a revitalizing experience.',
      ourStory: 'Our Story',
      storyText1: 'Founded in 2014, Thida Royal Thai Massage has been Munich\'s premier destination for traditional wellness and revitalization. Our name "Thida" means "pure" in Thai, reflecting our commitment to providing authentic, revitalizing spa experiences.',
      storyText2: 'What started as a small wellness center has grown into a comprehensive spa offering traditional Thai treatments alongside modern therapeutic techniques. We believe that true wellness comes from harmony between mind, body, and spirit.',
      storyText3: 'Every treatment at Thida Royal Thai Massage is designed to restore balance, reduce stress, and promote natural healing. Our harmony studio and expert therapists create the perfect sanctuary for your wellness journey.',
      ourValues: 'Our Values',
      authenticity: 'Authenticity',
      authenticityDesc: 'We honor traditional Thai healing practices while incorporating modern wellness techniques.',
      excellence: 'Excellence',
      excellenceDesc: 'Every treatment is delivered with the highest standards of care and attention to detail.',
      community: 'Community',
      communityDesc: 'We\'re committed to supporting our local community and sustainable wellness practices.',
    },
    // Contact Page
    contactPage: {
      title: 'Contact Us',
      subtitle: 'Ready to begin your wellness journey? Get in touch with us to book your appointment or learn more about our services. We\'re here to help you achieve optimal health and revitalization.',
      sendMessage: 'Send us a Message',
      firstName: 'First Name',
      lastName: 'Last Name',
      emailAddress: 'Email Address',
      phoneNumber: 'Phone Number',
      serviceInterest: 'Service Interest',
      selectService: 'Select a service',
      general: 'General',
      appointment: 'Appointment',
      message: 'Message',
      messagePlaceholder: 'Tell us about your wellness goals or any specific requirements...',
      sending: 'Sending...',
      sendMessageBtn: 'Send Message',
      getInTouch: 'Get in Touch',
      address: 'Address',
      phone: 'Phone',
      email: 'Email',
      hours: 'Hours',
      successMessage: 'Thank you for your message! We will get back to you soon.',
      errorMessage: 'Failed to send message. Please try again later.',
      selectLocation: 'Select Location',
      getDirections: 'Get Directions',
      sendEmail: 'Send Email',
      callNow: 'Call Now',
      quickCall: 'Quick Call',
    },
    // Email Content
    email: {
      subject: 'New Contact Form Submission',
      subjectWithLocation: 'New Contact Form Submission - {location}',
      title: 'New Contact Form Submission',
      location: 'Location',
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      message: 'Message',
      notSpecified: 'Not specified',
      notProvided: 'Not provided',
      footer: 'Sent from Thida Royal Thai Massage contact form',
      selectLocation: 'Select Location',
    },
    // Locations
    locations: {
      laim: {
        name: 'Laim',
        address: 'Agnes-Bernauer-Str. 85<br/>80687 München Laim',
        phone: '+49 89 20074027',
        email: 'laim@thida-royal.de',
        emailProtected: 'laim [at] thida-royal [dot] de',
        hours: 'Mon-Fri: 10-19 Uhr, Sat: 10-18 Uhr',
        description: 'Your Place for Traditional Thai Massage in Munich Laim'
      },
      neuhausen: {
        name: 'Neuhausen',
        address: 'Wendl-Dietrich-Straße 18<br/>80634 München Neuhausen',
        phone: '+49 89 44234838',
        email: 'neuhausen@thida-royal.de',
        emailProtected: 'neuhausen [at] thida-royal [dot] de',
        hours: 'Mon-Fri: 10-20 Uhr, Sat: 10-19 Uhr',
        description: 'Your Place for Traditional Thai Massage in Munich Neuhausen'
      }
    },
    // Services Page
    servicesPage: {
      title: 'Our Services',
      subtitle: 'Discover our comprehensive range of wellness treatments designed to restore balance, reduce stress, and promote natural healing for your mind, body, and spirit.',
      selectLocation: 'Select Location',
      traditionalThaiMassage: 'Traditional Thai Massage',
      traditionalThaiMassageDesc: 'Experience the ancient art of Thai massage with our skilled therapists. This therapeutic treatment combines acupressure, assisted yoga postures, and energy work.',
      aromatherapy: 'Aromatherapy',
      aromatherapyDesc: 'Indulge in our signature aromatherapy treatments using premium essential oils. Each blend is carefully crafted to promote revitalization and healing.',
      hotStoneTherapy: 'Hot Stone Therapy',
      hotStoneTherapyDesc: 'Revitalize with our therapeutic hot stone massage. Heated basalt stones are placed on key points to melt away tension and promote deep revitalization.',
      luxuryFacial: 'Facial',
      luxuryFacialDesc: 'Rejuvenate your skin with our premium facial treatments. Using organic products and advanced techniques for radiant, healthy skin.',
      completeWellnessPackage: 'Royal Wellness Package',
      completeWellnessPackageDesc: 'Our Royal Wellness Package includes massage, facial, and body treatment. A complete wellness experience for ultimate revitalization and rejuvenation.',
      // Location-specific Services
      locationServices: {
        laim: {
          title: 'Thida Royal Laim',
          subtitle: 'Authentic traditional Thai massage treatments for your wellness and revitalization in Laim.',
          serviceCategories: {
            royal: {
              title: 'Royal Thai Massages - Indulge Yourself',
              description: 'Premium treatments with additional services for ultimate wellness.',
              services: {
                royalRelax: {
                  name: 'R1. Royal Relax',
                  description: 'Back, neck and shoulder massage + herbal stamp + head and facial massage.',
                  durations: [
                    { duration: '60 Min', price: '62€' }
                  ]
                },
                royalThai: {
                  name: 'R2. Royal Thai',
                  description: 'Traditional Thai Massage + herbal stamp + head and facial massage.',
                  durations: [
                    { duration: '90 Min', price: '80€' }
                  ]
                },
                royalHotstone: {
                  name: 'R3. Royal Hotstone',
                  description: 'Full body oil massage + hotstone + head and facial massage.',
                  durations: [
                    { duration: '90 Min', price: '85€' },
                    { duration: '120 Min', price: '122€' }
                  ]
                },
                royalCoconut: {
                  name: 'R4. Royal Coconut',
                  description: 'Full body massage for beautiful skin + coconut oil + facial massage.',
                  durations: [
                    { duration: '60 Min', price: '62€' }
                  ]
                }
              }
            },
            ganzkoerper: {
              title: 'Full Body Thai Massages for Stress Relief',
              description: 'Revitalizing full body treatments for deep rest and stress reduction.',
              services: {
                wellnessOil: {
                  name: 'G1. Wellness Oil Massage',
                  description: 'Revitalizing Full body massage with valuable oils for stress management.',
                  durations: [
                    { duration: '60 Min', price: '58€' },
                    { duration: '90 Min', price: '78€' },
                    { duration: '120 Min', price: '100€' }
                  ]
                },
                asiaMix: {
                  name: 'G2. Asia Blend (Thai and Oil Massage)',
                  description: 'Combination of traditional Thai massage and revitalizing oil massage.',
                  durations: [
                    { duration: '60 Min', price: '58€' },
                    { duration: '90 Min', price: '78€' },
                    { duration: '120 Min', price: '100€' }
                  ]
                },
                traditionalThai: {
                  name: 'G3. Traditional Thai Massage',
                  description: 'Authentic Thai massage technique without oil with clothing.',
                  durations: [
                    { duration: '60 Min', price: '58€' },
                    { duration: '90 Min', price: '78€' },
                    { duration: '120 Min', price: '100€' }
                  ]
                },
                herbalStamp: {
                  name: 'G4. Herbal Stamp Massage',
                  description: 'With traditional Thai herbal stamps for deeper healing.',
                  durations: [
                    { duration: '90 Min', price: '85€' },
                    { duration: '120 Min', price: '122€' }
                  ]
                },
                sportThai: {
                  name: 'G5. Sport Thai Massage',
                  description: 'Intensive massage specially for athletes and active people.',
                  durations: [
                    { duration: '90 Min', price: '85€' },
                    { duration: '120 Min', price: '122€' }
                  ]
                }
              }
            },
            teilkoerper: {
              title: 'Partial Body Thai Massages for Introduction',
              description: 'Perfect introduction to traditional Thai massage with focused treatments.',
              services: {
                handNeckHead: {
                  name: 'T1. Hand, Neck and Head Massage',
                  description: 'Revitalizing partial body massage for first acquaintance with our Thai massage.',
                  durations: [
                    { duration: '30 Min', price: '38€' },
                    { duration: '60 Min', price: '58€' }
                  ]
                },
                backShoulderHead: {
                  name: 'T2. Back, Shoulder and Head Massage',
                  description: 'Perfect for office workers and tension in the shoulder-neck area.',
                  durations: [
                    { duration: '30 Min', price: '38€' },
                    { duration: '60 Min', price: '58€' }
                  ]
                },
                footReflexology: {
                  name: 'T3. Foot Reflexology Massage',
                  description: 'Traditional reflexology massage to stimulate self-healing abilities.',
                  durations: [
                    { duration: '30 Min', price: '38€' },
                    { duration: '60 Min', price: '58€' }
                  ]
                },
                legMassage: {
                  name: 'T4. Leg Massage',
                  description: 'Specially for tired and heavy legs or better blood circulation.',
                  durations: [
                    { duration: '30 Min', price: '38€' },
                    { duration: '60 Min', price: '58€' }
                  ]
                }
              }
            }
          }
        },
        neuhausen: {
          title: 'Thida Royal Neuhausen',
          subtitle: 'Authentic traditional Thai massage treatments for your wellness and revitalization in Neuhausen.',
          serviceCategories: {
            royal: {
              title: 'Royal Thai Massages - Indulge Yourself',
              description: 'Premium treatments with additional services for ultimate wellness.',
              services: {
                hotstoneMassage: {
                  name: 'R3. Hotstone Massage',
                  description: 'Heated basalt stones melt away tension and promote deep revitalization.',
                  durations: [
                    { duration: '60 min', price: '85€' },
                    { duration: '90 min', price: '107€' }
                  ]
                }
              }
            },
            ganzkoerper: {
              title: 'Full Body Thai Massages for Stress Relief',
              description: 'Revitalizing full body treatments for deep rest and stress reduction.',
              services: {
                wellnessOilMassage: {
                  name: 'G1. Wellness Oil Massage',
                  description: 'Revitalizing Full body massage with valuable oils for stress management.',
                  durations: [
                    { duration: '60 min', price: '62€' },
                    { duration: '90 min', price: '87€' }
                  ]
                },
                traditionalThaiMassage: {
                  name: 'G3. Traditional Thai Massage',
                  description: 'Authentic Thai massage technique without oil with clothing.',
                  durations: [
                    { duration: '60 min', price: '62€' },
                    { duration: '90 min', price: '87€' }
                  ]
                },
                thaiSportMassage: {
                  name: 'G5. Thai Sport Massage',
                  description: 'Intensive massage specially for athletes and active people.',
                  durations: [
                    { duration: '60 min', price: '75€' },
                    { duration: '90 min', price: '102€' }
                  ]
                }
              }
            },
            teilkoerper: {
              title: 'Partial Body Thai Massages for Introduction',
              description: 'Perfect introduction to traditional Thai massage with focused treatments.',
              services: {
                headFacialMassage: {
                  name: 'T1. Head and Facial Massage',
                  description: 'Revitalizing partial body massage for head, face and shoulder-neck area.',
                  durations: [
                    { duration: '30 min', price: '35€' }
                  ]
                },
                backMassage: {
                  name: 'T2. Back Massage',
                  description: 'Perfect for office workers and tension in the shoulder-back area.',
                  durations: [
                    { duration: '30 min', price: '35€' },
                    { duration: '60 min', price: '62€' }
                  ]
                },
                footReflexologyMassage: {
                  name: 'T3. Foot Reflexology Massage',
                  description: 'Traditional reflexology massage to stimulate self-healing abilities.',
                  durations: [
                    { duration: '30 min', price: '35€' },
                    { duration: '60 min', price: '62€' }
                  ]
                },
                legMassage: {
                  name: 'T4. Leg Massage',
                  description: 'Specially for tired and heavy legs or better blood circulation.',
                  durations: [
                    { duration: '30 min', price: '35€' },
                    { duration: '60 min', price: '62€' }
                  ]
                }
              }
            }
          }
        }
      },
      availableDurationPrice: 'Available Duration & Price:',
      readyToExperience: 'Ready to Experience Wellness?',
      readyToExperienceDesc: 'Book your appointment today and discover the revitalizing power of our treatments. Our expert therapists are ready to guide you on your wellness journey.',
      bookAppointment: 'Book Appointment',
      callUsNow: 'Call Us Now'
    },
    // Impressum
    impressum: {
      title: 'Legal Notice',
      subtitle: 'Information according to § 5 DDG',
      provider: {
        title: 'Provider',
        name: 'Company Name',
        companyName: 'Thida Royal Thai Massage',
        legalForm: 'Legal Form',
        legalFormType: 'Sole proprietorship (Einzelunternehmen)',
        owner: 'Owner',
        ownerName: 'Tipphawan Tran',
        address: 'Address',
        street: 'Agnes-Bernauer-Str. 85',
        city: '80687 Munich',
        country: 'Germany'
      },
      contact: {
        title: 'Contact',
        phone: 'Phone',
        phoneNumber: '+49 89 69333228',
        email: 'Email',
        emailAddress: 'info@thida-royal.de',
        emailAddressProtected: 'info [at] thida-royal [dot] de',
        website: 'Website',
        websiteUrl: 'thida-royal.de'
      },
      legal: {
        title: 'Legal Information',
        vatId: {
          title: 'VAT Identification Number',
          number: 'DE297363337'
        }
      },
      disclaimer: {
        title: 'Disclaimer',
        content: {
          title: 'Content of the Online Offer',
          text: 'The author assumes no responsibility for the topicality, correctness, completeness or quality of the information provided. Liability claims against the author relating to damages of a material or immaterial nature caused by the use or non-use of the information provided or by the use of incorrect and incomplete information are generally excluded, unless the author can be proven to have acted intentionally or with gross negligence. All offers are subject to change and non-binding. The author expressly reserves the right to change, supplement or delete parts of the pages or the entire offer without prior notice or to discontinue publication temporarily or permanently.'
        },
        links: {
          title: 'References and Links',
          text: 'In the case of direct or indirect references to external websites ("links") that are outside the author\'s area of responsibility, a liability obligation would only come into force if the author has knowledge of the contents and it would be technically possible and reasonable for him to prevent the use in case of illegal contents. The author therefore expressly declares that the corresponding linked pages were free of illegal content at the time the links were set. The author has no influence on the current and future design and on the contents of the linked/referenced pages. Therefore, he hereby expressly distances himself from all contents of all linked/referenced pages that were changed after the link was set.'
        },
        copyright: {
          title: 'Copyright and Trademark Law',
          text: 'The author endeavors to observe the copyrights of the graphics, sound documents, video sequences and texts used in all publications, to use graphics, sound documents, video sequences and texts created by himself or to fall back on license-free graphics, sound documents, video sequences and texts. All brands and trademarks mentioned within the Internet offer and possibly protected by third parties are subject without restriction to the provisions of the applicable trademark law and the ownership rights of the respective registered owners. The copyright for published objects created by the author himself remains solely with the author of the pages. Reproduction or use of such graphics, sound documents, video sequences and texts in other electronic or printed publications is not permitted without the express consent of the author.'
        }
      },
      privacy: {
        title: 'Privacy Policy',
        text: 'Insofar as personal data (such as name, address or email) is collected on our pages, this is always done on a voluntary basis as far as possible. The use of contact data published within the framework of the imprint obligation by third parties for sending unsolicited advertising and information material is hereby expressly contradicted. The operators of the pages expressly reserve the right to take legal action in the event of unsolicited advertising information being sent, such as spam emails.',
        contact: 'For privacy-related questions, contact',
        contactEmail: 'info@thida-royal.de'
      },
      dsgvo: {
        title: 'Data Protection Information (DSGVO)',
        controller: {
          title: 'Data Controller',
          text: 'The data controller for this website is:',
          name: 'Tipphawan Tran',
          company: 'Thida Royal Thai Massage',
          address: 'Agnes-Bernauer-Str. 85, 80687 München',
          phone: '+49 89 69333228',
          email: 'info@thida-royal.de',
          emailProtected: 'info [at] thida-royal [dot] de'
        },
        processing: {
          title: 'Data Processing Purposes',
          purposes: [
            'Processing contact form inquiries',
            'Website operation and technical functionality',
            'Statistical analysis of website usage',
            'Communication with customers and interested parties'
          ]
        },
        legalBasis: {
          title: 'Legal Basis for Processing',
          text: 'Personal data is processed on the basis of:',
          bases: [
            'Art. 6 para. 1 lit. a DSGVO (consent) for contact form inquiries',
            'Art. 6 para. 1 lit. f DSGVO (legitimate interest) for website operation',
            'Art. 6 para. 1 lit. b DSGVO (contract performance) for customer communication'
          ]
        },
        dataTypes: {
          title: 'Types of Data Processed',
          text: 'We process the following categories of personal data:',
          types: [
            'Contact data (name, email address, telephone number)',
            'Communication data (messages, inquiries)',
            'Usage data (IP address, browser type, access times)',
            'Technical data (cookies, session data)'
          ]
        },
        retention: {
          title: 'Data Retention Periods',
          text: 'Personal data is stored for the following periods:',
          periods: [
            'Contact form data: until inquiry is processed (max. 2 years)',
            'Customer data: for the duration of the business relationship',
            'Website usage data: max. 24 months',
            'Technical logs: max. 7 days'
          ]
        },
        rights: {
          title: 'Your Rights',
          text: 'Under the DSGVO, you have the following rights regarding your personal data:',
          rights: [
            'Right to information (Art. 15 DSGVO)',
            'Right to rectification (Art. 16 DSGVO)',
            'Right to erasure (Art. 17 DSGVO)',
            'Right to restriction of processing (Art. 18 DSGVO)',
            'Right to data portability (Art. 20 DSGVO)',
            'Right to object (Art. 21 DSGVO)',
            'Right to withdraw consent (Art. 7 para. 3 DSGVO)'
          ],
          contact: 'To exercise your rights, please contact us at:',
          contactEmail: 'info@thida-royal.de'
        },
        complaint: {
          title: 'Right to Complain',
          text: 'You have the right to lodge a complaint with a supervisory authority if you believe that the processing of your personal data violates the DSGVO.',
          authority: 'Bavarian State Office for Data Protection Supervision',
          address: 'Promenade 27, 91522 Ansbach',
          website: 'www.lda.bayern.de'
        },
        cookies: {
          title: 'Cookies and Tracking',
          text: 'This website uses cookies for technical functionality and analysis purposes. You can control cookie settings in your browser.',
          essential: 'Essential cookies are required for website functionality.',
          analytics: 'Analytics cookies help us understand website usage.',
          control: 'You can manage cookie preferences in your browser settings.'
        }
      },
      additional: {
        title: 'Additional Information',
        accessData: {
          title: 'Storage of Access Data',
          text: 'When a page is requested from the offer, the following data is stored: IP address of the computer from which the page is requested, the page from which the file was requested, name of the file, date and time of the request, amount of data transferred, access status (file transferred, file not found, etc.), a description of the type of web browser used. The stored data is evaluated exclusively for statistical purposes; no data is passed on to third parties.'
        },
        legalValidity: {
          title: 'Legal Validity of this Disclaimer',
          text: 'This disclaimer is to be regarded as part of the Internet offer from which reference was made to this page. If parts or individual formulations of this text do not, no longer or not completely correspond to the applicable legal situation, the remaining parts of the document remain unaffected in their content and validity.'
        },
        noWarning: {
          title: 'No Warning Letters Without Prior Contact!',
          text: 'If the content, design or images of these web pages violate third-party copyrights, legal provisions or other rights, we ask for a corresponding message without cost note. We guarantee that the rightfully complained content will be deleted immediately without requiring the involvement of a lawyer on your part.'
        }
      },
      copyright: 'All rights reserved'
    }
  },
  de: {
    // Navigation
    nav: {
      home: 'Startseite',
      about: 'Über uns',
      services: 'Angebote',
      contact: 'Kontakt',
      bookNow: 'Jetzt buchen'
    },
    // Hero Section
    hero: {
      title: 'Erleben Sie',
      titleHighlight: 'Traditionelle Thai Massage',
      titleEnd: 'bei Thida Royal',
      subtitle: 'Entdecken Sie die perfekte Harmonie zwischen traditioneller thailändischer Heilung und modernen Wellness-Techniken. Unser harmonisches Studio bietet erholsame Behandlungen, die darauf ausgelegt sind, das Gleichgewicht von Geist, Körper und Seele wiederherzustellen.',
      bookSession: 'Termin buchen',
      exploreServices: 'Angebote erkunden',
      yearsExperience: 'Jahre Erfahrung',
      happyClients: 'Zufriedene Kunden',
      satisfaction: 'Zufriedenheit'
    },
    // Services
    services: {
      title: 'Unsere Angebote',
      subtitle: 'Erleben Sie unsere sorgfältig kuratierte Auswahl an Wellness-Behandlungen, die jeweils darauf ausgelegt sind, einzigartige Vorteile für Ihre Gesundheit und Wohlbefinden zu bieten.',
      traditionalThai: 'Traditionelle Thai Massage',
      traditionalThaiDesc: 'Alte Heilkunst, die Akupressur, unterstützte Yoga-Positionen und Energiearbeit für vollständiges Wohlbefinden kombiniert.',
      aromatherapy: 'Kräuterstempel',
      aromatherapyDesc: 'Hochwertige ätherische Öle, sorgfältig gemischt, um Wohlbefinden, Heilung und emotionales Gleichgewicht zu fördern.',
      hotStone: 'Heißstein-Therapie',
      hotStoneDesc: 'Erhitzte Basaltsteine lassen Verspannungen schmelzen und fördern tiefe Wohlbefinden und Muskelentspannung.',
      reflexology: 'Reflexologie',
      reflexologyDesc: 'Alte Heilmethode, die Druck auf spezifische Punkte an Füßen, Händen und Ohren ausübt, um das allgemeine Wohlbefinden zu fördern.',
      bookNow: 'Jetzt buchen',
      viewAllServices: 'Alle Angebote anzeigen'
    },
    // About
    about: {
      whyChoose: 'Warum Thida Royal Thai Massage wählen?',
      subtitle: 'Seit über 10 Jahren sind wir Münchens erste Adresse für traditionelle Thai Massage. Unser Engagement für authentische Heilpraktiken und persönliche Betreuung hebt uns ab.',
      certifiedTherapists: 'Zertifizierte Therapeuten',
      certifiedTherapistsDesc: 'Unser Team besteht aus hochqualifizierten und zertifizierten Fachkräften mit jahrelanger Erfahrung in traditionellen und modernen Wellness-Techniken.',
      premiumProducts: 'Premium-Produkte',
      premiumProductsDesc: 'Wir verwenden nur die feinsten organischen und natürlichen Produkte, sorgfältig ausgewählt für ihre therapeutischen Eigenschaften und Qualität.',
      sereneEnvironment: 'Harmonisches Studio',
      sereneEnvironmentDesc: 'Unser harmonisches Studio ist darauf ausgelegt, Erholung und Heilung zu fördern, mit beruhigender Musik, sanfter Beleuchtung und friedlicher Atmosphäre.',
      personalizedCare: 'Persönliche Betreuung',
      personalizedCareDesc: 'Jede Behandlung wird auf Ihre spezifischen Bedürfnisse und Wellness-Ziele zugeschnitten, um die effektivste und angenehmste Erfahrung zu gewährleisten.',
      learnMore: 'Mehr über uns erfahren'
    },
    // Testimonials
    testimonials: {
      title: 'Was unsere Kunden sagen',
      subtitle: 'Nehmen Sie nicht nur unser Wort dafür. Hier ist, was unsere geschätzten Kunden über ihre besonderen Erfahrungen bei Thida Royal Thai Massage sagen.',
      testimonial1: 'Die traditionelle Thai Massage bei Thida Royal Thai Massage war absolut unglaublich. Dank der Expertise des Therapeuten und der friedlichen Umgebung wurde die Massage zu einem zutiefst revitalisierenden Erlebnis.. Ich ging völlig verjüngt hinaus.',
      testimonial2: 'Ich war in vielen Spas auf der ganzen Welt, aber Thida Royal Thai Massage sticht durch seinen authentischen Ansatz und die Aufmerksamkeit für Details hervor. Die Kräuterstempel-Sitzung war reine Wonne, und die Professionalität des Personals ist unübertroffen.',
      testimonial3: 'Das komplette Wellness-Paket übertraf alle meine Erwartungen. Vom Moment an, als ich eintrat, fühlte ich mich in eine Welt des Friedens und der Ruhe versetzt. Das ist wirklich ein besonderer Ort.',
      regularClient: 'Stammkunde',
      businessTraveler: 'Geschäftsreisender',
      wellnessEnthusiast: 'Wellness-Enthusiast',
      basedOnReviews: 'Basierend auf 159+ Bewertungen zufriedener Kunden',
      ctaText: 'Bereit, das gleiche Maß an Fürsorge und Expertise zu erleben?',
      bookNow: 'Termin buchen',
      viewServices: 'Unsere Angebote ansehen'
    },
    // CTA
    cta: {
      title: 'Bereit, Ihre Wellness-Reise zu beginnen?',
      subtitle: 'Buchen Sie noch heute Ihren Termin und erleben Sie die revitalizing Kraft unserer Behandlungen. Unsere erfahrenen Therapeuten sind bereit, Sie auf Ihrem Weg zu Wellness und Wohlbefinden zu begleiten.',
      bookSession: 'Termin buchen',
      viewAllServices: 'Alle Angebote anzeigen',
      callNow: 'Jetzt anrufen',
      callNowNeuhausen: 'Neuhausen anrufen',
      phoneNumber: '+49 89 69333228',
      phoneNumberNeuhausen: '+49 89 44234838',
      email: 'info@thida-royal.de',
    },
    // Footer
    footer: {
      description: 'Erleben Sie Tradition und Wellness in einer friedlichen Umgebung. Unsere professionellen Behandlungen und persönliche Betreuung werden Ihren Geist, Körper und Seele verjüngen.',
      quickLinks: 'Schnelllinks',
      contactInfo: 'Kontaktinformationen',
      email: 'info@thida-royal.de',
      copyright: '© 2024 Thida Royal Thai Massage. Alle Rechte vorbehalten.'
    },
    // Language Switcher
    languageSwitcher: {
      selectLanguage: 'Sprache wählen',
      english: 'Englisch',
      german: 'Deutsch',
      currentLanguage: 'Aktuelle Sprache'
    },
    // About Page
    aboutPage: {
      title: 'Über Thida Royal Thai Massage',
      subtitle: 'Entdecken Sie unsere Geschichte, unsere Leidenschaft für Wellness und das engagierte Team, das jeden Besuch bei Thida Royal Thai Massage zu einem erholsamen Erlebnis macht.',
      ourStory: 'Unsere Geschichte',
      storyText1: 'Gegründet im Jahr 2014, ist Thida Royal Thai Massage die erste Adresse für Wellness und Wohlbefinden in München. Unser Name "Thida" bedeutet "rein" auf Thai und spiegelt unser Engagement für authentische, revitalizing Spa-Erlebnisse wider.',
      storyText2: 'Was als kleines Wellness-Zentrum begann, ist zu einem umfassenden Spa gewachsen, das traditionelle thailändische Behandlungen neben modernen therapeutischen Techniken anbietet. Wir glauben, dass wahres Wohlbefinden aus der Harmonie zwischen Geist, Körper und Seele entsteht.',
      storyText3: 'Jede Behandlung bei Thida Royal Thai Massage ist darauf ausgelegt, das Gleichgewicht wiederherzustellen, Stress zu reduzieren und natürliche Heilung zu fördern. Unsere friedliche Umgebung und erfahrenen Therapeuten schaffen das perfekte Refugium für Ihre Wellness-Reise.',
      ourValues: 'Unsere Werte',
      authenticity: 'Authentizität',
      authenticityDesc: 'Wir ehren traditionelle thailändische Heilpraktiken und integrieren gleichzeitig moderne Wellness-Techniken.',
      excellence: 'Exzellenz',
      excellenceDesc: 'Jede Behandlung wird mit höchsten Standards der Betreuung und Aufmerksamkeit für Details durchgeführt.',
      community: 'Gemeinschaft',
      communityDesc: 'Wir sind verpflichtet, unsere lokale Gemeinschaft und nachhaltige Wellness-Praktiken zu unterstützen.',
    },
    // Contact Page
    contactPage: {
      title: 'Kontakt',
      subtitle: 'Bereit, Ihre Wellness-Reise zu beginnen? Kontaktieren Sie uns, um Ihren Termin zu buchen oder mehr über unsere Angebote zu erfahren. Wir sind hier, um Ihnen zu helfen, optimale Gesundheit und Wohlbefinden zu erreichen.',
      sendMessage: 'Senden Sie uns eine Nachricht',
      firstName: 'Vorname',
      lastName: 'Nachname',
      emailAddress: 'E-Mail-Adresse',
      phoneNumber: 'Telefonnummer',
      serviceInterest: 'Service-Interesse',
      selectService: 'Wählen Sie einen Service',
      general: 'Allgemein',
      appointment: 'Termin',
      message: 'Nachricht',
      messagePlaceholder: 'Erzählen Sie uns von Ihren Wellness-Wünschen oder spezifischen Anforderungen...',
      sending: 'Wird gesendet...',
      sendMessageBtn: 'Nachricht senden',
      getInTouch: 'Kontakt aufnehmen',
      address: 'Adresse',
      phone: 'Telefon',
      email: 'E-Mail',
      hours: 'Öffnungszeiten',
      successMessage: 'Vielen Dank für Ihre Nachricht! Wir werden uns bald bei Ihnen melden.',
      errorMessage: 'Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es später erneut.',
      selectLocation: 'Standort wählen',
      getDirections: 'Route anzeigen',
      sendEmail: 'E-Mail senden',
      callNow: 'Jetzt anrufen',
      quickCall: 'Schnell anrufen',
    },
    // Email Content
    email: {
      subject: 'Neue Kontaktformular-Anfrage',
      subjectWithLocation: 'Neue Kontaktformular-Anfrage - {location}',
      title: 'Neue Kontaktformular-Anfrage',
      location: 'Standort',
      name: 'Name',
      email: 'E-Mail',
      phone: 'Telefon',
      message: 'Nachricht',
      notSpecified: 'Nicht angegeben',
      notProvided: 'Nicht angegeben',
      footer: 'Gesendet vom Kontaktformular der Thida Royal Thai Massage',
      selectLocation: 'Standort wählen',
    },
    // Locations
    locations: {
      laim: {
        name: 'Laim',
        address: 'Agnes-Bernauer-Str. 85<br/>80687 München Laim',
        phone: '+49 89 20074027',
        email: 'laim@thida-royal.de',
        emailProtected: 'laim [at] thida-royal [dot] de',
        hours: 'Mo-Fr: 10-19 Uhr, Sa: 10-18 Uhr',
        description: 'Ihr Studio für traditionelle Thai Massage in München Laim'
      },
      neuhausen: {
        name: 'Neuhausen',
        address: 'Wendl-Dietrich-Straße 18<br/>80634 München Neuhausen',
        phone: '+49 89 44234838',
        email: 'neuhausen@thida-royal.de',
        emailProtected: 'neuhausen [at] thida-royal [dot] de',
        hours: 'Mo-Fr: 10-20 Uhr, Sa: 10-19 Uhr',
        description: 'Ihr Studio für traditionelle Thai Massage in München Neuhausen.'
      }
    },
    // Services Page
    servicesPage: {
      title: 'Unsere Angebote',
      subtitle: 'Entdecken Sie unser umfassendes Angebot an Wellness-Behandlungen, die darauf ausgelegt sind, das Gleichgewicht wiederherzustellen, Stress zu reduzieren und natürliche Heilung für Ihren Geist, Körper und Seele zu fördern.',
      selectLocation: 'Standort wählen',
      traditionalThaiMassage: 'Traditionelle Thai Massage',
      traditionalThaiMassageDesc: 'Erleben Sie die alte Kunst der Thai Massage mit unseren erfahrenen Therapeuten. Diese therapeutische Behandlung kombiniert Akupressur, unterstützte Yoga-Positionen und Energiearbeit.',
      aromatherapy: 'Kräuterstempel',
      aromatherapyDesc: 'Genießen Sie unsere Signature-Kräuterstempel-Behandlungen mit hochwertigen ätherischen Ölen. Jede Mischung ist sorgfältig entwickelt, um Wohlbefinden und Heilung zu fördern.',
      hotStoneTherapy: 'Heißstein-Therapie',
      hotStoneTherapyDesc: 'Entspannen Sie sich mit unserer therapeutischen Heißstein-Massage. Erhitzte Basaltsteine werden an Schlüsselpunkten platziert, um Verspannungen zu lösen und tiefe Wohlbefinden zu fördern.',
      luxuryFacial: 'Gesichtsbehandlung',
      luxuryFacialDesc: 'Verjüngen Sie Ihre Haut mit unseren Premium-Gesichtsbehandlungen. Mit organischen Produkten und fortschrittlichen Techniken für strahlende, gesunde Haut.',
      completeWellnessPackage: 'Komplettes Wellness-Paket',
      completeWellnessPackageDesc: 'Unser Signature-Paket umfasst Massage, Gesichtsbehandlung und Körperbehandlung. Ein komplettes Wellness-Erlebnis für ultimative Wohlbefinden und Verjüngung.',
      // Location-specific Services
      locationServices: {
        laim: {
          title: 'Thida Royal Laim',
          subtitle: 'Authentische Thai Massage Behandlungen nach traditionellen Methoden für Ihr Wohlbefinden in Laim.',
          serviceCategories: {
            royal: {
              title: 'Royal Thai Massagen - sich verwöhnen lassen',
              description: 'Premium-Behandlungen mit zusätzlichen Services für das ultimative Wohlbefinden.',
              services: {
                royalRelax: {
                  name: 'R1. Royal Relax',
                  description: 'Rücken, Nacken und Schultermassage + Kräuterstempel + Kopf und Gesichtsmassage.',
                  durations: [
                    { duration: '60 Min', price: '62€' }
                  ]
                },
                royalThai: {
                  name: 'R2. Royal Thai',
                  description: 'Traditionelle Thai Massage + Kräuterstempel + Kopf und Gesichtsmassage.',
                  durations: [
                    { duration: '90 Min', price: '80€' }
                  ]
                },
                royalHotstone: {
                  name: 'R3. Royal Hotstone',
                  description: 'Ganzkörper Ölmassage + Hotstone + Kopf und Gesichtsmassage.',
                  durations: [
                    { duration: '90 Min', price: '85€' },
                    { duration: '120 Min', price: '122€' }
                  ]
                },
                royalCoconut: {
                  name: 'R4. Royal Coconut',
                  description: 'Ganzkörper Massage für schöne Haut + Kokosnussöl + Gesichtsmassage.',
                  durations: [
                    { duration: '60 Min', price: '62€' }
                  ]
                }
              }
            },
            ganzkoerper: {
              title: 'Ganzkörper Thai Massagen um Stress abzubauen',
              description: 'Entspannende Ganzkörper-Behandlungen für tiefe Erholung und Stressabbau.',
              services: {
                wellnessOil: {
                  name: 'G1. Wellness Öl-Massage',
                  description: 'Entspannende Ganzkörper-Massage mit wertvollen Ölen zur Stressbewältigung.',
                  durations: [
                    { duration: '60 Min', price: '58€' },
                    { duration: '90 Min', price: '78€' },
                    { duration: '120 Min', price: '100€' }
                  ]
                },
                asiaMix: {
                  name: 'G2. Asia-Mischung (Thai- und Öl-Massage)',
                  description: 'Kombination aus traditioneller Thai Massage und sanfter Öl-Massage.',
                  durations: [
                    { duration: '60 Min', price: '58€' },
                    { duration: '90 Min', price: '78€' },
                    { duration: '120 Min', price: '100€' }
                  ]
                },
                traditionalThai: {
                  name: 'G3. Traditionelle Thai Massage',
                  description: 'Authentische thailändische Massage-Technik ohne Öl mit Kleidung.',
                  durations: [
                    { duration: '60 Min', price: '58€' },
                    { duration: '90 Min', price: '78€' },
                    { duration: '120 Min', price: '100€' }
                  ]
                },
                herbalStamp: {
                  name: 'G4. Kräuterstempel-Massage',
                  description: 'Mit traditionellen thailändischen Kräuterstempeln für tiefere Heilung.',
                  durations: [
                    { duration: '90 Min', price: '85€' },
                    { duration: '120 Min', price: '122€' }
                  ]
                },
                sportThai: {
                  name: 'G5. Sport Thai Massage',
                  description: 'Intensive Massage speziell für Sportler und aktive Menschen.',
                  durations: [
                    { duration: '90 Min', price: '85€' },
                    { duration: '120 Min', price: '122€' }
                  ]
                }
              }
            },
            teilkoerper: {
              title: 'Teilkörper Thai Massagen zum Kennenlernen',
              description: 'Perfekte Einführung in die traditionelle Thai Massage mit fokussierten Behandlungen.',
              services: {
                handNeckHead: {
                  name: 'T1. Hand-, Nacken-, Kopf-Massage',
                  description: 'Entspannende Teilkörper-Massage für eine erste Bekanntschaft mit unserer Thai Massage.',
                  durations: [
                    { duration: '30 Min', price: '38€' },
                    { duration: '60 Min', price: '58€' }
                  ]
                },
                backShoulderHead: {
                  name: 'T2. Rücken-, Schulter-, Kopf-Massage',
                  description: 'Perfekt für Büroarbeiter und Verspannungen im Schulter-Nacken-Bereich.',
                  durations: [
                    { duration: '30 Min', price: '38€' },
                    { duration: '60 Min', price: '58€' }
                  ]
                },
                footReflexology: {
                  name: 'T3. Fußreflexzonen-Massage',
                  description: 'Traditionelle Reflexzonen-Massage zur Stimulierung der Selbstheilungskräfte.',
                  durations: [
                    { duration: '30 Min', price: '38€' },
                    { duration: '60 Min', price: '58€' }
                  ]
                },
                legMassage: {
                  name: 'T4. Bein-Massage',
                  description: 'Speziell für müde und schwere Beine oder zur besseren Durchblutung.',
                  durations: [
                    { duration: '30 Min', price: '38€' },
                    { duration: '60 Min', price: '58€' }
                  ]
                }
              }
            },
            kohsamui: {
              title: 'KOH SAMUI MASSAGEN',
              description: 'Spezielle Angebote mit traditionellen thailändischen Behandlungen.',
              services: {
                kohSamuiSpecial: {
                  name: 'Koh Samui Special',
                  description: 'Ganzkörper Öl Massage + Kräuterstempel + Kopf-Gesichts Massage',
                  durations: [
                    { duration: '90 Min', price: '80€' }
                  ]
                }
              }
            },
            thaibalance: {
              title: 'THAI BALANCE + HOTSTONE MASSAGEN',
              description: 'Entspannende Rücken- und Nackenmassage mit wohltuenden Hotstones.',
              services: {
                thaiBalanceHotstone: {
                  name: 'Thai Balance + Hotstone',
                  description: 'Rücken und Nacken Massage + HotStone',
                  durations: [
                    { duration: '60 Min', price: '62€' },
                    { duration: '90 Min', price: '80€' }
                  ]
                }
              }
            }
          },
          disclaimer: 'Alle Massagen auch als Gutscheine erhältlich.\nGutscheine sind vom Umtausch ausgeschlossen.\nAlle Preise für Massagen sind inklusive Mehrwertsteuer.\n\nStand Oktober 2024'
        },
        neuhausen: {
          title: 'Thida Royal Neuhausen',
          subtitle: 'Authentische Thai Massage Behandlungen nach traditionellen Methoden für Ihr Wohlbefinden in Neuhausen.',
          serviceCategories: {
            royal: {
              title: 'Royal Thai Massagen - sich verwöhnen lassen',
              description: 'Premium-Behandlungen mit zusätzlichen Services für das ultimative Wohlbefinden.',
              services: {
                hotstoneMassage: {
                  name: 'R3. Hotstone Massage',
                  description: 'Erhitzte Basaltsteine lassen Verspannungen schmelzen und fördern tiefe Wohlbefinden.',
                  durations: [
                    { duration: '60 min', price: '85€' },
                    { duration: '90 min', price: '107€' }
                  ]
                }
              }
            },
            ganzkoerper: {
              title: 'Ganzkörper Thai Massagen um Stress abzubauen',
              description: 'Entspannende Ganzkörper-Behandlungen für tiefe Erholung und Stressabbau.',
              services: {
                wellnessOilMassage: {
                  name: 'G1. Wellness Öl Massage',
                  description: 'Entspannende Ganzkörper-Massage mit wertvollen Ölen zur Stressbewältigung.',
                  durations: [
                    { duration: '60 min', price: '62€' },
                    { duration: '90 min', price: '87€' }
                  ]
                },
                traditionalThaiMassage: {
                  name: 'G3. Traditionelle Thai Massage',
                  description: 'Authentische thailändische Massage-Technik ohne Öl mit Kleidung.',
                  durations: [
                    { duration: '60 min', price: '62€' },
                    { duration: '90 min', price: '87€' }
                  ]
                },
                thaiSportMassage: {
                  name: 'G5. Thai-Sportmassage',
                  description: 'Intensive Massage speziell für Sportler und aktive Menschen.',
                  durations: [
                    { duration: '60 min', price: '75€' },
                    { duration: '90 min', price: '102€' }
                  ]
                }
              }
            },
            teilkoerper: {
              title: 'Teilkörper Thai Massagen zum Kennenlernen',
              description: 'Perfekte Einführung in die traditionelle Thai Massage mit fokussierten Behandlungen.',
              services: {
                headFacialMassage: {
                  name: 'T1. Kopf- und Gesichtsmassage',
                  description: 'Entspannende Teilkörper-Massage für Kopf, Gesicht und Schulter-Nacken-Bereich.',
                  durations: [
                    { duration: '30 min', price: '35€' }
                  ]
                },
                backMassage: {
                  name: 'T2. Rückenmassage',
                  description: 'Perfekt für Büroarbeiter und Verspannungen im Schulter-Rücken-Bereich.',
                  durations: [
                    { duration: '30 min', price: '35€' },
                    { duration: '60 min', price: '62€' }
                  ]
                },
                footReflexologyMassage: {
                  name: 'T3. Fuß Reflexzonen Massage',
                  description: 'Traditionelle Reflexzonen-Massage zur Stimulierung der Selbstheilungskräfte.',
                  durations: [
                    { duration: '30 min', price: '35€' },
                    { duration: '60 min', price: '62€' }
                  ]
                },
                legMassage: {
                  name: 'T4. Beinmassage',
                  description: 'Speziell für müde und schwere Beine oder zur besseren Durchblutung.',
                  durations: [
                    { duration: '30 min', price: '35€' },
                    { duration: '60 min', price: '62€' }
                  ]
                }
              }
            },
            waerme: {
              title: 'WÄRME-KRÄUTERSTEMPEL',
              description: 'Zusätzliche Wärme-Kräuterstempel Option für alle Massagen.',
              services: {
                waermeKraeuterstempel: {
                  name: 'Wärme-Kräuterstempel Aufpreis',
                  description: 'Alle Massagen zusätzlich mit Wärme-Kräuterstempel möglich',
                  durations: [
                    { duration: 'Aufpreis', price: '10,00 €' }
                  ]
                }
              }
            }
          },
          disclaimer: 'Alle Massagen auch als Gutscheine erhältlich.\nGutscheine sind vom Umtausch ausgeschlossen.\nAlle Preise für Massagen sind inklusive Mehrwertsteuer.\n\nStand September 2025'
        }
      },
      availableDurationPrice: 'Dauer & Preis:',
      readyToExperience: 'Bereit, Wellness zu erleben?',
      readyToExperienceDesc: 'Buchen Sie noch heute Ihren Termin und entdecken Sie die revitalizing Kraft unserer Behandlungen. Unsere erfahrenen Therapeuten sind bereit, Sie auf Ihrer Wellness-Reise zu begleiten.',
      bookAppointment: 'Termin buchen',
      callUsNow: 'Rufen Sie uns jetzt an'
    },
    // Impressum
    impressum: {
      title: 'Impressum',
      subtitle: 'Angaben gemäß § 5 DDG',
      provider: {
        title: 'Anbieter',
        name: 'Firmenname',
        companyName: 'Thida Royal Thai Massage',
        legalForm: 'Rechtsform',
        legalFormType: 'Einzelunternehmen',
        owner: 'Inhaberin',
        ownerName: 'Tipphawan Tran',
        address: 'Anschrift',
        street: 'Agnes-Bernauer-Str. 85',
        city: '80687 München',
        country: 'Deutschland'
      },
      contact: {
        title: 'Kontakt',
        phone: 'Telefon',
        phoneNumber: '+49 89 69333228',
        email: 'E-Mail',
        emailAddress: 'info@thida-royal.de',
        emailAddressProtected: 'info [at] thida-royal [dot] de',
        website: 'Website',
        websiteUrl: 'thida-royal.de'
      },
      legal: {
        title: 'Rechtliche Angaben',
        vatId: {
          title: 'Umsatzsteuer-Identifikationsnummer',
          number: 'DE297363337'
        }
      },
      disclaimer: {
        title: 'Haftungsausschluss',
        content: {
          title: 'Inhalt des Onlineangebotes',
          text: 'Der Autor übernimmt keinerlei Gewähr für die Aktualität, Korrektheit, Vollständigkeit oder Qualität der bereitgestellten Informationen. Haftungsansprüche gegen den Autor, welche sich auf Schäden materieller oder ideeller Art beziehen, die durch die Nutzung oder Nichtnutzung der dargebotenen Informationen bzw. durch die Nutzung fehlerhafter und unvollständiger Informationen verursacht wurden sind grundsätzlich ausgeschlossen, sofern seitens des Autors kein nachweislich vorsätzliches oder grob fahrlässiges Verschulden vorliegt. Alle Angebote sind freibleibend und unverbindlich. Der Autor behält es sich ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.'
        },
        links: {
          title: 'Verweise und Links',
          text: 'Bei direkten oder indirekten Verweisen auf fremde Internetseiten ("Links"), die außerhalb des Verantwortungsbereiches des Autors liegen, würde eine Haftungsverpflichtung ausschließlich in dem Fall in Kraft treten, in dem der Autor von den Inhalten Kenntnis hat und es ihm technisch möglich und zumutbar wäre, die Nutzung im Falle rechtswidriger Inhalte zu verhindern. Der Autor erklärt daher ausdrücklich, dass zum Zeitpunkt der Linksetzung die entsprechenden verlinkten Seiten frei von illegalen Inhalten waren. Der Autor hat keinerlei Einfluss auf die aktuelle und zukünftige Gestaltung und auf die Inhalte der gelinkten/verknüpften Seiten. Deshalb distanziert er sich hiermit ausdrücklich von allen Inhalten aller gelinkten/verknüpften Seiten, die nach der Linksetzung verändert wurden.'
        },
        copyright: {
          title: 'Urheber- und Kennzeichenrecht',
          text: 'Der Autor ist bestrebt, in allen Publikationen die Urheberrechte der verwendeten Grafiken, Tondokumente, Videosequenzen und Texte zu beachten, zu nutzen oder auf lizenzfreies Material zurückzugreifen. Alle innerhalb des Internetangebotes genannten und ggf. durch Dritte geschützten Marken- und Warenzeichen unterliegen uneingeschränkt den Bestimmungen des jeweils gültigen Kennzeichenrechts und den Besitzrechten der jeweiligen eingetragenen Eigentümer. Das Copyright für veröffentlichte, vom Autor selbst erstellte Objekte bleibt allein beim Autor der Seiten. Eine Vervielfältigung oder Verwendung der Materialien in anderen elektronischen oder gedruckten Publikationen ist ohne ausdrückliche Zustimmung des Autors nicht gestattet.'
        }
      },
      privacy: {
        title: 'Datenschutz',
        text: 'Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder Email) erhoben werden, erfolgt dies soweit möglich stets auf freiwilliger Basis. Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.',
        contact: 'Für datenschutzbezogene Fragen kontaktieren Sie',
        contactEmail: 'info@thida-royal.de'
      },
      dsgvo: {
        title: 'Datenschutzhinweise (DSGVO)',
        controller: {
          title: 'Verantwortlicher',
          text: 'Verantwortlicher für diese Website ist:',
          name: 'Tipphawan Tran',
          company: 'Thida Royal Thai Massage',
          address: 'Agnes-Bernauer-Str. 85, 80687 München',
          phone: '+49 89 69333228',
          email: 'info@thida-royal.de',
          emailProtected: 'info [at] thida-royal [dot] de'
        },
        processing: {
          title: 'Zwecke der Datenverarbeitung',
          purposes: [
            'Bearbeitung von Kontaktformular-Anfragen',
            'Website-Betrieb und technische Funktionalität',
            'Statistische Auswertung der Website-Nutzung',
            'Kommunikation mit Kunden und Interessenten'
          ]
        },
        legalBasis: {
          title: 'Rechtsgrundlage der Verarbeitung',
          text: 'Personenbezogene Daten werden verarbeitet auf Grundlage von:',
          bases: [
            'Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) für Kontaktformular-Anfragen',
            'Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse) für Website-Betrieb',
            'Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung) für Kundenkommunikation'
          ]
        },
        dataTypes: {
          title: 'Arten der verarbeiteten Daten',
          text: 'Wir verarbeiten folgende Kategorien personenbezogener Daten:',
          types: [
            'Kontaktdaten (Name, E-Mail-Adresse, Telefonnummer)',
            'Kommunikationsdaten (Nachrichten, Anfragen)',
            'Nutzungsdaten (IP-Adresse, Browsertyp, Zugriffszeiten)',
            'Technische Daten (Cookies, Session-Daten)'
          ]
        },
        retention: {
          title: 'Speicherdauer',
          text: 'Personenbezogene Daten werden für folgende Zeiträume gespeichert:',
          periods: [
            'Kontaktformular-Daten: bis zur Bearbeitung der Anfrage (max. 2 Jahre)',
            'Kundendaten: für die Dauer der Geschäftsbeziehung',
            'Website-Nutzungsdaten: max. 24 Monate',
            'Technische Logs: max. 7 Tage'
          ]
        },
        rights: {
          title: 'Ihre Rechte',
          text: 'Nach der DSGVO haben Sie folgende Rechte bezüglich Ihrer personenbezogenen Daten:',
          rights: [
            'Recht auf Auskunft (Art. 15 DSGVO)',
            'Recht auf Berichtigung (Art. 16 DSGVO)',
            'Recht auf Löschung (Art. 17 DSGVO)',
            'Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)',
            'Recht auf Datenübertragbarkeit (Art. 20 DSGVO)',
            'Recht auf Widerspruch (Art. 21 DSGVO)',
            'Recht auf Widerruf der Einwilligung (Art. 7 Abs. 3 DSGVO)'
          ],
          contact: 'Zur Ausübung Ihrer Rechte kontaktieren Sie uns unter:',
          contactEmail: 'info@thida-royal.de'
        },
        complaint: {
          title: 'Beschwerderecht',
          text: 'Sie haben das Recht, sich bei einer Aufsichtsbehörde zu beschweren, wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen die DSGVO verstößt.',
          authority: 'Bayerisches Landesamt für Datenschutzaufsicht',
          address: 'Promenade 27, 91522 Ansbach',
          website: 'www.lda.bayern.de'
        },
        cookies: {
          title: 'Cookies und Tracking',
          text: 'Diese Website verwendet Cookies für technische Funktionalität und Analysezwecke. Sie können Cookie-Einstellungen in Ihrem Browser steuern.',
          essential: 'Notwendige Cookies sind für die Website-Funktionalität erforderlich.',
          analytics: 'Analyse-Cookies helfen uns, die Website-Nutzung zu verstehen.',
          control: 'Sie können Cookie-Einstellungen in Ihren Browser-Einstellungen verwalten.'
        }
      },
      additional: {
        title: 'Zusätzliche Informationen',
        accessData: {
          title: 'Speicherung von Zugriffsdaten',
          text: 'Bei jeder Anforderung einer Seite aus dem Angebot werden folgende Daten gespeichert: IP-Adresse des Rechners, von dem die Seite angefordert wird, die Seite, von der aus die Datei angefordert wurde, Name der Datei, Datum und Uhrzeit der Anforderung, übertragene Datenmenge, Zugriffsstatus (Datei übertragen, Datei nicht gefunden etc.), einer Beschreibung des Typs des verwendeten Webbrowsers. Die gespeicherten Daten werden ausschließlich zu statistischen Zwecken ausgewertet, eine Weitergabe an Dritte findet nicht statt.'
        },
        legalValidity: {
          title: 'Rechtswirksamkeit dieses Haftungsausschlusses',
          text: 'Dieser Haftungsausschluss ist als Teil des Internetangebotes zu betrachten, von dem aus auf diese Seite verwiesen wurde. Sofern Teile oder einzelne Formulierungen dieses Textes der geltenden Rechtslage nicht, nicht mehr oder nicht vollständig entsprechen sollten, bleiben die übrigen Teile des Dokumentes in ihrem Inhalt und ihrer Gültigkeit davon unberührt.'
        },
        noWarning: {
          title: 'Keine Abmahnungen ohne vorherigen Kontakt!',
          text: 'Sollte der Inhalt, die Aufmachung oder Abbildungen dieser Web-Seiten Urheberrechte Dritter, gesetzliche Bestimmungen oder andere Rechte verletzen, so bitten wir um eine entsprechende Nachricht ohne Kostennote. Wir garantieren, dass die zu Recht beanstandeten Inhalte umgehend gelöscht werden, ohne dass von Ihrer Seite die Einschaltung eines Rechtsbeistandes erforderlich ist.'
        }
      },
      copyright: 'Alle Rechte vorbehalten'
    }
  }
}

export const useTranslations = () => {
  // Use global state for language with proper SSR handling
  const currentLanguage = useState('language', () => {
    // Use consistent default for SSR/CSR
    return 'de'
  })

  // Initialize language from cookie/localStorage on client side only
  if (import.meta.client) {
      const cookie = useCookie('thida-spa-language', {
        default: () => 'de',
        sameSite: 'lax'
      })
    
    // Set initial value from cookie
    if (cookie.value) {
      currentLanguage.value = cookie.value
    } else {
      // Fallback to localStorage if no cookie
      try {
        const savedLang = localStorage.getItem('thida-spa-language')
        if (savedLang && ['en', 'de'].includes(savedLang)) {
        currentLanguage.value = savedLang
        cookie.value = savedLang
      }
      } catch (error) {
        // localStorage might not be available in some contexts
        console.warn('localStorage not available:', error)
      }
    }
  }

  const t = (key: string) => {
    try {
      const keys = key.split('.')
      let value: any = translations[currentLanguage.value]

      for (const k of keys) {
        value = value?.[k]
      }

      return value || key
    } catch (error) {
      // Fallback during SSR or if there's an error
      return key
    }
  }

  const switchLanguage = (lang: 'en' | 'de') => {
    currentLanguage.value = lang
    const cookie = useCookie('thida-spa-language', {
      default: () => 'en',
      sameSite: 'lax'
    })
    cookie.value = lang

    // Also store in localStorage for backward compatibility - only on client side
    if (import.meta.client) {
      try {
      localStorage.setItem('thida-spa-language', lang)
      } catch (error) {
        console.warn('localStorage not available:', error)
      }
    }
  }

  return {
    currentLanguage: readonly(currentLanguage),
    t,
    switchLanguage
  }
}
