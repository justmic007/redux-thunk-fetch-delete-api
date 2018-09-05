import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { itemsFetchData } from '../actions/items';


// https://medium.com/@stowball/a-dummys-guide-to-redux-and-thunk-in-react-d8904a7005d3

// converts our component to use props instead of state
class ItemList extends Component {

    componentDidMount() {
        this.props.fetchData('http://5826ed963900d612000138bd.mockapi.io/items');
    }
      render() {
        if (this.props.hasErrored) {
          return <p>Sorry! There was an error loading the items</p>;

        }

        if (this.props.isLoading) {
          return <p>Loading...</p>;

        }

        return (
          <ul>
              {this.props.items.map((item) => (
                <li key={item.id}>{item.label}</li>
              ))}
          </ul>
        );
      }
}

ItemList.propTypes = {
  fetchData: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  hasErrored: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired
};

// A function that accepts state and then, returns an object of props
const mapStateToProps = (state) => {
  return {
    items: state.items,
    hasErrored: state.itemsHasErrored,
    isLoading: state.itemsIsLoading
  };
};

// Another function that dispatch our itemsFetchData() action creator with a mapStateToProps
// removed items prefix from the returned object property

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(itemsFetchData(url)) // Here fetchData is a function that accepts a url parameter and returns dispatching itemsFetchData(url)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
