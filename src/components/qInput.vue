<template>
  <div class="base-input-wraper">
    <input
      v-bind="$attrs"
      v-on="$listeners"
      class="q-input"
      :style="style"
      :value="value"
      :size="size"
      @input="$emit('input', $event)"
    />
  </div>
</template>
<script>
const sizeList = {
  medium: "36px",
  small: "32px",
  mini: "28px",
};

export default {
  name: "QInput",
  props: {
    value: String,
    width: {
      type: Number,
      default: 270,
    },
    size: {
      type: String,
      default: "medium",
    },
    inputStyle: {
      type: Object,
      default: () => {
        return {
          height: '40px',
          width: '300px'
        }
      }
    },
    color: {
      type: String,
      default: 'blue'
    }
  },
  computed: {
    style() {
      this.$set(this.inputStyle, 'border-color', this.color)
      return this.inputStyle
    }
  },
};
</script>
<style lang="stylus" scoped>
.base-input-wraper {
  .q-input /deep/ {
  
  }
}
</style>