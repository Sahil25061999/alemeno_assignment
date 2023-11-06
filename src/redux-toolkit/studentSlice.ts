import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  student: {},
  status: "idle",
};

export const fetchStudent = createAsyncThunk(
  "student/fetchStudent",
  async (id: number | string) => {
    try {
      const res = await axios.get(`/api/v1/students/${id}`);
      return res?.data;
    } catch (e) {
      return;
    }
  }
);

const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudent.fulfilled, (state, action) => {
        state.status = "idle";
        state.student = action.payload?.student;
      })
      .addCase(fetchStudent.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchStudent.rejected, (state) => {
        state.status = "rejected";
      });
  },
});

export default studentSlice.reducer;
