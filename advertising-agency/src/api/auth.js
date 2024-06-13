export const API_STR = "http://localhost/";

export const signIn = async (login, password) => {
  const raw = await fetch(API_STR + "login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
    },
    body: {
      login,
      password,
    },
  });
  const data = await raw.json();
  return data.access_token;
};

export const registration = async (login, password) => {
  const raw = await fetch(API_STR + "registrate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
    },
    body: {
      login,
      password,
    },
  });
  const data = await raw.json();
  return data.access_token;
};

export const getUserLogin = async (accessToken) => {
  const authHeader = "Bearer " + accessToken;
  const raw = await fetch(API_STR, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
      authorization: authHeader,
    },
  });
  return await raw.json();
};
