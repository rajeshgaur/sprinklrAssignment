import React,{Component} from 'react'
function getColor(status) {
	switch(status.toLowerCase()){
		case 'done':
			return '#8bc34a'
			break;
		case 'on hold':
			return '#ffc107'
			break;
		case 'in process':
			return '#009688'
			break;
		case 'sent':
			return '#03a9f4'
			break;
		case 'schedule':
			return '#e91e63'
			break;
	}
}

export default class Dropdown extends Component{
	constructor(props){
		super(props)
		this.state={
			openDropdown:false
		}
		this.onBlur=this.onBlur.bind(this)
		this.dropdownClick=this.dropdownClick.bind(this)
		this.onValueSelect=this.onValueSelect.bind(this)
	}

	dropdownClick(){
		this.setState({
			openDropdown:!this.state.openDropdown
		})
	}

	onBlur(){
		this.setState({
			openDropdown:false
		})
	}

	onValueSelect(value){
		this.setState({
			openDropdown:false
		})
		this.props.onValueSelect(this.props.userid,this.props.id,value)
	}

	render(){

		let style={
		textAlign:'center',
		padding: '1.5em',
		background:'#f7f7f8',
		borderLeft: `2px solid ${getColor(this.props.status)}`,
	    borderRadius: '0 0 0 0'
		}

		return <div className="ui card" style={{margin:'10px',boxShadow: 'none'}}>
					<div className="content" style={style}>
						<div className="headerWrapper" style={{display:'flex',justifyContent:'center'}}>
				 			<div className="header">{this.props.title}</div>
				 			<div className="status">
				 					<div className="ui dropdown " tabIndex="0" onBlur={this.onBlur} style={{padding:'0 5px'}}>
										  <div className="ui dropdown dropstatus" style={{background:getColor(this.props.status)}}><div className="text" onClick={this.dropdownClick}>{this.props.status}</div>
										  <i className="dropdown icon" onClick={this.dropdownClick} style={{margin: '2px'}}></i></div>
										  {
										  	this.state.openDropdown?<div className="menu" style={{display:'block',top:'20px'}} >
										  	<div className="item" onClick={()=>{this.onValueSelect('Done')}}>Done</div>
										  	<div className="item" onClick={()=>{this.onValueSelect('On Hold')}}>On Hold</div>
										  	<div className="item" onClick={()=>{this.onValueSelect('In Process')}}>In Process</div>
										  	<div className="item" onClick={()=>{this.onValueSelect('Sent')}}>Sent</div>
										  	<div className="item" onClick={()=>{this.onValueSelect('Schedule')}}>Schedule</div>
										  </div>:null
										  }
									</div>
				 			</div>
			 			</div>
			 			 <div className="description">
					      <p>{this.props.description}</p>
					    </div>
					</div>  		
				</div>
		return 
	}
}