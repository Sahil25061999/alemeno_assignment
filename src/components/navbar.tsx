import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../redux-toolkit/store";
import { setSearchInput } from "../redux-toolkit/searchSlice";
import { Student } from "../lib/types";
import { fetchStudents } from "../redux-toolkit/studentSlice";

export const Navbar = () => {
  const searchInput = useSelector(
    (state: RootState) => state.search.searchInput
  );
  const students = useSelector((state: RootState) => state.student.students);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchInput(e.target.value));
  };

  const handleStudentSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    navigate(`/students/${e.target.value}`);
  };

  const getStudents = async () => {
    try {
      await dispatch(fetchStudents()).unwrap();
  
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getStudents();
  }, []);

  return (
    <nav className="flex flex-row justify-between items-center gap-2 max-md:flex-col">
      <div className=" flex flex-row">
        <Link to="/">
          <p>Course4U</p>
        </Link>
      </div>
      <div className="flex items-center gap-2 max-md:flex-col">
        <div className="search__container  border rounded-full  p-2 max-md:w-1/8">
          <input
            value={searchInput}
            placeholder="Search course name, instructor"
            className="bg-transparent outline-none px-4 max-md:px-2 w-full"
            type="text"
            name="searh"
            id="search"
            onChange={handleSearchInput}
          />
        </div>
        <select className="bg-transparent" onChange={handleStudentSelect}>
          <option selected hidden disabled>
            Dashboard
          </option>
          {students &&
            students.map((student: Student) => {
              return (
                <option
                  className=" text-slate-900"
                  key={student.id}
                  value={student.id}
                >
                  {student.name}
                </option>
              );
            })}
        </select>
      </div>
    </nav>
  );
};
