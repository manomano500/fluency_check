<template>
  <div class="text-center min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-50 via-white to-blue-50">
    <h1 class="text-4xl font-bold mb-6 text-blue-800">Welcome to the English Proficiency Test</h1>
    <p class="text-2xl mb-8 text-gray-700">Test your English skills and discover your CEFR level.</p>
    <router-link
      to="/test"
      class="bg-blue-600 text-white py-3 px-8 rounded-full text-xl font-bold hover:bg-blue-700 hover:text-gray-100 transition duration-300 transform hover:scale-105 inline-block"
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
