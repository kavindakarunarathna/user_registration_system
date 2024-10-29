import axios from "axios";

// constants
const BaseURL = "https://mditest.elifeamerica.com";
const ClientId = 4;
const ClientSecret = "sfQfhp6tDeGvEp7ZhVwk0MjbpaP55tJ1oJAKuZAE";
const Scope = "";
const GrantType = "password";

/**
 * Auth service
 */
const authService = {
  /**
   * Login
   * @param {Oblect} credentials - username, password should be included
   * @returns
   */
  login: async (credentials) => {
    try {
      // Create a new FormData object
      const formData = new FormData();
      formData.append("username", credentials.username);
      formData.append("password", credentials.password);
      formData.append("client_id", ClientId);
      formData.append("client_secret", ClientSecret);
      formData.append("scope", Scope);
      formData.append("grant_type", GrantType);

      const response = await axios.post(`${BaseURL}/oauth/token`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return response.data;
    } catch (error) {
      throw new Error("Login failed. Please check your credentials.");
    }
  },
  /**
   * Get user from auth
   * @param {string} token - auth token
   * @returns
   */
  authorize: async (token) => {
    try {
      const response = await axios.post(`${BaseURL}/api/v1/auth/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (error) {
      throw new Error("Login failed. Please check your credentials.");
    }
  },
};

export default authService;
