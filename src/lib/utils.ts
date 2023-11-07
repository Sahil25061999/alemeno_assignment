import { CourseApplied, Student } from "../lib/types";

const getDueDate = (enrolledOn: string, duration: string) => {
  const date = new Date(enrolledOn);
  date.setDate(date.getDate() + Number(duration.split(" ")[0]) * 7);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Add 1 to the month because it's zero-based
  const day = date.getDate().toString().padStart(2, "0");
  
  return `${day}/${month}/${year}`;
};

export const getCourseEndDate = (student: Student) => {
  return {
    ...student,
    courseApplied: [
      ...student.courseApplied.map((item: CourseApplied) => {
        item.dueDate = getDueDate(item.enrolledOn, item.duration);
        return item;
      }),
    ],
  };
};
