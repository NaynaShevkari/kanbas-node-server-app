import * as dao from "./dao.js"; 
import * as coursedao from "../dao.js";
export default function ModuleRoutes(app) {
 const createModule = async (req, res) => {
    const { cid } = req.params;
    console.log(req.body)
    const module = await dao.createModule(cid, req.body);
    res.json(module);
  }

  const deleteModule = async (req, res) => {
    try {
      const { mid } = req.params;
      const status = await dao.deleteModule(mid);
      res.json(status);
    } catch (error) {
      console.error(`Error in deleting the module: ${error.message}`);
      res.status(500).json({ error: error.message });
    }
  };

  const findCourseModulesbyCourseId = async (req, res) => {
    try {
      const { cid } = req.params;
      const modules = await dao.findCourseModulesbyCourseId(cid);
      res.json(modules);
    } catch (error) {
      console.error(`Error in finding the module: ${error.message}`);
      res.status(500).json({ error: error.message });
    }
  };

  const findModuleByModuleId = async (req, res) => {
    try {
      const { mid } = req.params;
      const module = await dao.findModuleByModuleId(mid);
      if (module) {
        res.json(module);
      } else {
        res.sendStatus(404);
      }
    } catch (error) {
      console.error(`Error in finding the module: ${error.message}`);
      res.status(500).json({ error: error.message });
    }
  };

   const updateModule = async (req, res) => {
    const { mid } = req.params;
    const status = await dao.updateModule(mid, req.body);
    res.json(status);
  }

  app.post("/api/courses/:cid/modules", createModule);
  app.get("/api/courses/:cid/modules", findCourseModulesbyCourseId);
  app.get("/api/modules/:mid", findModuleByModuleId);
  app.put("/api/modules/:mid", updateModule);
  app.delete("/api/modules/:mid", deleteModule);
}