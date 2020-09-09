<template>
  <div class="conversations">
    <div class="conversations__header">
      <div>
        <p class="conversations__title">Сообщения</p>
      </div>
      <div>
        <p class="conversation__amount">{{allConversations.length}}</p>
      </div>
    </div>
    <ConversationItem
      v-for="conv in allConversations"
      :key="conv.id"
      :id="conv.id"
      :subject="conv.subject"
      :date="conv.created"
      :text="conv.parts[conv.parts.length - 1].text"
    />
  </div>
</template>

<script>
import ConversationItem from "./ConversationItem.vue";
import { mapGetters } from "vuex";
export default {
  name: "Conversations",

  components: { ConversationItem },
  computed: {
    ...mapGetters(["allConversations"]),
  },
};
</script>

<style scoped>
.conversations {
  flex-flow: column nowrap;
  display: flex;
  flex-direction: column;
  background: #f3f6f8;
  width: 30%;
  overflow-y: auto;
}
.conversations__header {
  display: flex;
  height: 8%;
  border-bottom: 1px solid #e9edf2;
}
.conversations__title {
  margin-left: 40px;
  font-family: TT Norms;
  font-size: 14px;
  line-height: 40px;
  color: #656b77;
}
.conversation__amount {
  margin-left: 45%;
  font-family: TT Norms;
  font-size: 14px;
  line-height: 40px;
  color: #d2d8de;
}
</style>