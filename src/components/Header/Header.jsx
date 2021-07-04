import React from 'react';
import { Route, NavLink } from 'react-router-dom';

import './Header.css';

import { ReactComponent as LogoSvg } from '../../img/bird.svg';

const Header = () => {
	return (
		<header>
			<div className="container">
				<div className="left">
					<div id="burger" onClick={({target}) => target.classList.toggle('active')}>
						<span></span>
					</div>
					<NavLink to='/home'>
						<div className="logo">
							<LogoSvg className="hover"/>
						</div>
					</NavLink>
				</div>
				<div className="title">
					<Route path='/home' render={() => <Title titleName='Home'/>}/>
					<Route path='/favorites' render={() => <Title titleName='Favorites'/>}/>
					<Route path='/order' render={() => <Title titleName='Order'/>}/>
				</div>
				<div className="right">
					<NavLink to='/favorites'>
						<i className="fa fa-heart-o hover" aria-hidden="true"></i>
					</NavLink>
					<NavLink to='/order'>
						<i className="fa fa-shopping-cart hover" aria-hidden="true"></i>
					</NavLink>
				</div>
			</div>
		</header>
	)
}

const Title = ({titleName}) => {
	return <h1>{titleName}</h1>
}

export default Header;