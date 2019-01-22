import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMetadataSearchResults } from '../../actions/searchResultActions'

import MetadataSearchResult from './SearchResults/MetadataSearchResult'
import ArticleSearchResult from './SearchResults/ArticleSearchResult'

import style from './SearchResults.scss';


class ListItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}
	render() {
		return (
			<div key={this.props.listItem.Uuid}>
				<h3>{this.props.listItem.Title}</h3>
				</div>
			);
	}
}

class SearchResults extends Component {

	renderMetadataSearchResults() {
		let listItems = this.props.searchResults.metadata && this.props.searchResults.metadata.Results ? this.props.searchResults.metadata.Results : null;
		if (listItems){
			let listItemElements = listItems.map((searchResult, i) => {
				return <MetadataSearchResult searchResult={searchResult} key={i} />;
			});
			return React.createElement('div', {className: style.list}, listItemElements);
		} else {
			return "";
		}
	}

	renderArticleSearchResults() {
		let listItems = this.props.searchResults.articles && this.props.searchResults.articles.Results ? this.props.searchResults.articles.Results : null;
		if (listItems){
			let listItemElements = listItems.map((searchResult, i) => {
				return <ArticleSearchResult searchResult={searchResult} key={i} />;
			});
			return React.createElement('div', {className: style.list}, listItemElements);
		} else {
			return "";
		}
	}
	
	render() {
		return (
			<div>
			{this.renderMetadataSearchResults()}
			{this.renderArticleSearchResults()}
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

export default connect(mapStateToProps, { fetchMetadataSearchResults })(SearchResults);