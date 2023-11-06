import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../redux-toolkit/store";
import { useEffect } from "react";

import { fetchStudent } from "../redux-toolkit/studentSlice";

export const StudentDashboard = () => {
  const { id = "" } = useParams();
  const studentDetails = useSelector(
    (state: RootState) => state.student.student
  );
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    (async () => {
      try {
        await dispatch(fetchStudent(id));
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);
  return <div>
    <h1 className=" text-lg">Enrolled Courses</h1>
  </div>;
};
