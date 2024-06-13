export const getCookie = (value) => {
  return (
    (
      document.cookie.match(
        "(^|; )" + encodeURIComponent(value) + "=([^;]+)"
      ) || []
    ).pop() || null
  );
};
