<template>
  <div class="center">
    <span class="gr">Промысел</span>
    <p class="text">Рекламное агенство</p>
    <p class="tagline">
      {{ adress }}
    </p>
    <div class="actions center">
      <div class="action">
        <router-link class="button brand logo" :to="'/registration'"
          >Регистрация</router-link
        >
      </div>
      <div class="action">
        <router-link class="button alt logo alt" :to="'/sign-in'"
          >Вход</router-link
        >
      </div>
    </div>
  </div>
</template>

<script setup>
//gr/text/tagline/input
//button brand logo
//button alt logo alt
//button alt Button alt
import { ref } from "vue";

const adress = ref(
  "644014, Омская область, город Омск, 4-я Новая ул., д.25 к.а"
);
</script>
