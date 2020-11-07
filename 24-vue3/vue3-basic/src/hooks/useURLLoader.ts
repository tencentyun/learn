import { ref } from 'vue'
import axios from 'axios'

function useURLLoader<T>(url: string){
  const result = ref<T | null>(null)
  const loadingType = ref(true)
  const error = ref(null)

  axios.get(url).then((res) => {
    result.value = res.data
    loadingType.value = false
  }).catch(e => {
    error.value = e
  })

  return {
    result,
    loadingType
  }
}

export default useURLLoader