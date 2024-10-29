import axios from "axios";

// constants
const BaseURL = "https://mditest.elifeamerica.com";
const ClientId = 4;
const ClientSecret = "sfQfhp6tDeGvEp7ZhVwk0MjbpaP55tJ1oJAKuZAE";
const Scope = "";
const GrantType = "password";

/**
 * User service
 */
const userService = {
  /**
   * Get user
   * @param {string} token - auth token
   * @returns
   */
  getUser: async (token) => {
    try {
      const response = await axios.get(`${BaseURL}/api/v1/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (error) {
      throw new Error("Login failed. Please check your credentials.");
    }
  },
  /**
   * Update a user
   * @param {Object} user - modified user object
   * @param {string} token - auth token
   * @returns
   */
  update: async (user, token) => {
    try {
      const response = await axios.put(`${BaseURL}/api/v1/profile`, user, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (error) {
      throw new Error("Login failed. Please check your credentials.");
    }
  },
  /**
   * Change profile image
   * @param {Object} image - image object
   * @param {string} token - auth token
   * @returns
   */
  changeProfilePicture: async (image, token) => {
    try {
      // create formdata object
      const data = new FormData();
      data.append("profile_image", image);

      const response = await axios.post(
        `https://mditest.elifeamerica.com/api/v1/profile/avatar`,
        data,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      throw new Error("Login failed. Please check your credentials.");
    }
  },
};

export default userService;
