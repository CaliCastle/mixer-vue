import Vue from "vue";

// Import components
import Instructions from "./components/Instructions";

// Bind Vue instance
const app = new Vue({
  components: { Instructions },
  data: {
    message: "Mixer + Vue"
  },
  watch: {
    message: function(newValue, oldValue) {
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
    window.mixer.isLoaded();
  }
});

// Mount it to DOM
app.$mount("#app");