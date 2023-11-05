export const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between">
      <div className=" flex flex-row">
        {/* <img src="" alt="logo" className="logo" /> */}
        <p>Course4U</p>
      </div>
      <div className="search__container  border rounded-full p-2">
        <input className="bg-transparent outline-none px-4" type="text" name="searh" id="search" />
        <button className="  bg-white rounded-full px-4 py-2 text-black">Search</button>
      </div>
    </nav>
  );
};
