import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../redux-toolkit/store";
import { useEffect } from "react";
import { getStudentById, markCourse } from "../redux-toolkit/student-slice";
import { EmptyList } from "../components/index.component";
import { CourseApplied, Syllabus } from "../lib/types";

export const StudentDashboard = () => {
  const { id = "" } = useParams();
  const { student: studentDetails, students } = useSelector(
    (state: RootState) => state.student
  );
  const { courseApplied = null } = studentDetails ?? {};
  const status = useSelector((state: RootState) => state.student.status);
  const dispatch = useDispatch<AppDispatch>();

  const markCourseCompleted = async (courseId: CourseApplied["id"]) => {
    try {
      await dispatch(
        markCourse({ courseId, studentId: id, param: true })
      ).unwrap();
    } catch (e) {
      console.error(e);
    }
  };

  const ProgressBar = ({ syllabus }: { syllabus: Array<Syllabus> }) => {
    return (
      syllabus && (
        <div className="flex flex-row justify-between items-center my-2 relative overflow-hidden">
          <div className="line absolute w-[96%] h-[2px] bg-gray-500 bottom-[15%] left-5"></div>
          {syllabus.map((week) => (
            <div className=" flex flex-col justify-center items-center">
              <p>Week {week.week}</p>
              <div className=" w-full flex items-center justify-center bg-zinc-900 z-10 mt-2">
                <div
                  className={` h-4 w-4 rounded-full ${
                    week.completed ? "bg-green-400" : " bg-gray-500"
                  }`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      )
    );
  };

  useEffect(() => {
    dispatch(getStudentById(id));
  }, [id, dispatch, students]);

  return (
    <div>
      <h1 className=" text-4xl font-semibold">Enrolled Courses</h1>
      <div className="py-4">
        {courseApplied && courseApplied.length > 0 ? (
          courseApplied.map((course: CourseApplied) => {
            return (
              <div
                className="mb-4 py-4 px-5 bg-zinc-900 rounded-3xl flex gap-3 max-md:flex-col"
                key={course?.id}
              >
                <div className=" w-1/4 max-md:w-full max-md:max-h-[200px] overflow-hidden ">
                  <img
                    className=" h-full w-full object-contain "
                    src={course?.thumbnail}
                    alt="course-image"
                  />
                </div>
                <div className="w-full">
                  <div className="flex flex-row justify-between items-center">
                    <h3 className=" text-red-400 text-2xl font-medium">
                      {course?.name}
                    </h3>
                    {course.completed ? (
                      <div className=" border rounded-full px-4 py-3 font-semibold bg-green-400 text-green-950 ">
                        Completed
                      </div>
                    ) : (
                      <button
                        onClick={() => markCourseCompleted(course.id)}
                        className=" border rounded-full px-4 py-3 font-semibold"
                      >
                        Mark Completed
                      </button>
                    )}
                  </div>
                  <p className=" text-xl">{course.instructor}</p>
                  <p>Due date: {course.dueDate}</p>
                  <ProgressBar syllabus={course.syllabus} />
                </div>
              </div>
            );
          })
        ) : (
          <EmptyList status={status} />
        )}
      </div>
    </div>
  );
};
