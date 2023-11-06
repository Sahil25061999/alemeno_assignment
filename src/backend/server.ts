import { createServer, Model } from "miragejs";
import { courseModels } from "./models/course.constant";
import { studentModels } from "./models/student.constant";

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
        return schema.students.find(request.params.id);
      });
    },
  });
  return server;
}

export { makeServer };
