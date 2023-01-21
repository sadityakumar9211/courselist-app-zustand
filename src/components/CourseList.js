import React from "react";
import useCourseStore from "../app/courseStore";

export default function CourseList() {
  const { courses, removeCourse, toggleCourseStatus } = useCourseStore(
    (state) => ({
      courses: state.courses,
      removeCourse: state.removeCourse,
      toggleCourseStatus: state.toggleCourseStatus,
    })
  );
  return (
    <>
      <ul>
        {courses.length > 0 ? (
          courses.map((course, index) => (
            <React.Fragment key={index}>
              <li
                className="course-item"
                style={{
                  backgroundColor: course.completed ? "#ff0044" : "white",
                }}
              >
                <span className="course-item-col-1">
                  <input
                    type="checkbox"
                    checked={course.completed}
                    onChange={(e) => {
                      toggleCourseStatus(course.id);
                    }}
                    
                  />
                </span>
                <span style={{ color: "black" }}>{course.title}</span>
                <button
                  className="delete btn"
                  onClick={() => {
                    removeCourse(course.id);
                  }}
                >
                  Delete
                </button>

                {(e) => {
                  removeCourses(course.id);
                }}
              </li>
            </React.Fragment>
          ))
        ) : (
          <div>No courses to Show</div>
        )}
      </ul>
    </>
  );
}
