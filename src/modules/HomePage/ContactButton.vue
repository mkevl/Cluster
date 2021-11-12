<template>
  <b-button class="contact-button" :style="textStyle" @click="onConnectClick">
    <span class="contact-button-text">დაგვიკავშირდი</span>
  </b-button>
</template>

<script>
import {createNamespacedHelpers} from "vuex";

const {mapActions} = createNamespacedHelpers('results');
export default {
  name: "ContactButton",
  props: {
    textStyle: {
      type: Object,
      default: Object => {
      },
    },
  },
  methods: {
    ...mapActions(['showContactModal']),
    async onConnectClick() {
      await this.showContactModal();
    },
  },
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat');

.contact-button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  filter: drop-shadow(0px 20px 40px rgba(10, 226, 159, 0.2));
  border-radius: 16px;
  background: #0AE29F;
  margin: 0 16px;
  padding: 0;
  width: 221px;
  height: 54px;
  border: unset;
}

.contact-button:focus {
  background: #0AE29F !important;
  box-shadow: unset !important;
}

.contact-button-text {
  position: static;
  width: 141px;
  height: 18px;
  font-family: Helvetica, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 18px;
  text-transform: uppercase;
  color: #095A66;
  margin: 0 10px;
}
</style>