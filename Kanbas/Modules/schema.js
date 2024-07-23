import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ModuleSchema = new Schema({
    name: String, 
    description:  String,
    course:  String, 
    lessons: [{
        id:  String, 
        name:  String, 
        description:  String, 
        module:  String, 
    }]
},
{collection: 'modules'});

export default ModuleSchema;
