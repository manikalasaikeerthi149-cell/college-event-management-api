exports.getStudents = (req, res) => {
    res.json({
        message: "All Students"
    });
};

exports.addStudent = (req, res) => {
    res.status(201).json({
        message: "Student Added Successfully",
        student: req.body
    });
};

exports.updateStudent = (req, res) => {
    res.json({
        message: "Student Updated",
        id: req.params.id
    });
};

exports.deleteStudent = (req, res) => {
    res.json({
        message: "Student Deleted",
        id: req.params.id
    });
};