# 🎓 College Event Management API

A RESTful API built with **Node.js**, **Express.js**, and **express-validator** to manage student data with input validation.

---

## 📌 Features

- Add Student
- Get All Students
- Update Student
- Delete Student
- Input Validation using `express-validator`
- REST API
- Tested using Postman

---

## 🛠️ Technologies Used

- Node.js
- Express.js
- express-validator
- Postman
- Git & GitHub

---

## 📁 Project Structure

```text
college-event-management-api/
│── controllers/
│   └── student.controller.js
│── middleware/
│   └── validation.js
│── routes/
│   └── student.routes.js
│── server.js
│── package.json
```

---

## 🚀 Installation

Clone the repository

```bash
git clone https://github.com/your-username/college-event-management-api.git
```

Move into the project folder

```bash
cd college-event-management-api
```

Install dependencies

```bash
npm install
```

Start the server

```bash
node server.js
```

Server runs at:

```
http://localhost:5000
```

---

## 📮 API Endpoints

### Get All Students

```
GET /students
```

### Add Student

```
POST /students
```

Request Body

```json
{
  "name": "Sai Keerthi",
  "email": "saikeerthi@gmail.com",
  "department": "CSE"
}
```

Successful Response

```json
{
  "message": "Student Added Successfully",
  "student": {
    "name": "Sai Keerthi",
    "email": "saikeerthi@gmail.com",
    "department": "CSE"
  }
}
```

Validation Error

```json
{
  "success": false,
  "errors": [
    {
      "field": "name",
      "message": "Name is required"
    },
    {
      "field": "email",
      "message": "Enter a valid email"
    },
    {
      "field": "department",
      "message": "Department is required"
    }
  ]
}
```

---

## 📸 Screenshots

### GET

<img width="1920" height="1080" alt="Screenshot (192)" src="https://github.com/user-attachments/assets/2ff4c14b-d59a-4061-965b-b41f0a2cc15b" />

---

### POST

<img width="1920" height="1080" alt="Screenshot (194)" src="https://github.com/user-attachments/assets/6cbdec7d-d342-407e-a497-2f26bb3e42ca" />

---


## 👨‍💻 Author

**Your Name**

GitHub: https://github.com/manikalasaikeerthi149-cell

---

## ⭐ Output

✔ Student API Created

✔ Input Validation Implemented

✔ REST API Tested Using Postman

✔ Ready for Future Database Integration
