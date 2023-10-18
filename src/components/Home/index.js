import{useEffect, useState} from 'react'
import Movie from '../Movie'
import './index.css'

const Home=()=>{
    const[datam,setData]=useState({results:[]})

    useEffect(()=>{
        const api='https://api.themoviedb.org/3/movie/popular?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1'

        fetch(api)
        .then(res=>res.json())
        .then(data=>{setData(data)

        })
        // console.log(data)
    },[])

    const getMovies=()=>{
      // console.log(datam)

      return(
        
        <ul className="movie-cont mt-4">
          {datam.results.map((e)=>(
            <Movie key={e.id} title={e.title} poster_path={e.poster_path} vote_average={e.vote_average}
            />
           
          ))}
        </ul>
      
      )
    }



    return(
        <div className='bg-dark main-class'>
        <nav class="navbar navbar-expand-lg navbar-light bg-secondary">
  <a class="navbar-brand text-light" href="#">MovieDB</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link text-light" href="#">Popular <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-light" href="#">Top Rated</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled text-light" href="#">upcoming</a>
      </li>
      </ul>
    
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-light my-2 my-sm-0 text-light" type="submit">Search</button>
    </form>
  </div>
</nav>
   
   {getMovies()}

</div>


    )
}
export default Home