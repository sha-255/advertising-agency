<template>
  <div class="shift" v-if="post?.shifts[0]">
    <h3>Открытие смены</h3>
    <span class="description">{{
      post?.shifts[0]?.description
        ? post?.shifts[0]?.description
        : "Описание отсутствует"
    }}</span>
    <img :src="post?.shifts[0]?.image" alt="shift photo" style="width: 500px" />
    <span class="date-time">{{
      post?.shifts[0]?.createdAt.split("T")[1].split(".")[0]
    }}</span>
  </div>
  <hr v-if="post?.shifts[1]" />
  <div class="shift" v-if="post?.shifts[1]">
    <h3>Закрытие смены</h3>
    <span class="description">{{
      post?.shifts[1]?.description
        ? post?.shifts[1]?.description
        : "Описание отсутствует"
    }}</span>
    <img :src="post?.shifts[1]?.image" alt="shift photo" style="width: 500px" />
    <span class="date-time">{{
      post?.shifts[1]?.createdAt.split("T")[1].split(".")[0]
    }}</span>
  </div>
</template>

<script setup>
import { defineProps, watch, onMounted, ref, computed } from "vue";
import { API_STR } from "../api/auth";

const props = defineProps(["postId"]);
const post = ref();

onMounted(async () => {
  console.log(props.postId);
  post.value = await (await fetch(API_STR + "posts/" + props.postId)).json();
  console.log(post.value);
});
</script>

<style scoped>
.description {
  background: #5c5c5c;
  margin: 10px;
  border-radius: 10px;
  padding: 10px;
}

.shift {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.date-time {
  display: flex;
  align-content: flex-start;
  font-size: small;
  color: #5c5c5c;
  font-weight: bold;
  margin: 0px 10px 0px 10px;
}

h3 {
  margin: 0;
}

hr {
  width: 100%;
  display: block;
  height: 1px;
  border: 0;
  border-top: 3px solid #242424;
  margin: 1em 0;
  padding: 0;
}
</style>
