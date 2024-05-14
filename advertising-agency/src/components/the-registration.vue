<template>
  <transition name="slide">
    <div class="center">
      <div>
        <router-link :to="'/'">
          <arrow-up class="logo arrow" />
        </router-link>
        <div class="tagline mr center">Создание аккаунта</div>
      </div>
      <input type="text" placeholder="Логин" class="input mr" />
      <input type="password" placeholder="Пароль" class="input mr" />
      <input type="password" placeholder="Повторите пароль" class="input mr" />
      <a href="/" class="button alt Button alt mr">Создать</a>
    </div>
  </transition>
</template>

<script setup>
import ArrowUp from "../svg/arrow-up.vue";
</script>
