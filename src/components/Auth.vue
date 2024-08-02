<template>
  <div>
    <button v-if="!user" @click="signIn" class="bg-joyful-blue text-white py-2 px-4 rounded">
      Sign in with Google (Optional)
    </button>
    <div v-else>
      <span>Welcome, {{ user.displayName }}</span>
      <button @click="signOut" class="bg-joyful-pink text-white py-2 px-4 rounded ml-4">
        Sign out
      </button>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import { auth } from '@/firebase'
import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth'

export default {
  name: 'Auth',
  setup() {
    const store = useStore()
    const user = ref(null)

    const signIn = async () => {
      const provider = new GoogleAuthProvider()
      try {
        const result = await signInWithPopup(auth, provider)
        store.commit('setUser', result.user)
      } catch (error) {
        console.error('Error signing in:', error)
      }
    }

    const signOutUser = async () => {
      try {
        await signOut(auth)
        store.commit('setUser', null)
      } catch (error) {
        console.error('Error signing out:', error)
      }
    }

    onMounted(() => {
      auth.onAuthStateChanged((currentUser) => {
        user.value = currentUser
        store.commit("setUser", currentUser);
      })
    })

    return {
      user,
      signIn,
      signOut: signOutUser
    }
  }
}
</script>