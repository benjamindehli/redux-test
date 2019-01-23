import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMetadataSearchResults, fetchArticleSearchResults } from '../../../actions/searchResultActions';

import style from './SearchBar.scss';
import searchIcon from '../../../images/svg/search-icon.svg';

class SearchBar extends Component {

	constructor(props) {
		super(props);
		this.state = {
			searchString: ''
		};
		this.onFocus = this.onFocus.bind(this);
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

	onFocus(e){

	}

	onSubmit(e) {
		e.preventDefault();
		const searchString = this.state.searchString;
		this.props.fetchMetadataSearchResults(searchString);
	}
	
	render() {
		return (
			<form onSubmit={this.onSubmit} className={style.searchInput}>
				<input  placeholder="Søk" type="text" name="searchString" onChange={this.onChange} onFocus={this.onFocus} value={this.state.searchString} />
				<button>
					<img src={searchIcon}></img>
				</button>
				<div className={this.state.showResults ? style.searchResults + ' active' : style.searchResults}>
				</div>
			</form>
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