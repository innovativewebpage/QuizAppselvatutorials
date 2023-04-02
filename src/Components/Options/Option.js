import React from 'react';
import './Option.css';

const Option = (props) => {
	
	
	
	const opt = Object.keys(props.opt).map(opt => {

	return(
		<li key={opt} onClick={() => props.clickevent(opt)}
		className = {props.correctOption === opt ? 'crt': 
		props.clickedOption === opt?
		'incrt':'' }> {opt}){props.opt[opt]} 
		</li>

		)
	});
	

return(

	<div>
		<ul className="options">
			{opt}
		</ul>
	</div>


)


}


	


export default Option;