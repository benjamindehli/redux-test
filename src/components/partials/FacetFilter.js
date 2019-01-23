import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMetadataSearchResults } from '../../actions/searchResultActions'


//import style from './FacetFilter.scss';

class FacetFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    getFacets() {
        return this.props.searchResults.metadata && this.props.searchResults.metadata.Facets ? this.props.searchResults.metadata.Facets : [];
    }

    renderFacets() {
        let facets = this.getFacets().map((facet, i) => {
            let content = facet.NameTranslated;
            return React.createElement('li', { key: i }, content);
        });
        return React.createElement('ul', null, facets);
    }
    
    render() {
        return (
            <div>
            {this.renderFacets()}
            </div>
            )
    }
}

FacetFilter.propTypes = {
    searchResults: PropTypes.object
}

const mapStateToProps = state => ({
    searchResults: state.searchResults
});

export default connect(mapStateToProps, { fetchMetadataSearchResults })(FacetFilter);