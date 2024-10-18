function getAccessToken() {
  const storedData = localStorage.getItem("authUser");

  if (storedData) {
    try {
      const obj = JSON.parse(storedData);

      if (obj && obj.accessToken) {
        return obj.accessToken;
      }
    } catch (error) {
      console.error("Error parsing authUser from localStorage:", error);
    }
  }

  return "";
}

const accessToken = getAccessToken();

export default accessToken;
