<!-- src/views/Results.vue -->
<template>
  <div class="text-center">
    <h1 class="text-4xl font-bold mb-6 text-white">Your Test Results</h1>
    <div class="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-lg p-8 shadow-lg">
      <p class="text-2xl mb-4">Your English proficiency level is:</p>
      <p class="text-6xl font-bold text-joyful-blue mb-8">{{ proficiencyLevel }}</p>
      <p class="text-xl mb-8">{{ levelDescription }}</p>

      <h2 class="text-2xl font-bold mb-4">Question Review:</h2>
      <div v-for="(answer, index) in answers" :key="index" class="mb-4 text-left">
        <p class="font-semibold">Question {{ index + 1 }}: {{ questions[index].text }}</p>
        <p class="ml-4" :class="answer.correct ? 'text-green-600' : 'text-red-600'">
          Your answer: {{ answer.answer }}
          <span v-if="!answer.correct">(Correct: {{ questions[index].correctAnswer }})</span>
        </p>
      </div>

      <button
        @click="restartTest"
        class="mt-8 bg-joyful-green text-white py-3 px-8 rounded-full text-xl font-bold hover:bg-joyful-blue transition-colors duration-300 transform hover:scale-105"
      >
        Take the Test Again
      </button>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import questions from '@/data/questions.json'

export default {
  name: 'Results',
  setup() {
    const store = useStore()
    const router = useRouter()

    const proficiencyLevel = computed(() => store.getters.getProficiencyLevel)
    const answers = computed(() => store.getters.getAnswers)

    const levelDescription = computed(() => {
      switch (proficiencyLevel.value) {
        case 'A1': return 'Beginner - You can understand and use basic phrases and expressions.'
        case 'A2': return 'Elementary - You can communicate in simple and routine tasks.'
        case 'B1': return 'Intermediate - You can deal with most situations likely to arise while travelling.'
        case 'B2': return 'Upper Intermediate - You can interact with a degree of fluency and spontaneity.'
        case 'C1': return 'Advanced - You can use language flexibly and effectively for social, academic and professional purposes.'
        default: return ''
      }
    })

    const restartTest = () => {
      store.commit('resetTest')
      router.push('/test')
    }

    return {
      proficiencyLevel,
      levelDescription,
      restartTest,
      answers,
      questions
    }
  }
}
</script>
<!--
<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  name: 'Results',
  setup() {
    const store = useStore()
    const router = useRouter()

    const proficiencyLevel = computed(() => store.getters.getProficiencyLevel)

    const levelDescription = computed(() => {
      switch (proficiencyLevel.value) {
        case 'A1': return 'Beginner - You can understand and use basic phrases and expressions.'
        case 'A2': return 'Elementary - You can communicate in simple and routine tasks.'
        case 'B1': return 'Intermediate - You can deal with most situations likely to arise while travelling.'
        case 'B2': return 'Upper Intermediate - You can interact with a degree of fluency and spontaneity.'
        case 'C1': return 'Advanced - You can use language flexibly and effectively for social, academic and professional purposes.'
        default: return ''
      }
    })

    const restartTest = () => {
      store.commit('resetTest')
      router.push('/test')
    }

    return {
      proficiencyLevel,
      levelDescription,
      restartTest
    }
  }
}
</script>-->
