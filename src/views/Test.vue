<template>
  <div class="p-4">
    <h1 class="text-3xl font-bold mb-6 text-blue-950 text-center">English Proficiency Test</h1>

    <div class="mb-8">
      <div class="bg-white bg-opacity-30 rounded-full h-4 w-full">
        <div
          class="bg-joyful-pink h-4 rounded-full transition-all duration-500 ease-out"
          :style="{ width: `${(currentQuestion / questions.length) * 100}%` }"
        ></div>
      </div>
      <p class="text-blue-950 text-center mt-2">
        Question {{ currentQuestion + 1 }} of {{ questions.length }}
      </p>
    </div>

    <div v-if="currentQuestion < questions.length">
      <QuestionCard
        :question="questions[currentQuestion]"
        :questionIndex="currentQuestion"
      />
    </div>

    <div v-else class="text-center">
      <p class="text-2xl mb-4 text-white">You've completed the test!</p>
      <button
        @click="finishTest"
        class="bg-joyful-yellow text-joyful-blue py-3 px-8 rounded-full text-xl font-bold hover:bg-joyful-pink hover:text-white transition-colors duration-300 transform hover:scale-105"
      >
        See Results
      </button>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import QuestionCard from '@/components/QuestionCard.vue'
import questions from '@/data/questions.json'

export default {
  name: 'Test',
  components: {
    QuestionCard
  },
  setup() {
    const store = useStore()
    const router = useRouter()

    const currentQuestion = computed(() => store.getters.getCurrentQuestion)

    const finishTest = () => {
      store.dispatch('finishTest')
      router.push('/results')
    }

    return {
      questions,
      currentQuestion,
      finishTest
    }
  }
}
</script>
