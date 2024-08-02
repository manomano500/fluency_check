<!-- src/views/History.vue -->
<template>
  <div class="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-lg p-6">
    <h1 class="text-3xl font-bold mb-6 text-joyful-blue">Test History</h1>
    <div v-if="answerHistory.length > 0">
      <div v-for="(test, index) in answerHistory" :key="index" class="mb-8 border-b pb-4">
        <h2 class="text-2xl font-semibold mb-2">Test {{ index + 1 }}</h2>
        <p><strong>Date:</strong> {{ new Date(test.date).toLocaleString() }}</p>
        <p><strong>Level:</strong> {{ test.level }}</p>
        <p><strong>Score:</strong> {{ test.score.toFixed(2) }}%</p>
        <h3 class="text-xl font-semibold mt-4 mb-2">Questions and Answers:</h3>
        <ul class="list-disc pl-6">
          <li v-for="(answer, answerIndex) in test.answers" :key="answerIndex"
              :class="{ 'text-green-600': answer.correct, 'text-red-600': !answer.correct }">
            <p><strong>Question {{ answerIndex + 1 }}:</strong> {{ questions[answerIndex].text }}</p>
            <p class="ml-4">Your answer: {{ answer.answer }}</p>
            <p v-if="!answer.correct" class="ml-4">Correct answer: {{ questions[answerIndex].correctAnswer }}</p>
          </li>
        </ul>
      </div>
    </div>
    <p v-else class="text-xl">No test history available.</p>
  </div>
</template>

<!-- src/views/History.vue -->
<script>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import questions from '@/data/questions.json'

export default {
  name: 'Histori',
  setup() {
    const store = useStore()
    const answerHistory = computed(() => store.getters.getAnswerHistory)
    const isAuthenticated = computed(() => store.getters.isAuthenticated)

    onMounted(() => {
      if (isAuthenticated.value) {
        store.dispatch('loadUserHistory')
      }
    })

    return {
      answerHistory,
      questions,
      isAuthenticated
    }
  }
}
</script>