import React, { useContext, useState } from "react";
import { StudentContext } from "../context/student";
import StudentForm from "./student-form";

const StudentList = () => {
  const [firstName, setFirstName] = useState<string>("");

  const { students } = useContext(StudentContext);

  return (
    <div>
      <div className="grid gap-4 grid-cols-4">
        {students.map((student) => (
          <div className="border">
            <p>
              {student.firstName} {student.lastName}
            </p>
          </div>
        ))}
      </div>
      <StudentForm firstName={firstName} setFirstName={setFirstName} />
    </div>
  );
};

export default StudentList;
