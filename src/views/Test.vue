<template>
  <div class="test">
   <q-input></q-input>
  </div>
</template>
<script>
import qInput from '../components/qInput.vue'

export default {
  components: { qInput },
  name: 'Test',
  data() {
    return {
      key: ''
    }
  },
  created() {
  }
}
</script>