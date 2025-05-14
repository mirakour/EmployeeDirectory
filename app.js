import express from "express"
const app = express()
import employees from "#db/employees"

// GET /
app.get("/", (req, res) => {
  res.send("Hello employees!")
});

// GET /employees
app.get("/employees", (req, res) => {
  res.send(employees)
});

// GET /employees/random
app.get("/employees/random", (req, res) => {
  if (employees.length === 0) {
    return res.status(404).send("No employees available.")
  }
  const randomIndex = Math.floor(Math.random() * employees.length);
  const randomEmployee = employees[randomIndex]
  res.json(randomEmployee)
});

// GET /employees/:id
app.get("/employees/:id", (req, res) => {
  const id = Number(req.params.id);
  const found = employees.find((employee) => employee.id === id)

  if (found) {
    res.json(found)
  } else {
    res.status(404).send("That id does not exist in the employees.")
  }
});

export default app;