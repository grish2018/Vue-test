<template>
  <div @click="handleClick" class="conversationItem" v-bind:class="{ 'active': isActive}">
    <router-link class="conversationItem__link" :to="`/${id}`">
      <!-- <a @click.prevent="handleClick" class="conversationItem__link"> -->
      <div class="conversationItem__title">
        <span class="conversationItem__subject">{{subject}}</span>
        <span class="conversationItem__date">{{date}}</span>
      </div>
      <p class="conversationItem__text">{{cutedMessage}}</p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "ConversationItem",
  methods: {
    handleClick() {
      this.$store.dispatch("setCurrentConversation", this.id);
    },
  },
  computed: {
    isActive() {
      return this.id === Number(this.$route.params.id);
    },
    cutedMessage() {
      if (this.text.length > 20) {
        return `${this.text.slice(0, 20)}...`;
      } else {
        return this.text;
      }
    },
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.conversationItem {
  display: flex;
  flex-direction: column;
  height: 14%;
  border: 1px solid #e9edf2;
}
.conversationItem__link {
  text-decoration: none;
}
.conversationItem__title {
  width: 100%;
  display: flex;
  margin-top: 20px;
}
.conversationItem__subject {
  font-family: TT Norms;
  font-size: 14px;
  line-height: 20px;
  color: #35383d;
  margin-left: 40px;
  width: 50%;
}
.conversationItem__date {
  width: 50%;
  font-family: TT Norms;
  font-size: 10px;
  line-height: 14px;
  text-align: right;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #b7c0c8;
  margin-right: 40px;
}
.conversationItem__text {
  margin-left: 40px;
  font-family: TT Norms;
  font-size: 13px;
  line-height: 18px;
  color: #7d8790;
}
.conversationItem:hover {
  background: #ffffff;
  border-left: 4px solid #398bff;
}
.active {
  background: #ffffff;
  border-left: 4px solid #398bff;
}
</style>