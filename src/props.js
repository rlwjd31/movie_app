import React from "react";
import PropTypes from "prop-types";
// import Potato from "./Potato";

// App에서 지정한 prop를 Food에서 가져오려면 props를 매개변수로 넣어주어야 한다.

// props.fav를 해도 되지만 es6에서는 props를 가져오는 것이 당연하므로
// { name of props}를 해주면 된다. like { fav } -> props.fav
// { fav }말고 {props}로 하고 h1 tag 안에 {props.fav}를 해줘도 된다.
function Food( {name, img, rating} ){  
  return(
    <div>
      <h1>I Like {name}</h1>
      <img src={img} alt={name}/>
      <h4> 평점 : {rating} / 5.0</h4>
    </div>
  )
}


Food.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
  // rating: PropTypes.number이면 number 또는 정의하지 않아도 된다.
};

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
    "https://cdn.imweb.me/thumbnail/20200415/6b6e035658bac.png",
    rating: 5
  },
  {
    id: 2,
    name: "Samgyeopsla",
    image:
      "http://www.mindgil.com/news/photo/202103/70839_7148_1250.jpg",
    rating: 4.9
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Dolsot-bibimbap.jpg/220px-Dolsot-bibimbap.jpg",
    rating: 4.8
  },
  {
    id: 4,
    name: "Doncasu",
    image:
      "https://mblogthumb-phinf.pstatic.net/MjAxNzA1MDNfMTU2/MDAxNDkzODIyODY4MDEz.KHxOf0Kw6m7CSQlJkFPRUts0UQpTjwjs7ab55KzctM0g.PNEt5UbtICqzi1VDmDPMUhmR5PDKTvesg3uU6CSyFPEg.JPEG.stveiry/DSCN7592.JPG?type=w800",
    rating: 4.7
  },
  {
    id: 5,
    name: "kimbap",
    image:
      "https://recipe1.ezmember.co.kr/cache/recipe/2016/06/29/e7401296033ab8e4297cd53d71e1bba91.jpg",
    rating: 5.5
  },
]

function renderFood(dish){
  return (
  <Food key={dish.id} name={dish.name} img={dish.image} rating={dish.rating} />
  );
}

function App(){
  return(
    <div>
      <h1>Hello!!</h1>
      {foodILike.map(renderFood)}
    </div>
  )
}

export default App;


// // React는 id="root"인 안에 모든 요소를 생성한다.
// // 자바스크립트와 함께 만들고 이것들을 HTML로 밀어 넣는다.
// function App() {
//   return (
//     <div>
//       <h1>Hello!!!</h1>
//       {/* jsx */}
//       <Potato />
//     </div>
//   )
// }

// export default App;


// // component는 HTML을 반환하는 함수이다.
// // App.js에서 Potato Component를 가져오는 것 즉, jsx는 js안의 HTML이다.