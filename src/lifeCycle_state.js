import React from 'react';


class App extends React.Component{
  state = {
    isLoading: true
  };

  // 아래 코드와 같다.
  // refresh를 하게 되면 render가 호출되고 나서 componentDidMount가 호출된다.
  // 즉, refresh되는 순간 render와 componentDidMount는 같이 호출됨.
  // 따라서, 우리가 할 일은 componentDidMount에서 data를 fetch하는 것이다.
  // componentDidMount(){
  //   setTimeout(() => {
  //     this.setState(current => ({
  //       isLoading: false
  //     }))
  //   }, 6000) 
  // }

  componentDidMount(){
    setTimeout(() => {
      this.setState({isLoading: false})
    }, 4000);
    console.log('mount')
  }

  render(){
    const {isLoading} = this.state;

    return(
      <div>
        {console.log("render")}
        {isLoading ? "loading" : "We are ready"}
        {console.log("isLoading : ", isLoading)}
      </div>
    )
  }
}


export default App;