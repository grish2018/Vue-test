<template>
  <div :class="classToggle">
    <div class="message__content">
      <div class="message__text">
        <p class="message__textContent">{{text}}</p>
      </div>
      <div class="message__info">
        <span class="message__sender">{{sender|uppercase}}</span>
        <span class="message__date">{{date}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Message",
  filters: {
    uppercase(value) {
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
  },
  computed: {
    classToggle: function () {
      return this.userId === 1 ? "message" : "userMessage";
    },
  },
  props: {
    text: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    sender: {
      type: String,
      required: true,
    },
    userId: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style>
.message {
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 8px;
}
.userMessage {
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  padding: 8px;
}
.message__content {
  width: 60%;
  display: flex;
  flex-direction: column;
}
.message__text {
  background: #e9f5f4;
  border-radius: 8px 8px 8px 8px;
  display: inline-block;
  padding: 0px 6px;
}
.message__textContent {
  overflow-wrap: anywhere;
  font-family: TT Norms;
  font-size: 14px;
  line-height: 141.62%;
  color: #475453;
}
.message__sender {
  font-family: TT Norms;
  font-size: 13px;
  line-height: 141.62%;
  color: #000000;
  margin-right: 12px;
}
.message__date {
  font-family: TT Norms;
  font-size: 10px;
  line-height: 141.62%;
  color: #b7c0c8;
}
</style>