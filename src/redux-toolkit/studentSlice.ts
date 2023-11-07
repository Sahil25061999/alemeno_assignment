import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { formattedResp } from "../utils/formatRes";
import { CourseApplied, Status, Student } from "../schemes/shared";


interface InitialState {
  student: Student | null;
  status: Status;
}

const initialState: InitialState = {
  student: null,
  status:"idle"
};

export const fetchStudent = createAsyncThunk(
  "student/fetchStudent",
  async (id: string) => {
    try {
      const res = await axios.get(`/api/v1/students/${id}`);
      return res?.data;
    } catch (e) {
      return e;
    }
  }
);

export const markCourse = createAsyncThunk(
  "student/markCourse",
  async ({
    courseId,
    studentId,
    param,
  }: {
    courseId: string;
    studentId: string;
    param: CourseApplied["completed"];
  }) => {
    try {
      const res = await axios.patch(
        `/api/v1/students/${studentId}/courseId/${courseId}`,
        { completed: param }
      );
      return res.data;
    } catch (e) {
      return e;
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
        state.student = formattedResp(action.payload.student);
      })
      .addCase(fetchStudent.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchStudent.rejected, (state) => {
        state.status = "rejected";
      })
      .addCase(markCourse.fulfilled, (state, action) => {
        state.student = formattedResp(action.payload.student);
      });
  },
});

export default studentSlice.reducer;
