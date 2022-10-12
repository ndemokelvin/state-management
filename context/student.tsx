import { createContext, FC, ReactNode, useState } from "react";
import { faker } from "@faker-js/faker";
import { Student } from "../types";

type StudentContextProps = {
  students: Student[];
  addNewStudent: (student: Student) => void;
};

// Create context and initialize data.
export const StudentContext = createContext<StudentContextProps>({
  students: [],
  addNewStudent: () => {},
});

type StudentContextProviderProps = {
  children: ReactNode;
};

const studentsArray: Student[] = Array.from(Array(10)).map((item) => ({
  firstName: faker.internet.userName(),
  lastName: faker.internet.userName(),
  age: faker.datatype.number(),
  grade: faker.datatype.number(),
  location: "Nairobi",
}));

const StudentContextProvider: FC<StudentContextProviderProps> = ({
  children,
}) => {
  const [students, setStudents] = useState<Student[]>(studentsArray);

  const setStudentLocal = (newStudent: Student) => {
    setStudents([...students, newStudent]);
  };

  return (
    <StudentContext.Provider
      value={{
        students,
        addNewStudent: setStudentLocal,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};

export default StudentContextProvider;
