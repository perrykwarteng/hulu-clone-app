import { IoChevronForwardSharp } from "react-icons/io5"
import GenresList from "../Constant/GenresList"
import MovieList from "./MovieList"

const GenereMovieList = () => {
  return (
    <div className="mt-24 p-10 px-10 md:px-20">
        {GenresList.genere.map((item: any,index: number)=>
       index <=4 && ( <div>
          <h2 className="text-white text-[23px] font-bold">{item.name} <span className="font-normal text-[16px] cursor-pointer text-gray-400 flex items-center float-right ">VIEW ALL <IoChevronForwardSharp className="text-white ml-1" /> </span></h2>
          <MovieList genereId={item.id}/>
        </div>)
        )}
    </div>
  )
}

export default GenereMovieList