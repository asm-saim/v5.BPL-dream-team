import BannerImg from "../assets/bg-shadow.png";

const Banner = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div
        className="h-[450px] mt-16 rounded-2xl bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${BannerImg})` }}
      >
        <h1 className="text-white text-4xl font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
      </div>
    </div>
  );
};

export default Banner;
