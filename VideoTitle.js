const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video pt-[20%] px-6 md:px-24  absolute text-white bg-gradient-to-r from-black">
      <h1 className="md:text-6xl text-2xl font-bold"> {title}</h1>
      <p className="py-6  hidden  md:inline-block text-lg w-2/4">{overview}</p>
      <div className="my-4 md:0">
        <button className="bg-white hover:bg-opacity-80  bg-opacity-50   rounded-lg text-black py-1 px-3 md:py-4 text-xl ">
          {" "}
          ▶️Play
        </button>
        <button className="bg-white md:inline-block hidden mx-2 bg-opacity-50  hover:bg-opacity-80   rounded-lg text-black   px-5 text-xl">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;
