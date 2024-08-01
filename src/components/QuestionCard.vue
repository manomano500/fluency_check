<template>
  <div class="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
    <h2 class="text-2xl font-semibold mb-4 text-joyful-blue">{{ question.text }}</h2>
    <div class="space-y-3">
      <div v-for="(option, index) in question.options" :key="index" class="flex items-center">
        <input
          type="radio"
          :id="'option-' + index"
          :name="'question-' + questionIndex"
          :value="option"
          v-model="selectedAnswer"
          class="mr-2 h-5 w-5 text-joyful-green focus:ring-joyful-green"
        >
        <label :for="'option-' + index" class="text-lg">{{ option }}</label>
      </div>
    </div>
    <button
      @click="submitAnswer"
      class="mt-6 bg-joyful-green text-white py-2 px-6 rounded-full hover:bg-joyful-blue transition-colors duration-300 transform hover:scale-105"
      :disabled="!selectedAnswer"
    >
      Submit Answer
    </button>
  </div>
</template>



<script>
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'QuestionCard',
  props: {
    question: {
      type: Object,
      required: true
    },
    questionIndex: {
      type: Number,
      required: true
    }
  },
  setup(props) {
    const store = useStore()
    const selectedAnswer = ref('')

    const submitAnswer = () => {
      store.dispatch('submitAnswer', {
        questionIndex: props.questionIndex,
        answer: selectedAnswer.value,
        correct: selectedAnswer.value === props.question.correctAnswer
      })
      selectedAnswer.value = ''
    }

    return {
      selectedAnswer,
      submitAnswer
    }
  }
}
</script>