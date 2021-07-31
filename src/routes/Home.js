import React from "react";
import axios from "axios";
import Movie from "../component/Movie";
import "./Home.css";

class Home extends React.Component {
    state = {
        isLoading: true,
        movies: [],
    };

    getMovies = async () => {
        // es6에서는 아래 code처럼 하지 않는다.
        // const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
        // console.log(movies.data.data.movies);

        // es6 version
        // api refer를 보면 param을 볼 수 있는데 평점을 기준으로 정렬하는 것이 있다.
        const {
            data: {
                data: { movies },
            },
        } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
        // 1번 째 movies는 state의 movies이고 2번 째 movies는 const movies이다.
        // this.setState({movies: movies})
        // 위의 code는 아래와 같이 할 수 있다.
        // this.setState({movies});
        console.log(movies);
        this.setState({ movies, isLoading: false });
    };

    componentDidMount() {
        this.getMovies();
    }

    render() {
        const { isLoading, movies } = this.state;
        return (
            <section className="container">
                {isLoading ? (
                    <div className="loader">
                        <span className="loader__text">Loading...</span>
                    </div>
                ) : (
                    <div className="movies">
                        {movies.map((movie) => {
                            return (
                                <Movie
                                    key={movie.id}
                                    id={movie.id}
                                    year={movie.year}
                                    title={movie.title}
                                    summary={movie.summary}
                                    poster={movie.medium_cover_image}
                                    genres={movie.genres}
                                />
                            );
                        })}
                    </div>
                )}
            </section>
        );
    }
}

export default Home;

// data를 fetch하는 것은 fetch()를 사용하면 되지만 axios로 진행한다.
// axios는 마치 fetch위에 있는 작은 layer와 같은 존재이다.
// axios를 사용하기 위해서는 npm install axios를 해야한다.

// axios.get()은 오래 걸리기 때문에 js에게 끝날때까지 기다리라고 알려주어야 한다.
// await를 이용하는데 await axios.get("https://yts-proxy.now.sh/list_movies.json")와 같다.
// await를 하기 위해서는 async를 써주어야 한다. async를 이용해 await를 하면 javascript는 axios.get()이 끝날때까지 기다려준다.
