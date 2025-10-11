// Email protection composable to prevent spam
export const useEmailProtection = () => {
  // Obfuscate email address using various techniques
  const protectEmail = (email: string) => {
    if (!email) return {
      htmlEntity: '',
      jsObfuscated: '',
      mixedCase: '',
      substituted: '',
      original: ''
    }
    
    // Split email into parts
    const [localPart, domain] = email.split('@')
    
    // Method 1: HTML entity encoding
    const htmlEntityEncode = (str: string): string => {
      return str.split('').map(char => `&#${char.charCodeAt(0)};`).join('')
    }
    
    // Method 2: JavaScript obfuscation (for dynamic display)
    const jsObfuscate = (str: string): string => {
      const chars = str.split('')
      const encoded = chars.map(char => char.charCodeAt(0)).join(',')
      return `String.fromCharCode(${encoded})`
    }
    
    // Method 3: Mixed case obfuscation
    const mixedCaseObfuscate = (str: string): string => {
      return str.split('').map((char, index) => 
        index % 2 === 0 ? char.toLowerCase() : char.toUpperCase()
      ).join('')
    }
    
    // Method 4: Character substitution
    const substituteChars = (str: string): string => {
      return str
        .replace(/@/g, ' [at] ')
        .replace(/\./g, ' [dot] ')
    }
    
    // Return multiple protection methods
    return {
      htmlEntity: `${htmlEntityEncode(localPart)}@${htmlEntityEncode(domain)}`,
      jsObfuscated: `${jsObfuscate(localPart)}@${jsObfuscate(domain)}`,
      mixedCase: `${mixedCaseObfuscate(localPart)}@${mixedCaseObfuscate(domain)}`,
      substituted: substituteChars(email),
      original: email
    }
  }
  
  // Generate protected email display HTML
  const getProtectedEmailHTML = (email: string): string => {
    const protectedEmail = protectEmail(email)
    
    return `
      <span class="email-protected" data-email="${protectedEmail.htmlEntity}">
        <script type="text/javascript">
          (function() {
            var email = String.fromCharCode(${protectedEmail.jsObfuscated.split('@')[0]}) + '@' + String.fromCharCode(${protectedEmail.jsObfuscated.split('@')[1]});
            var element = document.querySelector('[data-email="${protectedEmail.htmlEntity}"]');
            if (element) {
              element.innerHTML = '<a href="mailto:' + email + '">' + email + '</a>';
            }
          })();
        </script>
        <noscript>
          ${protectedEmail.substituted}
        </noscript>
      </span>
    `
  }
  
  // Generate protected email for plain text
  const getProtectedEmailText = (email: string): string => {
    const protectedEmail = protectEmail(email)
    return protectedEmail.substituted
  }
  
  // Generate clickable email with protection
  const getClickableEmail = (email: string, displayText?: string): string => {
    const protectedEmail = protectEmail(email)
    const display = displayText || protectedEmail.substituted
    
    return `
      <a href="mailto:${protectedEmail.original}" 
         onclick="this.href='mailto:'+String.fromCharCode(${protectedEmail.jsObfuscated.split('@')[0]})+'@'+String.fromCharCode(${protectedEmail.jsObfuscated.split('@')[1]})"
         class="email-link">
        ${display}
      </a>
    `
  }
  
  return {
    protectEmail,
    getProtectedEmailHTML,
    getProtectedEmailText,
    getClickableEmail
  }
}
