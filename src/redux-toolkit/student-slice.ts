import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getCourseEndDate } from "../lib/utils";
import { CourseApplied, Status, Student } from "../lib/types";

interface InitialState {
  students: Array<Student>;
  student: Student | null;
  status: Status;
}

const initialState: InitialState = {
  students: [],
  student: null,
  status: "idle",
};

export const fetchStudents = createAsyncThunk(
  "student/fetchStudents",
  async () => {
    try {
      const res = await axios.get(`/api/v1/students/`);
      return res?.data;
    } catch (e) {
      throw new Error("Error while fetching users");
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
      throw new Error("Error while fetching course")
    }
  }
);

const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    getStudentById: (state, action) => {
      console.log(state.students, action.payload);
      state.student =
        state.students?.find((student) => student?.id === action.payload) ??
        null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudents.fulfilled, (state, action) => {
        state.status = "idle";
        const students = action.payload.students.map((student:Student) => getCourseEndDate(student))
        state.students = students;
      })
      .addCase(fetchStudents.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchStudents.rejected, (state) => {
        state.status = "rejected";
      })
      .addCase(markCourse.fulfilled, (state, action) => {
        state.student = getCourseEndDate(action.payload.student);
      });
  },
});

export const { getStudentById } = studentSlice.actions;
export default studentSlice.reducer;
