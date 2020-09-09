<template>
  <div class="messages__content" ref="messagesContainer">
    <div class="message__wrapper">
      <Message
        v-for="(item, index) in data"
        :key="index.toString()"
        :text="item.text"
        :date="item.created"
        :sender="item. author"
        :userId="item.userId"
      />
    </div>
  </div>
</template>

<script>
import Message from "./Message.vue";
export default {
  name: "MessagesContent",
  components: { Message },
  updated() {
    this.$nextTick(() => this.scrollToEnd());
  },
  methods: {
    scrollToEnd: function () {
      const content = this.$refs.messagesContainer;
      content.scrollTop = content.scrollHeight;
    },
  },
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.messages__content {
  height: 88%;
  overflow-y: auto;
}
.message__wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 100%;
}
</style>