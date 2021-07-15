import React, { useContext } from 'react';

import { GlobalContext } from '../Helpers/Context/Context';
import { sortOptions, viewOptions } from '../Helpers/Constants/constants';
import { posts } from '../Helpers/Data';

import './ItemsList.css';

const ItemsList = ({isShowForOrder}) => {
	const globalContext = useContext(GlobalContext);
	
	const plusOrderHandler = () => {
		globalContext.setOrderCounter((prev)=>++prev)
	}
	const minusOrderHandler = () => {
		globalContext.setOrderCounter((prev)=>{
			return prev>0 ? --prev : prev
		})
	}
	
	const likesListHandler = (el) => {
		// if there's no such item -> add it
		if(!globalContext.likedList.some(item => item.id == el.id)){
			globalContext.setLikedList([...globalContext.likedList, el]);
		} else {
			// otherwise -> remove it
			let filteredList = globalContext.likedList.filter(item => item.id != el.id);
			globalContext.setLikedList(filteredList);
		}
	}

	console.log(globalContext.likedList)

	const sortArray = (array) => {
		return array.map(el => (
			<div className="item r5">
				<div className="img">image #{el.id}</div>
				<div className="buttons">
					<div className={`favorite ${el.favorite ? 'added' : 'removed'}`}>
						<i className="fa fa-heart-o hover active" 
							onClick={() => likesListHandler(el)}
							aria-hidden="true"></i>
						<i className="fa fa-heart hover" 
							onClick={() => likesListHandler(el)}
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
		<div className={`list scroll ${globalContext.viewType == viewOptions.little ? 'little' : 'many'} ${isShowForOrder && 'line'}`}>
			{globalContext.sortType === sortOptions.lowFirst
				? sortArray(posts.sort((a,b) => a.price - b.price))
				: sortArray(posts.sort((a,b) => b.price - a.price))}
		</div>
	)
}

export default ItemsList;