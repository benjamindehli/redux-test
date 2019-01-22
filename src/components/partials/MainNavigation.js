import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import SearchBar from './SearchBar';
import logo from '../../images/svg/geonorge-navbar-logo.svg';

import style from './MainNavigation.scss'



class MainNavigation extends Component {

	constructor(props) {
		super(props);
		this.state = {
		};
	}
	
	render() {
		return (
			<div className={style.mainNavigationContainer}>
				<div className={style.mainNavigation + ' container'}>
					<Link to={'/'}>
                        <div className={style.logo}>
                            <img src={require('../../images/svg/geonorge-navbar-logo_dev.svg')}></img>
                        </div>
                    </Link>
					<span className={style.searchResultsSectionHeading}>{this.props.heading}</span>
					<img src={logo} />
					<SearchBar />
				</div>
			</div>
			)
	}
}

SearchBar.propTypes = {
}

export default connect(null)(MainNavigation);