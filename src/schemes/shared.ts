export type Status = "idle" | "pending" | "rejected";


export interface Syllabus {
  week: number;
  topic: string;
  content: string;
  completed: boolean;
}
export interface Course {
  id: string;
  name: string;
  instructor: string;
  description: string;
  enrollmentStatus: "open" | "closed" | "in progress";
  thumbnail: string;
  duration: string;
  location: string;
  prerequisites: Array<string>;
  syllabus: Array<Omit<Syllabus, "completed">>;
  students: Array<Omit<Student, "courseApplied">>;
}

export interface CourseApplied extends Course {
  enrolledOn: string;
  dueDate: string;
  duration: string;
  completed: boolean;
  syllabus: Array<Syllabus>;
}

export interface Student {
  id: string;
  name: string;
  email: string;
  courseApplied: Array<CourseApplied>;
}
