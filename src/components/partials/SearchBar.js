import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMetadataSearchResults, fetchArticleSearchResults } from '../../actions/searchResultActions'

class SearchBar extends Component {

	constructor(props) {
		super(props);
		this.state = {
			searchString: ''
		};
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	componentWillMount() {
		this.props.fetchMetadataSearchResults();
		this.props.fetchArticleSearchResults();
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.newPost) {
			this.props.items.unshift(nextProps.newPost);
		}
	}

	onChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		})
		const searchString = this.state.searchString;
		this.props.fetchMetadataSearchResults(e.target.value);
		this.props.fetchArticleSearchResults(e.target.value);
	}

	onSubmit(e) {
		e.preventDefault();
		const searchString = this.state.searchString;
		this.props.fetchMetadataSearchResults(searchString);
	}
	
	render() {
		return (
			<div>
			<form onSubmit={this.onSubmit}>
			<div>
			<input type="text" name="searchString" onChange={this.onChange} value={this.state.searchString} />
			<button type="submit">Søk</button>
			</div>
			</form>
			</div>
			)
	}
}

SearchBar.propTypes = {
	fetchMetadataSearchResults: PropTypes.func.isRequired,
	fetchArticleSearchResults: PropTypes.func.isRequired,
	searchResults: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
	searchResults: state.searchResults
});

export default connect(mapStateToProps, { fetchMetadataSearchResults, fetchArticleSearchResults })(SearchBar);