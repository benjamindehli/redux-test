import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMetadataSearchResults } from '../../../actions/searchResultActions'

import { Col, Grid, Row } from 'react-bootstrap';

import style from './MetadataSearchResult.scss';


class MetadataSearchResult extends Component {
	renderMapButton() {
		return "";
	}

	render() {
		return (
			<Row className={style.listItem}>
        <Col sm={10}>
          <span className={style.listItemTitle}><a href={this.props.searchResult.ShowDetailsUrl}>{this.props.searchResult.Title}</a></span>
          <span className={style.listItemInfo}>{this.props.searchResult.Type} fra <a href={this.props.searchResult.OrganizationUrl}>{this.props.searchResult.Organization}</a></span>
        </Col>
        <Col sm={2}>
          <span className={style.listItemButton}>
            {this.renderMapButton()}
          </span>
        </Col>
      </Row>
			)
	}
}


export default connect(null)(MetadataSearchResult);