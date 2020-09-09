<template>
  <div class="messages">
    <loading :active="loaderIsActive" :is-full-page="false" />
    <MessagesContent :data="currentConversation.parts" />
    <MessagesForm />
  </div>
</template>
<script>
import MessagesForm from "../components/MessagesForm.vue";
import MessagesContent from "../components/MessagesContent.vue";
import { mapGetters } from "vuex";
import Loading from "vue-loading-overlay";

export default {
  name: "Messages",
  data() {
    return {
      fullPage: false,
    };
  },
  components: { MessagesContent, MessagesForm, Loading },
  computed: mapGetters(["currentConversation", "loaderIsActive"]),
};
</script>

<style scoped>
.messages {
  position: relative;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  width: 70%;
}
</style>