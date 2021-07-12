import React, { useContext } from 'react';
import { Route, NavLink } from 'react-router-dom';

import { ReactComponent as LogoSvg } from '../../img/bird.svg';
import { GlobalContext } from '../Helpers/Context/Context';

import './Header.css';

const Header = () => {
	const globalContext = useContext(GlobalContext);

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
						<i className="fa fa-heart-o hover addedItem" aria-hidden="true"></i>
						{globalContext.likedCounter > 0 && (
							<div className="counter">{
								globalContext.likedCounter<10 ? globalContext.likedCounter : '9+'
							}</div>
						)}
					</NavLink>
					<NavLink to='/order'>
						<i className="fa fa-shopping-cart hover addedItem" aria-hidden="true"></i>
						{globalContext.orderCounter > 0 && (
							<div className="counter">{
								globalContext.orderCounter<10 ? globalContext.orderCounter : '9+'
							}</div>
						)}
						
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