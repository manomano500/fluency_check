<!-- src/layouts/MainLayout.vue -->
<template>
  <div class="min-h-screen flex flex-col bg-gradient-to-br from-joyful-blue via-joyful-green to-joyful-yellow">
    <Header />
    <Navigation />
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
import { useHead } from "@vueuse/head";

export default defineComponent({
  name: 'MainLayout',
  components: {
    Header,
    Footer,
    Navigation
  },
  setup() {
    useHead({
      title: 'Test Your English Level - FluencyCheck',
      meta: [
        {
          name: 'description',
          content: 'Take our online English proficiency test to determine your CEFR level with FluencyCheck.',
        },
        {
          name: 'keywords',
          content: 'English proficiency test, language assessment, CEFR level, fluency check, language skills evaluation',
        }
      ],
    });
  }
})

</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>