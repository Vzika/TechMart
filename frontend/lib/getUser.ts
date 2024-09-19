import axios from "axios";


export const getUserData = async () => {
  if (typeof window !== "undefined") {
    const sessionToken = sessionStorage.getItem("session_token");
    if (sessionToken) {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URI}/user`, {
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
  sessionStorage.removeItem("session_token");
  window.location.href = "/login";
};
