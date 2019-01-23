import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';

import { addSelectedFacet, removeSelectedFacet } from '../../../actions/FacetFilterActions'
import { fetchMetadataSearchResults } from '../../../actions/searchResultActions'


import style from './Facet.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Facet extends Component {

    constructor(props) {
        super(props);
        this.state = {
            checked: false,
        };
    }

    toggleFacet() {
        if (this.state.checked) {
            this.props.removeSelectedFacet(this.props.facet, this.props.facetField)
            this.setState({
                checked: false
            });

        } else {
            this.props.addSelectedFacet(this.props.facet, this.props.facetField);
            this.setState({
                checked: true
            });
        }
        this.props.fetchMetadataSearchResults('', this.props.selectedFacets);
      //  let searchString = this.getUrlParametersFromSelectedFacets(selectedFacets);

      ///  this.props.showResults(searchString, null, null)
    }

    getUrlParametersFromSelectedFacets(selectedFacets) {
        let urlParameters = [];
        let facetIndex = 0;
        for (let [type, facets] of Object.entries(selectedFacets)) {
            if (selectedFacets.hasOwnProperty(type)) {
                facets.forEach((facet) => {
                    urlParameters.push(`facets[${facetIndex}]name=${type}&facets[${facetIndex}]value=${facet.Name}`);
                    facetIndex++;
                })
            }
        }
        let urlParameterString = urlParameters.join('&');
        return urlParameterString;
    }

    isChecked = () => {
        let isChecked = false;
        let selectedFacets = this.props.selectedFacets;
        if (selectedFacets[this.props.facetField]) {
            selectedFacets[this.props.facetField].forEach((selectedFacet) => {
                if (selectedFacet.Name == this.props.facet.Name) {
                    isChecked = true;
                    this.setState({
                        checked: true
                    });
                }
            })
        }
        if (!isChecked) {
            this.setState({
                checked: false
            });
        }
    }

    componentDidMount() {
        this.isChecked();
    }

    renderList() {
        if (this.props.facet.FacetResults) {

            let ulClassNames = classNames({
                [style.filterItems]: true,
                [style.hidden]: !this.state.checked
            });

            let filterItemElements = ""/*this.props.facet.FacetResults.map((facet, i) => {
                return <Facet
                facet={facet}
                facetField={this.props.facetField}
                key={i} />;
            });*/
            return React.createElement('ul', { className: ulClassNames }, filterItemElements);
        } else {
            return "";
        }

    }

    render() {
        let liClassNames = classNames({
            [style.facet]: true,
            [style.empty]: this.props.facet.Count == 0,
        });
        return (
            <li className={liClassNames}>
                <input type="checkbox" checked={this.state.checked} onChange={() => this.toggleFacet()} id={this.props.facet.Name} name={this.props.facet.Name} value={this.props.facet.Name} />
                <FontAwesomeIcon className="svg-checkbox" icon={this.state.checked ? ['far', 'check-square'] : ['far', 'square']} /><label htmlFor={this.props.facet.Name}><span> {this.props.facet.NameTranslated} </span>({this.props.facet.Count})</label>
                {this.renderList()}
            </li>
        );
    }
}

Facet.propTypes = {
    facetField: PropTypes.string.isRequired,
    facet: PropTypes.shape({
        Count: PropTypes.number.isRequired,
        Name: PropTypes.string.isRequired,
        NameTranslated: PropTypes.string.isRequired
    }),
    selectedFacets: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    selectedFacets: state.selectedFacets
});

export default connect(mapStateToProps, {addSelectedFacet, removeSelectedFacet, fetchMetadataSearchResults})(Facet);
