<template>
  <div class="min-h-screen  flex flex-col bg-gradient-to-br from-gray-100 via-blue-100 to-gray-50 text-gray-800">
    <Header />


    <div class="container mx-auto px-4 py-2">
      <!-- Content goes here -->
    </div>

    <main class="flex-grow container mx-auto px-4 py-8">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <Footer />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Navigation from '@/components/Navigation.vue'

export default defineComponent({
  name: 'MainLayout',
  components: {
    Header,
    Navigation,
    Footer
  }
})
</script>
