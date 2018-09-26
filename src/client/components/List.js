import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../redux/actions';

class List extends Component {
  render() {
      console.log(this.props);
      
      const { list = [] }  = this.props;
        return (
            <div>
                data list:
                <ul>
                    {list.map(item => <li key={item}>{item}</li>)}
                </ul>
            </div>
        );
  }

  componentDidMount() {
    this.props.fetchData();
  }
}

function mapStateToProps(state) {
  return { ...state };
}

export default connect(mapStateToProps, { fetchData })(List);