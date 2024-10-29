import { createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../../lib/api/feature-auth/authService";

/**
 * login action
 */
export const login = createAsyncThunk("auth/login", async (credentials) => {
  try {
    // get login response
    const response = await authService.login(credentials);
    return response;
  } catch (error) {
    throw new Error("Login failed. Please check your credentials.");
  }
});

/**
 * logout action
 */
export const logout = createAsyncThunk("auth/logout", async () => {
  try {
    // return empty value
    return null;
  } catch (error) {
    throw new Error("Login failed. Please check your credentials.");
  }
});

/**
 * Access user from auth function
 */
export const accessUser = createAsyncThunk("auth/authorize", async (token) => {
  try {
    const response = await authService.authorize(token);
    return response;
  } catch (error) {
    throw new Error("Authorization failed. Please check your credentials.");
  }
});
