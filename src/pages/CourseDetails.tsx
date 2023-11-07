import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Syllabus } from "../schemes/shared";

export const CourseDetails = () => {
  const [week, setWeek] = useState(0);
  const { state: course } = useLocation();
  const handleViewMore = (week: number) => {
    setWeek((prev)=> prev === week ? 0 : week);
    
  };
  console.log(week)
  return (
    <div className="mb-4 p-4 bg-zinc-900 rounded-3xl" key={course?.id}>
      <h3 className=" text-red-400 text-4xl font-medium">{course?.name}</h3>
      <p className=" text-lg text-slate-400">
        Instructor: Taught by{" "}
        <span className="text-white">{course.instructor}</span>
      </p>
      <p className=" my-4">{course.description}</p>
      <p className="text-slate-400">
        Duration: <span className="text-white">{course.duration}</span>
      </p>
      <p className="text-slate-400">
        Schedule: <span className="text-white">{course.schedule}</span>
      </p>
      <p className="text-slate-400">
        Location: <span className="text-white">{course.location}</span>
      </p>
      <p className="text-slate-400">
        Pre-requisite:{" "}
        {course.prerequisites.map((prerequisite: string) => (
          <span className="text-white">{prerequisite}, </span>
        ))}
      </p>
      <div className=" my-4">
        <h4 className="text-lg mb-2">Syllabus</h4>
        {course?.syllabus?.length > 0 &&
          course.syllabus.map((item: Syllabus) => (
            <div key={item.week} className=" p-4 bg-black mb-1 rounded-lg ">
              <p>Week {item.week}</p>
              <h2 className="text-2xl">{item.topic}</h2>
              <button
                onClick={() => handleViewMore(item.week)}
                className=" text-blue-700 underline"
              >
                View More
              </button>
              {  week === item.week ? (
                <div
                className="transition-all duration-500"
                // style={{
                //   height: week === item.week ? "auto" : 0,
                //   overflow:'hidden',
                //   transition:week === item.week ? "all 300ms cubic-bezier(0.4, 0, 0.2, 1)":"all",
                // }}
                >
                  <p>{item.content}</p>
                </div>
               ) : null}
            </div>
          ))}
      </div>
    </div>
  );
};
