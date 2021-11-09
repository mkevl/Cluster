<template>
  <b-button class="contact-button" @click="onConnectClick">
    <span class="contact-button-text">დაგვიკავშირდი</span>
  </b-button>
</template>

<script>
export default {
  name: "ContactButton",
  methods: {
    onConnectClick() {

    },
  },
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat');

.contact-button {
  filter: drop-shadow(0px 20px 40px rgba(10, 226, 159, 0.2));
  border-radius: 16px;
  background: #0AE29F;
  margin: 0 16px;
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
  color: #045C41;
  margin: 0 10px;
}
</style>