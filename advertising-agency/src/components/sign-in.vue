<template>
  <div class="center">
    <div>
      <router-link :to="'/'">
        <arrow-up class="logo arrow" />
      </router-link>
      <div class="tagline mr center mga">Вход</div>
    </div>
    <input type="text" placeholder="Логин" class="input mr" v-model="login" />
    <input
      type="password"
      placeholder="Пароль"
      class="input mr"
      v-model="password"
    />
    <a class="button alt Button alt mr" @click="signIn()">Войти</a>
  </div>
</template>

<script setup>
import ArrowUp from "../svg/arrow-up.vue";
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();
const login = ref("");
const password = ref("");

const signIn = () => {
  if (login.value === "admin" && password.value === "admin") {
    router.push("/admin");
  }
  if (login.value === "user" && password.value === "user") {
    router.push("/user");
  }
};
</script>
