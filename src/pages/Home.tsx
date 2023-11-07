import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCourses } from "../redux-toolkit/courseSlice";
import { AppDispatch, RootState } from "../redux-toolkit/store";
import { EmptyList } from "../components/index.component";

export const Home = () => {
  const { courses, status } = useSelector((state: RootState) => state.course);
  const searchInput = useSelector(
    (state: RootState) => state.search.searchInput
  );

  const dispatch = useDispatch<AppDispatch>();

  const filteredList =
    courses?.length > 0
      ? courses.filter((item) => {
          return (
            item?.name.toLowerCase().includes(searchInput.toLowerCase()) ||
            item?.instructor.toLowerCase().includes(searchInput.toLowerCase())
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
    <div>
      <h1 className="text-4xl font-semibold">Courses</h1>
      <div className="course__container py-4">
        {filteredList?.length > 0 ? (
          filteredList.map((course) => (
            <div className="mb-4 p-4 bg-zinc-900 rounded-3xl" key={course?.id}>
              <h3 className="text-red-400 text-2xl font-medium">
                {course?.name}
              </h3>
              <p className="text-xl">{course?.instructor}</p>
              <p>{course?.description}</p>
              <Link state={course} to={`/details/${course?.id}`}>
                <button className="px-4 py-2 mt-2 bg-white text-gray-950 rounded-full">
                  View More
                </button>
              </Link>
            </div>
          ))
        ) : (
          <EmptyList status={status} />
        )}
      </div>
    </div>
  );
};
