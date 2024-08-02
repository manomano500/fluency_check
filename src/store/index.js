import { createStore } from 'vuex'
import { db } from '@/firebase'
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore'


export default createStore({
  state: {
    user: null
,
    currentQuestion: 0,
    answers: [],
    testCompleted: false,
    proficiencyLevel: null,
    answerHistory: []

  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setCurrentQuestion(state, questionIndex) {
      state.currentQuestion = questionIndex
    },
    addToHistory(state, testResult) {
      state.answerHistory.push(testResult)
    },
    addAnswer(state, answer) {
      state.answers.push(answer)
    },
    completeTest(state) {
      state.testCompleted = true
    },
    setProficiencyLevel(state, level) {
      state.proficiencyLevel = level
    },
    resetTest(state) {
      state.currentQuestion = 0
      state.answers = []
      state.testCompleted = false
      state.proficiencyLevel = null
    }
  },
  actions: {
    submitAnswer({ commit, state }, answer) {
      commit('addAnswer', answer)
      commit('setCurrentQuestion', state.currentQuestion + 1)
    },
    async finishTest({ commit, state }) {
      commit('completeTest')
      // Calculate proficiency level based on answers
      const correctAnswers = state.answers.filter(a => a.correct).length
      const totalQuestions = state.answers.length
      const percentage = (correctAnswers / totalQuestions) * 100

      let level
      if (percentage >= 80) level = 'C1'
      else if (percentage >= 60) level = 'B2'
      else if (percentage >= 40) level = 'B1'
      else if (percentage >= 20) level = 'A2'
      else level = 'A1'

      commit('setProficiencyLevel', level)
      const testResult = {
        date: new Date().toISOString(),
        level,
        score: percentage,
        answers: state.answers
      }
      commit('addToHistory', testResult)


      if (state.user) {
        try {
          await addDoc(collection(db, 'testHistory'), {
            userId: state.user.uid,
            ...testResult
          })
        } catch (error) {
          console.error('Error saving test result:', error)
        }
      }
    },
    },



  getters: {
    getAnswerHistory: (state) => state.answerHistory
,
    isAuthenticated: (state) => !!state.user
,
    getCurrentQuestion: (state) => state.currentQuestion,
    getAnswers: (state) => state.answers,
    isTestCompleted: (state) => state.testCompleted,
    getProficiencyLevel: (state) => state.proficiencyLevel
  }
})