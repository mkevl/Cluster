<template>
  <div v-if="show" class="d-flex flex-column justify-content-center align-items-center fullscreen-spinner"
       :style="spinnerStyle">
    <div class="text-center">
      <b-spinner :variant="variant"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "spinner",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    variant: {
      type: String,
      default: 'info'
    },
    spinnerStyle: {
      type: Object,
      default: () => {
        return {
          backgroundColor: '#FFFFFF'
        }
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.fullscreen-spinner {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
}

/deep/ .spinner-border {
  width: 5rem;
  height: 5rem;
}
</style>