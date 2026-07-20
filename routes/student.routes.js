const express = require("express");
const router = express.Router();

const studentController = require("../controllers/student.controller");
const validateStudent = require("../middleware/validation");

router.get("/", studentController.getStudents);

router.post("/", validateStudent, studentController.addStudent);

router.put("/:id", studentController.updateStudent);

router.delete("/:id", studentController.deleteStudent);

module.exports = router;