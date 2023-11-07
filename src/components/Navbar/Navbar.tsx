import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux-toolkit/store";
import { setSearchInput } from "../../redux-toolkit/searchSlice";
import axios from "axios";
import { Student } from "../../schemes/shared";
export const Navbar = () => {
  const [students, setStudents] = useState([]);
  const searchInput = useSelector(
    (state: RootState) => state.search.searchInput
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchInput(e.target.value));
  };

  const handleStudentSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    navigate(`/student/${e.target.value}`);
  };
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("/api/v1/students");
        setStudents(() => res?.data?.students);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);
  return (
    <nav className="flex flex-row justify-between items-center">
      <div className=" flex flex-row">
        <Link to="/">
          <p>Course4U</p>
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <div className="search__container  border rounded-full p-2">
          <input
            value={searchInput}
            placeholder="Search course name, instructor"
            className="bg-transparent outline-none px-4 max-md:px-2"
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
          {students.map((student: Student) => {
            return (
              <option className=" text-slate-900" key={student.id} value={student.id}>
                {student.name}
              </option>
            );
          })}
        </select>
      </div>
    </nav>
  );
};
