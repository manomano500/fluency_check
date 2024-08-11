<!-- src/layouts/MainLayout.vue -->
<template>
  <div class="min-h-screen flex flex-col bg-gradient-to-br from-joyful-blue via-joyful-green to-joyful-yellow">
    <Header />

    <Navigation />
    <div class="container mx-auto px-4 py-2 ">

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
// import Auth from '@/components/Auth.vue'

export default defineComponent({
  name: 'MainLayout',
  components: {
    Header,
    Footer,
    Navigation,
    // Auth
  }
})
</script>