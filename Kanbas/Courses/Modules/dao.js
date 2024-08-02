import moduleModel from "./model.js";  
// import courseModel from "./Courses/model.js"
export const createModule = (courseId, module) => {
    delete module._id;
    const newModule = { ...module, course: courseId };
    newModule.id = new Date().getTime().toString();
    return moduleModel.create(newModule);
}
 
// export const findCourseNumberByCourseId = (courseId) => courseModel.findOne({ courseId, number });
export const findAllModulesbyCourseId = (courseId) =>
    moduleModel.find({ course: courseId });
export const findModuleById = (moduleId) => moduleModel.findById(moduleId);
export const updateModule = (moduleId, module) => moduleModel.updateOne({ _id: moduleId }, { $set: module });
 
export const deleteModule = (moduleId) =>
    moduleModel.deleteOne({ _id: moduleId });