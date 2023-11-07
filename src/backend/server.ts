import { createServer, Model } from "miragejs";
import { courseModels } from "./models/course.constant";
import { studentModels } from "./models/student.constant";
import { CourseApplied, Syllabus } from "../schemes/shared";

function makeServer({ environment = "development" } = {}) {
  const server = createServer({
    environment,
    models: {
      course: Model,
      student: Model,
    },
    seeds(server) {
      for (const course of courseModels) {
        server.create("course", course);
      }
      for (const student of studentModels) {
        server.create("student", student);
      }
    },
    routes() {
      this.namespace = "/api/v1";
      this.get("/courses", (schema) => schema.all("course"));
      this.get("/students/:id", (schema, request) => {
        return schema.find("student",request.params.id);
      });
      this.patch("/students/:id/courseId/:courseId", (schema, request) => {
        const { id: studentId, courseId } = request.params;
        const { completed } = JSON.parse(request.requestBody);
        console.log(completed);
        const user:any = schema.findBy("student", { id: studentId });
        user?.update({
          courseApplied: [
            ...user.courseApplied.map((course: CourseApplied) =>
              course.id === courseId
                ? {
                    ...course,
                    completed: completed,
                    syllabus: [
                      ...course.syllabus.map((syllabus: Syllabus) => {
                        syllabus.completed = completed;
                        return syllabus;
                      }),
                    ],
                  }
                : course
            ),
          ],
        });
        // if (course) {
        //   course.update({ completed });
        // }
        return user;
        // return JSON.stringify(user);
      });
    },
  });
  return server;
}

export { makeServer };
