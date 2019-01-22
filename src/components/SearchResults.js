import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchSearchResults } from '../actions/searchResultActions'

class SearchResults extends Component {
	
	render() {
		const postItems = this.props.searchResults.Results ? this.props.searchResults.Results.map(searchResult => (
			<div key={searchResult.Uuid}>
			<h3>{searchResult.Title}</h3>
			</div>
			)) : "";
		return (
			<div>
			{postItems}
			</div>
			)
	}
}

SearchResults.propTypes = {
	searchResults: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
	searchResults: state.searchResults
});

export default connect(mapStateToProps, { fetchSearchResults })(SearchResults);