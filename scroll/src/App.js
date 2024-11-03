import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import useGetTopRatedMovies from '../hooks/useGetTopRatedMovies';

function App() {

  const {data, isLoading, error, fetchNextPage, hasNextPage, isFetchingNextPage} = useGetTopRatedMovies();
  const [test, setTest] = useState(null);
  // const data = {pages : [1,2,3]}
  // const {ref, inView} = useInView()
  
  // useEffect(() => {
  //   console.log(inView);
  //   if(inView == true && hasNextPage && !isFetchingNextPage)
  //   fetchNextPage()
    
  // }, [inView])

  return (
    <div className="App">
      {data?.pages.map((page, index) => 
        page.results.map((movie) => (
          
          <image src = {`https://image.tmdb.org/t/p/w500${movie.poster_path}`}></image>
        ))
      )}
      
      {/* <h1 ref={ref}>테스트</h1> */}
    </div>
  );
}

export default App;
