import React, { useContext } from 'react';

import { GlobalContext } from '../Helpers/Context/Context';
import { sortOptions, viewOptions } from '../Helpers/Constants/constants';

import './ItemsList.css';

const ItemsList = ({sortState, viewState, className}) => {
	const globalContext = useContext(GlobalContext);

	let posts = [
		{id: 1, price: 40, favorite: false},
		{id: 2, price: 80, favorite: true},
		{id: 3, price: 120, favorite: false},
		{id: 4, price: 500, favorite: false},
		{id: 5, price: 20, favorite: true},
		{id: 6, price: 55, favorite: true},
		{id: 7, price: 39, favorite: false},
		{id: 8, price: 90, favorite: false}
	];
	
	const plusOrderHandler = () => {
		globalContext.setOrderCounter((prev)=>++prev)
	}
	const minusOrderHandler = () => {
		globalContext.setOrderCounter((prev)=>{
			return prev>0 ? --prev : prev
		})
	}
	
	const plusLikedHandler = () => {
		globalContext.setLikedCounter((prev)=>++prev)
	}
	const minusLikedHandler = () => {
		globalContext.setLikedCounter((prev)=>{
			return prev>0 ? --prev : prev
		})
	}

	const sortArray = (array) => {
		return array.map(el => (
			<div className="item r5">
				<div className="img">image #{el.id}</div>
				<div className="buttons">
					<div className={`favorite ${el.favorite ? 'added' : 'removed'}`}>
						<i className="fa fa-heart-o hover active" 
							onClick={plusLikedHandler}
							aria-hidden="true"></i>
						<i className="fa fa-heart hover" 
							onClick={minusLikedHandler}
							aria-hidden="true"></i>
					</div>
					<p className="price">{el.price}$</p>
					<div className="order">
						<i className="fa fa-minus hover" 
							onClick={minusOrderHandler}
							aria-hidden="true"></i>
						<p className="counter">0</p>
						<i className="fa fa-plus hover" 
							onClick={plusOrderHandler} 
							aria-hidden="true"></i>
					</div>
				</div>
			</div>
		))
	}

	return (
		// just add class "line" for order page
		<div className={`list scroll many`}>
			{globalContext.sortType === sortOptions.lowFirst
				? sortArray(posts.sort((a,b) => a.price - b.price))
				: sortArray(posts.sort((a,b) => b.price - a.price))}
		</div>
	)
}

export default ItemsList;