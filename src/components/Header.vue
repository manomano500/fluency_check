<template>
  <header class=" text-blue-800  ">

    <nav class="bg-blue-50 py-6 space-x-36 m-auto  bg-opacity-60 backdrop-filter backdrop-blur-lg  shadow-md ">
      <div class="container flex m-auto">
        <div class="container mx-auto px-4">
          <h1 class="text-3xl font-bold">FluencyCheck</h1>
        </div>
        <div class="container mx-auto px-4">
          <ul class="flex space-x-6">
            <li>
              <router-link to="/" class="text-blue-800 hover:text-blue-600 transition-colors duration-300">Home</router-link>
            </li>
            <li>
              <router-link to="/test" class="text-blue-800 hover:text-blue-600 transition-colors duration-300">Start Test</router-link>
            </li>
            <li>
              <router-link to="/history" class="text-blue-800 hover:text-blue-600 transition-colors duration-300">History</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>
