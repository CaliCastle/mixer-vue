import Vue from "vue";

const app = new Vue({
  el: '#app',
  data: {
    message: 'Mixer + Vue!',
  },
  watch: {
    message: function (newValue, oldValue) {
      mixer.socket.call("giveInput", {
        event: "click",
        text: newValue,
        controlID: "new-text"
      });
    }
  },
  methods: {
    clickButton() {
      mixer.socket.call("giveInput", {
        event: "click",
        health: 2,
        controlID: "new-control"
      });
    }
  },
  mounted() {
    mixer.isLoaded();
  }
});