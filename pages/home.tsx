import { NextPage } from "next";
import React from "react";
import StudentList from "../components/student-list";

const HomePage: NextPage = () => {
  return (
    <div>
      <StudentList />
    </div>
  );
};

export default HomePage;
