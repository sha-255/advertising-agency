<template>
  <header class="VPNav" style="background: #303030; border-radius: 10px">
    <div class="VPNavBar">
      <div class="wrapper">
        <div class="container">
          <router-link :to="'/'">
            <div class="title">
              <img
                src="../../public/promIcon.svg"
                alt="Промысел"
                style="width: 60px; margin: 10px"
              />
              <span class="title1">Промысел</span>
            </div>
          </router-link>
          <div class="content1">
            <div class="content-body">
              <div class="VPNavBarMenu">
                <a href="/" class="VPNavBarMenuLink" style="font-size: 16px"
                  >Выйти</a
                >
                <a href="/" class="VPNavBarMenuLink" style="font-size: 16px"
                  >Профиль</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div>
    <div class="tiket-container">
      <div class="tiket" v-for="post in posts" :key="post.id">
        <div class="content-body">
          <span class="VPNavBarMenuLink" style="font-size: large">{{
            post.id
          }}</span>
          <span>{{ post.address }}</span>
        </div>
        <hr />
        <the-shift :postId="post.id"></the-shift>
        <hr />
        <span class="date-time">{{
          post.createdAt.split("T")[0].replaceAll("-", " ")
        }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
// model Post {
//   id Int @id @default(autoincrement())
//   createdAt DateTime @default(now())
//   userId Int
//   adressId Int
// }

// model Shift {
//   id Int @id @default(autoincrement())
//   postId Int
//   isOpen Boolean
//   createdAt DateTime @default(now())
//   description String?
//   image String?
// }

// model Address {
//   id Int @id @default(autoincrement())
//   content String
// }
import TheShift from "./the-shift.vue";
import { onMounted, ref } from "vue";
import { API_STR } from "../api/auth";

onMounted(async () => {
  await getPosts();
});

const posts = ref([]);

const getPosts = async () => {
  const raw = await fetch(API_STR + "posts");
  posts.value = await raw.json();
};

// const getPostById = async (id) => {
//   return await (await fetch("http://localhost/posts/" + id)).json();
// };
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

.tiket-container {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.tiket {
  display: flex;
  flex-direction: column;
  background: #303030;
  width: 100%;
  padding: 10px 0px 10px 0px;
  border-radius: 10px;
  margin: 10px 0px 10px 0px;
}

.VPNav {
  position: relative;
  top: var(--vp-layout-top-height, 0px);
  left: 0;
  z-index: var(--vp-z-index-nav);
  width: 100%;
  pointer-events: none;
  transition: background-color 0.5s;
}

.VPNavBar {
  position: relative;
  height: var(--vp-nav-height);
  pointer-events: none;
  white-space: nowrap;
  transition: background-color 0.5s;
}

.wrapper {
  padding: 0 32px;
  padding: 0 5px;
}

.container {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: calc(var(--vp-layout-max-width) - 64px);
  height: var(--vp-nav-height);
  pointer-events: none;
}

.title {
  display: flex;
  flex-shrink: 0;
  height: calc(var(--vp-nav-height) - 1px);
  transition: background-color 0.5s;
}

.title1 {
  display: flex;
  align-items: center;
  border-bottom: 1px solid transparent;
  width: 100%;
  height: 64px;
  font-size: 16px;
  font-weight: 600;
  color: rgba(255, 255, 245, 0.86);
  transition: opacity 0.25s;
}

.content1 {
  flex-grow: 1;

  align-items: center;
  align-content: center;
  justify-content: space-around;
}

.content-body {
  justify-content: flex-start;
  align-items: center;
  align-content: center;

  display: flex;
  /*justify-content: flex-end;*/
  align-items: center;
  height: var(--vp-nav-height);
  transition: background-color 0.5s;
}

.VPNavBarMenu {
  display: flex;
}

.VPNavBarMenuLink {
  display: flex;
  align-items: center;
  padding: 0 12px;
  line-height: var(--vp-nav-height);
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-1);
  transition: color 0.25s;
}
</style>
