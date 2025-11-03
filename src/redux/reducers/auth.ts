import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { showToast } from '../../utils/toast';
import { baseURL, endpoints } from '../../config/api';


interface AdminloginResponse {
  email: string;
  password?: string;
  otp?: string;
  _id?: string;
}

interface AuthState {
  loading: boolean;
  user: AdminloginResponse| null;
  accessToken: string | null;
  otp?: string | null;
  error: string | null;
}

const initialState: AuthState = {
  loading: false,
  user: null,
  accessToken: null,
  otp: null,
  error: null,
};


// Register
export const registerAdmin = createAsyncThunk(
  'auth/register',
  async (payload: { email: string; password: string }, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await fetch(`${baseURL}/${endpoints.register}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || 'Registration failed');
      showToast(true, 'Registered successfully');
      return fulfillWithValue(result);
    } catch (error: any) {
      showToast(false, error.message);
      return rejectWithValue(error.message);
    }
  }
);


export const loginAdmin = createAsyncThunk(
  'auth/login',
  async (payload: { email: string; password: string }, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await fetch(`${baseURL}/${endpoints.login}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || 'Invalid credentials');

      // Store token
      localStorage.setItem('token', result.access_token);
      showToast(true, 'Login successful');

      return fulfillWithValue(result);
    } catch (error: any) {
      showToast(false, error.message);
      return rejectWithValue(error.message);
    }
  }
);

//  Forget Password
export const forgetPassword = createAsyncThunk(
  'auth/forgetPassword',
  async (payload: { email: string }, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await fetch(`${baseURL}/${endpoints.forgetPassword}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || 'Email not found');
      showToast(true, 'OTP sent successfully');
      return fulfillWithValue(result);
    } catch (error: any) {
      showToast(false, error.message);
      return rejectWithValue(error.message);
    }
  }
);

//  Reset Password
export const resetPassword = createAsyncThunk(
  'auth/resetPassword',
  async (payload: { email: string; password: string; otp: string }, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await fetch(`${baseURL}/${endpoints.resetPassword}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || 'Reset password failed');
      showToast(true, 'Password reset successfully');
      return fulfillWithValue(result);
    } catch (error: any) {
      showToast(false, error.message);
      return rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.accessToken = null;
      state.otp = null;
      state.error = null;
      localStorage.removeItem('token');
      showToast(true, 'Logged out successfully');
    },
  },
  extraReducers: (builder) => {
    // Register
    builder.addCase(registerAdmin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(registerAdmin.fulfilled, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.user = action.payload.user;
    });
    builder.addCase(registerAdmin.rejected, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = action.payload;
    });

    // Login
    builder.addCase(loginAdmin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginAdmin.fulfilled, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.accessToken = action.payload.access_token;
    });
    builder.addCase(loginAdmin.rejected, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = action.payload;
    });

    // Forget Password
    builder.addCase(forgetPassword.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(forgetPassword.fulfilled, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.otp = action.payload.otp;
    });
    builder.addCase(forgetPassword.rejected, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = action.payload;
    });

    // Reset Password
    builder.addCase(resetPassword.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(resetPassword.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(resetPassword.rejected, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;