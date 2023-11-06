import { createServer, Model } from "miragejs";
import { courseModels } from "./models/course.contant";
import { userModels } from "./models/user.constant";

function makeServer({ environment = "development" } = {}) {
  let server = createServer({
    environment,
    models: {
      course: Model,
      user: Model,
    },
    seeds(server) {
      for (let course of courseModels) {
        server.create("course", course);
      }
      for (let user of userModels) {
        server.create("user", user);
      }
    },
    routes() {
      this.namespace = "/api/v1";
      this.get("/courses", (schema) => schema.courses.all());
    },
  });
  return server;
}

export { makeServer };
