<template>
  <div class="contact-us bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <!-- Animated title -->
      <h1 
        class="text-4xl font-extrabold text-center text-indigo-700 mb-12"
        @mouseenter="animateTitle = true"
        @animationend="animateTitle = false"
        :class="{'animate-pulse': animateTitle}"
      >
        Contact Us
      </h1>

      <div class="grid md:grid-cols-2 gap-12">
        <!-- Left column - Contact methods -->
        <div class="space-y-8">
          <!-- Call Us section -->
          <div 
            class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            @mouseenter="hoverSection = 'call'"
            @mouseleave="hoverSection = ''"
          >
            <div class="flex items-center mb-4">
              <div class="p-3 rounded-full bg-indigo-100 text-indigo-600 mr-4">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <h2 class="text-2xl font-bold text-gray-800">Call To Us</h2>
            </div>
            <p class="text-gray-600 mb-4">We are available 24/7, 7 days a week.</p>
            <a 
              href="tel:+880161112222" 
              class="text-indigo-600 font-medium text-lg hover:text-indigo-800 transition-colors duration-200 flex items-center"
              :class="{'scale-105': hoverSection === 'call'}"
            >
              <span>+880 1611 12222</span>
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>

          <!-- Write to Us section -->
          <div 
            class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            @mouseenter="hoverSection = 'write'"
            @mouseleave="hoverSection = ''"
          >
            <div class="flex items-center mb-4">
              <div class="p-3 rounded-full bg-indigo-100 text-indigo-600 mr-4">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h2 class="text-2xl font-bold text-gray-800">Write To Us</h2>
            </div>
            <p class="text-gray-600 mb-4">Fill out our form and we will contact you within 24 hours.</p>
            <div class="space-y-2">
              <a 
                v-for="(email, index) in emails" 
                :key="index"
                :href="`mailto:${email}`"
                class="text-indigo-600 font-medium hover:text-indigo-800 transition-colors duration-200 flex items-center"
                :class="{'scale-105': hoverSection === 'write'}"
              >
                <span>{{ email }}</span>
                <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Right column - Contact form -->
        <div class="bg-white p-8 rounded-xl shadow-lg">
          <form @submit.prevent="submitForm" class="space-y-6">
            <!-- Name field -->
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                <span>Your Name</span>
                <span class="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                id="name"
                v-model="form.name"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 outline-none"
                placeholder="Enter your full name"
              >
            </div>

            <!-- Email field -->
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                <span>Your Email</span>
                <span class="text-red-500 ml-1">*</span>
              </label>
              <input
                type="email"
                id="email"
                v-model="form.email"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 outline-none"
                placeholder="Enter your email address"
              >
            </div>

            <!-- Phone field -->
            <div>
              <label for="phone" class="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                <span>Your Phone</span>
                <span class="text-red-500 ml-1">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                v-model="form.phone"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 outline-none"
                placeholder="Enter your phone number"
              >
            </div>

            <!-- Message field -->
            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
              <textarea
                id="message"
                v-model="form.message"
                rows="4"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 outline-none"
                placeholder="Type your message here..."
              ></textarea>
            </div>

            <!-- Submit button -->
            <button
              type="submit"
              class="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-indigo-700 transition-colors duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              :disabled="isSubmitting"
            >
              <span v-if="!isSubmitting">Send Message</span>
              <span v-else class="flex items-center justify-center">
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      animateTitle: false,
      hoverSection: '',
      emails: [
        'customers@exclusive.com',
        'support@exclusive.com'
      ],
      form: {
        name: '',
        email: '',
        phone: '',
        message: ''
      },
      isSubmitting: false
    }
  },
  methods: {
    submitForm() {
      this.isSubmitting = true
      
      // Simulate form submission
      setTimeout(() => {
        alert('Thank you for your message! We will contact you soon.')
        this.form = {
          name: '',
          email: '',
          phone: '',
          message: ''
        }
        this.isSubmitting = false
      }, 1500)
    }
  }
}
</script>