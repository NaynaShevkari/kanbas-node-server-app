// import Database from "../Database/index.js";
// export default function CourseRoutes(app) {
//     app.post("/api/courses", (req, res) => {
//         const course = { ...req.body,
//           _id: new Date().getTime().toString() };
//         Database.courses.push(course);
//         res.send(course);
//       });

//       app.delete("/api/courses/:id", (req, res) => {
//         const { id } = req.params;
//         Database.courses = Database.courses.filter((c) => c._id !== id);
//         res.sendStatus(204);
//       });

//       app.put("/api/courses/:id", (req, res) => {
//         const { id } = req.params;
//         const course = req.body;
//         Database.courses = Database.courses.map((c) =>
//           c._id === id ? { ...c, ...course } : c
//         );
//         res.sendStatus(204);
//       });    
    

//   app.get("/api/courses", (req, res) => {
//     const courses = Database.courses;
//     res.send(courses);
//   });
// }


import * as dao from "./dao.js";

export default function CourseRoutes(app) {
  const createCourse = async (req, res) => {
    try {
      const course = req.body;
      delete course._id;
      const newCourse = await dao.createCourse(course);
      res.status(201).json(newCourse);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  };

  const deleteCourse = async (req, res) => {
    try {
      const { id } = req.params;
      const status = await dao.deleteCourse(id);
      res.json(status);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  };

  const findAllCourses = async (req, res) => {
    try {
      const courses = await dao.findAllCourses();
      res.json(courses);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  };

  const findCourseById = async (req, res) => {
    try {
      const { courseId } = req.params;
      const course = await dao.findCourseById(courseId);
      if (course) {
        res.json(course.number);
      } else {
        res.sendStatus(404);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  };

  const updateCourse = async (req, res) => {
    try {
      const { courseId } = req.params;
      console.log(`Received request to update course with ID: ${courseId}`);
      const status = await dao.updateCourse(courseId, req.body);
      console.log(`Update status: ${JSON.stringify(status)}`);
      res.sendStatus(status.modifiedCount ? 204 : 404);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  };

  app.post("/api/courses", createCourse);
  app.get("/api/courses", findAllCourses);
  app.get("/api/courses/:courseId", findCourseById);
  app.put("/api/courses/:courseId", updateCourse);
  app.delete("/api/courses/:id", deleteCourse);
}
