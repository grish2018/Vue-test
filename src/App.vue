<template>
  <div id="app">
    <Conversations />
    <router-view />
  </div>
</template>

<script>
import Conversations from "./components/Conversations.vue";
import { mapGetters } from "vuex";
export default {
  name: "App",
  components: { Conversations },
  computed: mapGetters(["currentConversation"]),
  created: function () {
    const { id: currUrlConvId } = this.$route.params;
    const { id: currConvId } = this.currentConversation;

    if (!currUrlConvId) {
      this.$router.push({ name: "messages", params: { id: currConvId } });
    } else {
      this.$store.dispatch("setCurrentConversation", currUrlConvId);
    }
  },
};
</script>

<style>
body {
  display: flex;
  margin: 0;
  padding: 0;
}
#app {
  display: flex;
  width: 100%;
  height: 100vh;
}
</style>
