import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import { BG_URL } from "../utils/constants";
const GptSearch = () => {
  return (
    <>
      <div className="-z-10  fixed  md:pt-0">
        <img
          className="h-screen object-coverv md:pt-0"
          src={BG_URL}
          alt="logo"
        />
      </div>
      <div className="pt-[30%] md:pt-0">
        <GptSearchBar />

        <GptMovieSuggestions />
      </div>
    </>
  );
};
export default GptSearch;
