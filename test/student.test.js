const test = require("node:test");
const assert = require("node:assert");
const Student = require("../models/Student");

test("Student model should have required fields", () => {
    const paths = Student.schema.paths;

    assert.ok(paths.name);
    assert.ok(paths.email);
    assert.ok(paths.course);
    assert.ok(paths.age);
});