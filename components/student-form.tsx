import React, { FC, useContext } from "react";
import { faker } from "@faker-js/faker";
import { StudentContext } from "../context/student";

type StudentFormProps = {
  firstName: string;
  setFirstName: (value: string) => void;
};

const StudentForm: FC<StudentFormProps> = ({ firstName, setFirstName }) => {
  const { addNewStudent } = useContext(StudentContext);

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    addNewStudent({
      firstName,
      lastName: faker.internet.userName(),
      age: faker.datatype.number(),
      grade: faker.datatype.number(),
      location: "Nairobi",
    });
    setFirstName("");
  };

  return (
    <div className="mt-10">
      <form onSubmit={onSubmit}>
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="border border-gray-600 rounded mr-3"
        />
        <button type="submit" className="bg-green-800 text-white text-md p-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default StudentForm;

// Parent -> Child -> Child Child -> Child Child Child
