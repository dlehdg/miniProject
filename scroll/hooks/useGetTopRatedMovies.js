const { useInfiniteQuery } = require("@tanstack/react-query");

const fetchTopRatedMovies = async (page) => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?page=${page}`, {
        headers: {
            Authorization : `Bearer ${process.env.REACT_APP_API_KEY}`
        }
    });
    return response.json()

};

const useGetTopRatedMovies = () => {
    return useInfiniteQuery({
        queryKey: ['top-rated-movie'],
        queryFn: ({pageParam}) => {
            return fetchTopRatedMovies(pageParam);
        },
        getNextPageParam:(last) => {
            
        }


    })
}