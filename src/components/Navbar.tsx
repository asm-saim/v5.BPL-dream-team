import NavImage from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="bg-blue-200">
      <nav className="flex justify-between max-w-6xl mx-auto p-1">
        <img src={NavImage} alt="" />
        <div className="flex gap-24 items-center">
          <ul className="flex items-center gap-8 text-blue-900">
            <li>Home</li>
            <li>Fixture</li>
            <li>Teams</li>
            <li>Schedules</li>
          </ul>
          <button className="btn bg-blue-800 border-none">Coin</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
