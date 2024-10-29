import axios from "axios";

// constants
const BaseURL = "https://mditest.elifeamerica.com";
const ClientId = 4;
const ClientSecret = "sfQfhp6tDeGvEp7ZhVwk0MjbpaP55tJ1oJAKuZAE";
const Scope = "";
const GrantType = "password";

/**
 * Registration service
 */
const registrationService = {
  /**
   * Check the email exist already
   * @param {string} email 
   */
  checkAvailability: function (email) {
    return new Promise((resolve, reject) => {
        axios.get(`https://mditest.elifeamerica.com/api/v1/email/check/${value}`)
            .then((res) => {
                resolve(!res.data.result.exist)
            })
            .catch((error) => {
                if (error.response.data.content === "The email has already been taken.") {
                    resolve(false);
                }
            })
    })
  },
  /**
   * Register a user
   * @param {Object} user - user object from form (6 fileds sholud be required)
   * @returns
   */
  register: async (user) => {
    try {
      // create formdata object using user object
      const userModified = new FormData();
      userModified.append("email", user.email);
      userModified.append("first_name", user.first_name);
      userModified.append("last_name", user.last_name);
      userModified.append("password", user.password);
      userModified.append("confirm_password", user.confirm_password);
      userModified.append("dob", `1994-01-16`);
      userModified.append("mobile_number", `0${user.local_number}`);
      userModified.append("gender", "male");

      const response = await axios.post(
        `https://mditest.elifeamerica.com/api/v1/register`,
        userModified,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data;
    } catch (error) {
      throw new Error("Login failed. Please check your credentials.");
    }
  },
};

export default registrationService;
