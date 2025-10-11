<template>
  <span class="email-protected">
    <!-- JavaScript-enabled version -->
    <span v-if="!isPlainText" class="email-js" :data-email="protectedEmail.original">
      <a :href="`mailto:${protectedEmail.original}`" class="email-link">
        {{ displayText || protectedEmail.substituted }}
      </a>
    </span>
    
    <!-- Plain text fallback -->
    <span v-else class="email-plain">
      {{ displayText || protectedEmail.substituted }}
    </span>
    
    <!-- NoScript fallback -->
    <noscript>
      <span class="email-noscript">
        {{ displayText || protectedEmail.substituted }}
      </span>
    </noscript>
  </span>
</template>

<script setup>
import { computed } from 'vue'
import { useEmailProtection } from '~/composables/useEmailProtection'

const props = defineProps({
  email: {
    type: String,
    required: true
  },
  displayText: {
    type: String,
    default: ''
  },
  isPlainText: {
    type: Boolean,
    default: false
  }
})

const { protectEmail } = useEmailProtection()

const protectedEmail = computed(() => protectEmail(props.email))
</script>

<style scoped>
.email-protected {
  font-family: inherit;
}

.email-link {
  color: inherit;
  text-decoration: none;
  border-bottom: 1px dotted currentColor;
  transition: all 0.2s ease;
}

.email-link:hover {
  color: #DAA520;
  border-bottom-color: #DAA520;
}

.email-plain,
.email-noscript {
  font-family: monospace;
  background-color: #f8f9fa;
  padding: 2px 4px;
  border-radius: 3px;
  font-size: 0.9em;
}
</style>
