import React from 'react';
import ReactDOM from 'react-dom';
import Test from './components/Test.jsx';

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: 'Autumn'
    }
  }

  render() {
    return (
      <div>
        <h3>
          Hello World {this.state}
        </h3>
        <Test />
      </div>
    );
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('app')
);
