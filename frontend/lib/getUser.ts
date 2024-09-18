import axios from "axios";

const API_URI = `https://techmart-y7g6.onrender.com`;

export const getUserData = async () => {
  if (typeof window !== "undefined") {
    const sessionToken = localStorage.getItem("session_token");
    if (sessionToken) {
      try {
        const response = await axios.get(`${API_URI}/user`, {
          headers: {
            Authorization: `Bearer ${sessionToken}`,
          },
        });
        return response.data;
      } catch (error) {
        console.error("Error fetching user data:", error);
        return null;
      }
    }
  }
  return null;
};

export const handleLogout = () => {
  localStorage.removeItem("session_token");
  window.location.href = "/login";
};
