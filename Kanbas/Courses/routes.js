import * as dao from "./dao.js";

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


  const findAllCourses = async (req, res) => {
    try {
      const courses = await dao.findAllCourses();
      res.json(courses);
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

  app.get("/api/courses", findAllCourses);
  app.get("/api/courses/:courseId", findCourseById);

  app.post("/api/courses", createCourse);

  app.delete("/api/courses/:id", deleteCourse);
  app.put("/api/courses/:courseId", updateCourse);

}
