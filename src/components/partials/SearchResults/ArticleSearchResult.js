import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMetadataSearchResults } from '../../../actions/searchResultActions'

class ArticleSearchResult extends Component {
	render() {
		return (
			<div key={this.props.searchResult.Uuid}>
			artikkel
				<h3>{this.props.searchResult.Title}</h3>
			</div>
			)
	}
}


export default connect(null)(ArticleSearchResult);