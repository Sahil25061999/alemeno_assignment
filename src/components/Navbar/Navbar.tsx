import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux-toolkit/store";
import { setSearchInput } from "../../redux-toolkit/searchSlice";
export const Navbar = () => {
  const searchInput = useSelector(
    (state: RootState) => state.search.searchInput
  );
  const dispatch = useDispatch();
  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchInput(e.target.value));
  };
  return (
    <nav className="flex flex-row justify-between items-center">
      <div className=" flex flex-row">
        <Link to="/">
          <p>Course4U</p>
        </Link>
      </div>
      <div className="search__container  border rounded-full p-2">
        <input
          value={searchInput}
          placeholder="course name, instructor"
          className="bg-transparent outline-none px-4"
          type="text"
          name="searh"
          id="search"
          onChange={handleSearchInput}
        />
        {/* <button className="  bg-white rounded-full px-4 py-2 text-black">Search</button> */}
      </div>
    </nav>
  );
};
