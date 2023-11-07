import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./course-slice";
import searchReducer from "./search-slice";
import studentReducer from './student-slice';
export const store = configureStore({
  reducer: {
    course: courseReducer,
    search: searchReducer,
    student:studentReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
