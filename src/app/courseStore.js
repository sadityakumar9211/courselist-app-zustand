import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

//creating the structure of the store
const courseStore = (set) => {
  return {
    courses: [],
    addCourse: (course) => {
      set((state) => ({
        //state gives the most updated state of the store
        courses: [...state.courses, course], //the callback function is returning the object.
      }));
    },
    removeCourse: (courseId) => {
      set((state) => ({
        courses: state.courses.filter((c) => c.id !== courseId),
      }));
    },
    toggleCourseStatus: (courseId) => {
      set((state) => ({
        courses: state.courses.map((c) =>
          c.id === courseId ? { ...c, completed: !c.completed } : c
        ),
      }));
    },
  };
};

//creating the store
const useCourseStore = create(
  devtools(
    persist(courseStore, {
      name: "courses",
    //   getStorage: () => localStorage,
    })
  )
);

export default useCourseStore;
