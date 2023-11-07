import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Course, Status } from "../lib/types";


interface InitialState{
  courses:Array<Course | null>;
  status:Status;
}

const initialState:InitialState = {
  courses: [],
  status: "idle",
};

export const fetchCourses = createAsyncThunk(
  "courses/fetchCourses",
  async () => {
    try {
      const res = await axios.get("/api/v1/courses");
      return res?.data;
    } catch (e) {
      return;
    }
  }
);

const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.status = "idle";
        state.courses = action.payload?.courses;
      })
      .addCase(fetchCourses.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchCourses.rejected, (state) => {
        state.status = "rejected";
      })
  },
});

export default courseSlice.reducer;
