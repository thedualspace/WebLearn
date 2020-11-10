import React from 'react';
import {ResultTable} from './ResultTable';

class Results extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      resultsObject: {}
    }
  }

  // Fetch the list on first mount
  componentDidMount() {
    this.getList();
  }

  // Retrieves the list of items from the Express app
  getList = () => {
    fetch('/sql/results')
    .then(res => res.json())
    .then(resultsObject => this.setState({ resultsObject }))
  }

  render() {
    return (
      <div className="Results">
        {/* Check to see if any results are found*/}
        {this.state.resultsObject ? (
          <div>
            <ResultTable nameList={this.state.resultsObject} />
          </div>
        ) : (
          <div>
            <p>Loading</p>
          </div>
        )
      }
      </div>
    );
  }
}

export default Results;