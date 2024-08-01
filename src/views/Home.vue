<template>
  <div class="text-center">
    <h1 class="text-4xl font-bold mb-6 text-white">Welcome to the English Proficiency Test</h1>
    <p class="text-2xl mb-8 text-white">Test your English skills and discover your CEFR level.</p>
    <router-link
      to="/test"
      class="bg-joyful-yellow text-joyful-blue py-3 px-8 rounded-full text-xl font-bold hover:bg-joyful-pink hover:text-white transition-colors duration-300 transform hover:scale-105 inline-block"
    >
      Start Test
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>