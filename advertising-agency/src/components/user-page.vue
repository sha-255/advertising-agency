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
                <a href="/" class="VPNavBarMenuLink" style="font-size: 16px"
                  >Мои посты</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <!-- / -->
  <div>
    <div class="tiket-container">
      <!-- <div class="tiket">
        <div class="content-body">
          <span class="VPNavBarMenuLink" style="font-size: large">Иван</span>
          <span>Проспект Карла Маркса</span>
        </div>
        <hr />
        <div class="shift">
          <h3>Открытие смены</h3>
          <span class="description">Описание отсутствует</span>
          <img
            src="https://i.imgur.com/b7vk4aj.png"
            alt="shift photo"
            style="width: 500px"
          />
          <span class="date-time">12:43</span>
        </div>
        <hr />
        <div class="shift">
          <div>
            <router-link :to="'/'">
              <arrow-up class="logo arrow" />
            </router-link>
            <div class="tagline mr center mga"></div>
          </div>
          <h3>Закрытие смены</h3>
          <input
            type="text"
            placeholder="Описание"
            class="input mr"
            style="width: 300px"
          />
          <div style="display: flex; flex-direction: row; align-items: center">
            <span>Прикрепите изображение с мета отчёта</span>
            <input
              type="file"
              class="input mr button alt Button alt mr"
              style="width: 250px"
            />
          </div>
          <a href="/" class="button alt Button alt mr">Добавить</a>
        </div>
        <hr />
        <span class="date-time">13.05.2024</span>
      </div> -->
      <!-- / -->
      <div class="tiket">
        <div class="center">
          <div>
            <router-link :to="'/'">
              <arrow-up class="logo arrow" />
            </router-link>
            <div class="tagline mr center mga"></div>
          </div>
          <!-- <select class="input mr" name="pets" id="pet-select">
            <option value="parrot">Выберите адрес</option>
            <option value="parrot">Parrot</option>
            <option value="spider">Spider</option>
            <option value="goldfish">Goldfish</option>
          </select> -->
          <h2>Создание поста</h2>
          <input
            type="text"
            placeholder="Адрес"
            class="input mr"
            v-model="address"
          />
          <a class="button alt Button alt mr" @click="sendPost">Добавить</a>
          <hr />
          <h2>Добавление смены</h2>
          <div>
            <div>
              <input
                type="radio"
                name="drone"
                checked
                @change="isOpenChecked"
              />
              <label><b>Открытие</b></label>
            </div>
            <div>
              <input type="radio" name="drone" @change="isCloseChecked" />
              <label><b> Закрытие</b></label>
            </div>
          </div>
          <input
            type="text"
            placeholder="Описание"
            class="input mr"
            v-model="description"
          />
          <div style="display: flex; flex-direction: row; align-items: center">
            <span><b>Прикрепите изображение с мета отчёта</b></span>
            <input
              type="file"
              multiple=""
              accept="image/jpeg, image/png"
              class="input mr button alt Button alt mr"
              style="width: 250px"
              @change="previewFiles"
            />
          </div>
          <a class="button alt Button alt mr" @click="addShift">Добавить</a>
        </div>
      </div>
      <!-- <div class="tiket">
        <div class="content-body">
          <span class="VPNavBarMenuLink" style="font-size: large">Иван</span>
          <span>Проспект Карла Маркса</span>
        </div>
        <hr />
        <div class="shift">
          <h3>Открытие смены</h3>
          <span class="description">Описание отсутствует</span>
          <img
            src="https://i.imgur.com/b7vk4aj.png"
            alt="shift photo"
            style="width: 500px"
          />
          <span class="date-time">12:43</span>
        </div>
        <hr />
        <div class="shift">
          <h3>Закрытие смены</h3>
          <span class="description">Описание отсутствует</span>
          <img
            src="https://i.imgur.com/VWEDW5V.png"
            alt="shift photo"
            style="width: 500px"
          />
          <span class="date-time">17:45</span>
        </div>
        <hr />
        <span class="date-time">13.05.2024</span>
      </div> -->
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
import { ref } from "vue";
import { getCookie } from "../utils";
import { API_STR } from "../api/auth";

const userId = ref(1);
const address = ref("");

const isOpen = ref(true);
const description = ref("");
const image = ref();

const currentPostId = ref(Number(getCookie("currentPost")));

window.cp = currentPostId.value;

const previewFiles = (e) => {
  console.log(e.target.files[0].size);
  if (e.target.files[0].size > 26_214) {
    alert("Изображение слишком большое!");
    return;
  }
  const img = e.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(img);
  reader.onload = (e) => {
    image.value = e.target.result;
    console.log(isOpen.value, image.value);
  };
};

const isOpenChecked = () => {
  isOpen.value = true;
  console.log(isOpen.value);
};

const isCloseChecked = () => {
  isOpen.value = false;
  console.log(isOpen.value);
};

const sendPost = async () => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    userId: userId.value,
    address: address.value,
  });

  const requestOptions = {
    method: "POST",
    headers: headers,
    body: raw,
    redirect: "follow",
  };

  try {
    const response = await fetch(API_STR + "posts", requestOptions);
    const result = await response.text();
    document.cookie = "currentPost=" + result;
    alert("Пост успешно создан, теперь добавте смену");
  } catch (error) {
    console.error(error);
  }
};

const addShift = async () => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  console.log(image.value);
  const raw = JSON.stringify({
    isOpen: isOpen.value,
    description: description.value,
    image: image.value,
  });

  const requestOptions = {
    method: "POST",
    headers: headers,
    body: raw,
    redirect: "follow",
  };

  try {
    const response = await fetch(
      API_STR + "posts/" + currentPostId.value,
      requestOptions
    );
    const result = await response.text();
    alert("Смена успешно добавленна!");
  } catch (error) {
    console.error(error);
  }
};
</script>

<style scoped>
.description {
  background: #5c5c5c;
  margin: 10px;
  border-radius: 10px;
  padding: 10px;
}

h3 {
  margin: 0;
}

.date-time {
  display: flex;
  align-content: flex-start;
  font-size: small;
  color: #5c5c5c;
  font-weight: bold;
  margin: 0px 10px 0px 10px;
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

.shift {
  display: flex;
  flex-direction: column;
  align-items: center;
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
