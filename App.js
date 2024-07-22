// import "dotenv/config";
// import express from 'express';
// import mongoose from "mongoose";
// import UserRoutes from "./User/routes.js";
// import Hello from "./Hello.js";
// import Lab5 from "./Lab5/index.js";
// import CourseRoutes from './Kanbas/Courses/routes.js';
// import ModuleRoutes from './Kanbas/Modules/routes.js';
// import cors from "cors";
// import AssignmentsRoutes from './Kanbas/Courses/Assignments/routes.js';

// const CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || "mongodb://127.0.0.1:27017/kanbas"
// // mongoose.connect(CONNECTION_STRING);

// mongoose.connect(CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log('MongoDB connected');
//   })
//   .catch(err => {
//     console.error('MongoDB connection error:', err);
//   });

// const app = express();
// app.use(cors());
// app.use(express.json());
// UserRoutes(app);
// CourseRoutes(app);
// ModuleRoutes(app);
// AssignmentsRoutes(app);
// Lab5(app);
// Hello(app);
// app.listen(process.env.PORT || 4000);



import "dotenv/config";
import express from 'express';
import mongoose from "mongoose";
import UserRoutes from "./User/routes.js";
import Hello from "./Hello.js";
import Lab5 from "./Lab5/index.js";
import CourseRoutes from './Kanbas/Courses/routes.js';
import ModuleRoutes from './Kanbas/Modules/routes.js';
import cors from "cors";
import AssignmentsRoutes from './Kanbas/Courses/Assignments/routes.js';

const CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || "mongodb://127.0.0.1:27017/kanbas";

// console.log(`Connecting to MongoDB with connection string: ${CONNECTION_STRING}`);

mongoose.connect(CONNECTION_STRING, {
})
  .then(() => {
    console.log(` MongoDB connected : ${CONNECTION_STRING}`);
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });

const app = express();
app.use(cors());
app.use(express.json());
UserRoutes(app);
CourseRoutes(app);
ModuleRoutes(app);
AssignmentsRoutes(app);
Lab5(app);
Hello(app);
app.listen(process.env.PORT || 4000);
