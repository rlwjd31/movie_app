// Movie.js는 동적 data를 다루지 않으므로(state를 다룰 필요가 없다.) function component를 활용한다.

import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie({id, year, title, summary, poster, genres}){
    return(
        <div className="movie">
            <img src={poster} alt={title} title={title} />
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <ul className="genres">
                    {genres.map((genre, index) => (
                        <li key={index} className="genres__genre">{genre}</li>))}
                </ul>
                <p className="movie__summary">{summary}</p>
                {/* 
                    style component 사용(아래 참조)
                    <h3 class="movie__title" style={{backgroundColor: "red"}}>{title}</h3>
                    와 같이 하지만 선호하지는 않으면 Movie.css 파일에서 css를 구현하자!!
                */}
            </div>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    // medium_cover_image
    poster: PropTypes.string.isRequired,
    // 배열안에 있는 data type이 string이여야 한다는 건가...?
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;