import './index.css'

const Movie=(props)=>{
    const {title,poster_path,vote_average }=props
    const image='https://image.tmdb.org/t/p/w500'+poster_path
    return(
        <li className=''>
            <img src={image} className='w-50'/>
            <p className='text-light'>{title}</p>
            <p className='text-light'>Rating:{vote_average}</p>

        </li>

    )
}

export default Movie