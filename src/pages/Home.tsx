import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from "../redux-toolkit/courseSlice";
import { AppDispatch, RootState } from "../redux-toolkit/store";
export const Home = () => {
  const courses: Array<{
    id: string | number;
    name: string;
    instructor: string;
  }> = useSelector((state: RootState) => state.course.courses);
  const searchInput = useSelector(
    (state: RootState) => state.search.searchInput
  );

  const dispatch = useDispatch<AppDispatch>();

  const filteredList =
    courses?.length > 0
      ? courses.filter((item) => {
          return (
            item.name.toLowerCase().includes(searchInput.toLowerCase()) ||
            item.instructor.toLowerCase().includes(searchInput.toLowerCase())
          );
        })
      : [];

  useEffect(() => {
    (async () => {
      try {
        dispatch(fetchCourses()).unwrap();
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);
  return (
    <main className=" py-4 text-left">
      <h1 className=" text-4xl font-semibold">Courses</h1>
      {filteredList?.length > 0 &&
        filteredList.map((course) => (
          <div key={course?.id}>
            <p className=" text-red-400">{course?.name}</p>
            <p>{course.instructor}</p>
          </div>
        ))}
    </main>
  );
};
