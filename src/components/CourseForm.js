import { useState } from "react";
import useCourseStore from "../app/courseStore";

export default function CourseForm() {
  const addCourse = useCourseStore((state) => state.addCourse);
  const removeCourse = useCourseStore((state) => state.removeCourse);

  const [courseTitle, setCourseTitle] = useState("");
  console.log("Course form rendered...");

  const handleCourseSubmit = (e) => {
    e.preventDefault();
    if (courseTitle) {
      addCourse({ id: Date.now(), title: courseTitle, completed: false });
      setCourseTitle("");
    } else {
      alert("Please add a course title...");
    }
  };

  return (
    <div className="form-container">
      <input
        type="text"
        className="form-input"
        value={courseTitle}
        placeholder={`Type Course Title here...`}
        onChange={(e) => setCourseTitle(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            handleCourseSubmit(e);
          }
        }}
      />
      <button className="form-submit-btn" onClick={handleCourseSubmit}>
        Add Course
      </button>
    </div>
  );
}
