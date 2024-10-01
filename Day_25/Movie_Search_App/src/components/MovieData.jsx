import React from 'react'

function MovieData({data}) {
  // console.log(data[0].poster_path);
  //console.log(typeof data);
  return (
    <div className='flex flex-wrap p-7'>
    <div className='bg-gray-800 h-96 w-64 p-4 m-2 rounded-md'>
      <h1 className="text-xl font-bold text-white">{data[0] && data[0].title}</h1>
      <img className='h-64 w-full p-4' src={data && `https://image.tmdb.org/t/p/original${data[0].poster_path}`} alt="Deadpool & Wolverine Poster" />
      <h1 className="text-xl font-bold text-white">Release_Date : {data[0] && data[0].release_date}</h1>
    </div>
    <div className='bg-gray-800 h-96 w-64 p-4 m-2 rounded-md'>
      <h1 className="text-xl font-bold text-white">{data[1] && data[1].title}</h1>
      <img className='h-64 w-full p-4' src={data && `https://image.tmdb.org/t/p/original${data[1].poster_path}`}alt="Deadpool & Wolverine Poster" />
      <h1 className="text-xl font-bold text-white">Release_Date : {data[1] && data[1].release_date}</h1>
    </div>
    <div className='bg-gray-800 h-96 w-64 p-4 m-2 rounded-md'>
      <h1 className="text-xl font-bold text-white">{data[2] && data[2].title}</h1>
      <img className='h-64 w-full p-4' src={data && `https://image.tmdb.org/t/p/original${data[2].poster_path}`} alt="Deadpool & Wolverine Poster" />
      <h1 className="text-xl font-bold text-white">Release_Date : {data[2] && data[2].release_date}</h1>
    </div>
    <div className='bg-gray-800 h-96 w-64 p-4 m-2 rounded-md'>
      <h1 className="text-xl font-bold text-white">{data[3] && data[3].title}</h1>
      <img className='h-64 w-full p-4' src={data && `https://image.tmdb.org/t/p/original${data[3].poster_path}`} alt="Deadpool & Wolverine Poster" />
      <h1 className="text-xl font-bold text-white">Release_Date : {data[3] && data[3].release_date}</h1>
    </div>
    </div>
    
  )
}

export default MovieData