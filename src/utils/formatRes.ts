import { CourseApplied, Student } from "../schemes/shared";

export const getCourseEndDate = (studentData: Array<Student>) => {
  return studentData.map((student) => ({
    ...student,
    courseApplied: [
      ...student.courseApplied.map((item: CourseApplied) => {
        const date = new Date(item.enrolledOn);
        date.setDate(date.getDate() + Number(item.duration.split(" ")[0]) * 7);
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Add 1 to the month because it's zero-based
        const day = date.getDate().toString().padStart(2, "0");
        item.dueDate = `${day}/${month}/${year}`;
        return item;
      }),
    ],
  }));
};

export const formattedResp = (student: Student) => {

  return {
    ...student,
    courseApplied: [
      ...student.courseApplied.map((item: CourseApplied) => {
        const date = new Date(item.enrolledOn);
        date.setDate(date.getDate() + Number(item.duration.split(" ")[0]) * 7);
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Add 1 to the month because it's zero-based
        const day = date.getDate().toString().padStart(2, "0");
        item.dueDate = `${day}/${month}/${year}`;
        return item;
      }),
    ],
  };
};
