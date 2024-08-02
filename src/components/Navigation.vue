<template>
  <nav class="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg py-4 shadow-md">
    <div class="container mx-auto px-4">
      <ul class="flex space-x-4">
        <li>
          <router-link to="/" class="text-white hover:text-joyful-yellow transition-colors duration-300">Home</router-link>
        </li>
        <li>
          <router-link to="/test" class="text-white hover:text-joyful-yellow transition-colors duration-300">Start Test</router-link>
        </li>
        <li>
          <router-link to="/histori" class="text-white hover:text-joyful-yellow transition-colors duration-300">History</router-link>
        </li>
      </ul>
    </div>

  </nav>
</template>