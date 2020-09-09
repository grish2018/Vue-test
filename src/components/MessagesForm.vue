<template>
  <div class="messages__form">
    <form @submit.prevent="sendMessage">
      <textarea
        @keydown.enter.exact.prevent
        @keyup.enter.exact="sendMessage"
        v-model="newText"
        placeholder="Введите текст..."
      ></textarea>
      <div class="vector">
        <button type="submit">
          <Vector />
        </button>
      </div>
    </form>
  </div>
</template>


<script>
import Vector from "@/assets/vector.svg";
import { mapMutations } from "vuex";
import moment from "moment";
export default {
  name: "MessagesForm",
  components: { Vector },
  data() {
    return {
      newText: "",
    };
  },
  methods: {
    ...mapMutations(["setNewMessage"]),
    sendMessage() {
      if (this.newText.trim()) {
        this.setNewMessage({
          id: 1,
          userId: 1,
          author: "vasya",
          text: this.newText,
          created: moment().format("YYYY-MM-DD h:mm:ss"),
        });
        this.newText = "";
      } else {
        return false;
      }
    },
  },
};
</script>

<style scoped>
.messages__form {
  height: 12%;
  width: 100%;
  display: flex;
}
form {
  display: flex;
  width: 100%;
  height: 100%;

  box-sizing: border-box;
}

textarea {
  padding: 30px;
  font-family: TT Norms;
  resize: none;
  outline: none;
  border: none;
  width: 88%;
  height: 100%;
  box-sizing: border-box;
  border-top: 2px solid #e9edf2;
}
.vector {
  width: 12%;
  height: 100%;
  background: #398bff;
}
button {
  width: 100%;
  height: 100%;
  box-shadow: inset 0px -3px 7px 0px #29bbff;
  background-color: #398bff;
  cursor: pointer;
  border: none;
  outline: none;
}
button:hover {
  background: linear-gradient(to bottom, #0688fa 5%, #2dabf9 100%);
  background-color: #0688fa;
}
</style>