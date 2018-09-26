import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../redux/actions';

class List extends Component {
  render() {
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
      setTimeout(() => {
        this.props.fetchData();
      }, 1000);
  }
}

function mapStateToProps(state) {
  return { ...state };
}

export default connect(mapStateToProps, { fetchData })(List);