import React from 'react'

export const Button=({label,value,onClick,className,...props})=>(
	<button className={className} onClick={()=>{onClick(value)}}>{label}</button>
)

export const ButtonGroup=({buttonList,...props})=>(
	<div>
		{buttonList.map((item ,i)=>{
			return (<Button key={i} {...item} />)
		})}
	</div>
)