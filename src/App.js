import PropTypes from 'prop-types'
import React from 'react';

class App extends React.Component {  

  state = {
    isLoading: true,
    movies:[]
  }

  setLoading() {
    this.setState(this.state.isLoading, cur => !cur)
  }

  componentDidMount() {
    // console.log('컴포넌트 렌더링 됨')
  }

  componentDidUpdate() {
    // console.log('컴포넌트 업데이트 됨')
  }

  render() {
    const { isLoading } = this.state;

    return (
      <div>
        {isLoading ? <h1>Now Loading ...</h1>: <h1>준비 완료!</h1>}
      </div>
    )
  }
}

export default App;
