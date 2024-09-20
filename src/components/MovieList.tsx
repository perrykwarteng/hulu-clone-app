import { useEffect, useRef, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
import MovieCard from "./MovieCard";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

const MovieList = ({ genereId }: any) => {
  useEffect(() => {
    getMovieListByGenereId();
  }, []);

  const elementRef = useRef(null);
  const slideRight= (element:any)=>{
    element.scrollLeft +=500;
  }
  const slideLeft= (element:any)=>{
    element.scrollLeft -=500;
  }

  const [movieList, setMovieList] = useState([]);

  const getMovieListByGenereId = () => {
    GlobalApi.getMovieByGenreId(genereId).then((res) => {
      setMovieList(res.data.results);
    });
  };

  return (
    <div className="flex items-center">
      <IoChevronBackOutline className="text-[40px] mb-[120px] z-10 text-white bg-black p-2 cursor-pointer rounded-full" onClick={()=>slideLeft(elementRef.current)}/>
      <div className="w-full overflow-scroll scroll-smooth overflow-x-auto whitespace-nowrap scrollbar-hide mb-16 ml-[-20px] mr-[-20px]" ref={elementRef}>
        <div>
          {movieList.map(
            (item: any, index) => index < 7 && <MovieCard movie={item} />
          )}
        </div>
      </div>
      <IoChevronForwardOutline className="text-[40px] mb-[120px] text-white bg-black p-2 cursor-pointer rounded-full" onClick={()=>slideRight(elementRef.current)} />
    </div>
  );
};

export default MovieList;
