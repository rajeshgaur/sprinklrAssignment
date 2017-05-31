import React,{Component} from 'react'
import {Button} from '../button/buttons'

require('./popmodel.css')

const PopupModelView=({popuptitle,title,description,lastField,lastFieldLabel,onAddNewProject,onPopupCloseClick,memberPopup,...props})=>(
	<div className='ui form addClassForm'>
		<div className='field'>
			<div className="alignRight close" onClick={onPopupCloseClick}>
					<img src={'../../../dist/images/close.png'}  width='20px' />
			</div>
			<h4 className="header">{popuptitle}</h4>
		</div>
		
		<div className='field'>
			<label>{memberPopup?'Name':'Title'}</label>
			<input type='text' value={title} placeholder={memberPopup?'Add Name':' Task Title'} onChange={(e)=>{props.onTitleChange(e)}}/>
		</div>
		{memberPopup?null:<div className='field'>
			<label>Description</label>
			<textarea value={description} placeholder="Start typing..." 
			onChange={(e)=>{props.onDescriptionChange(e)}} ></textarea>
		</div>}
		{memberPopup?null:<div className='field'>
			<label>{lastFieldLabel}</label>
			<input type='text' value={lastField} placeholder='Select' onChange={(e)=>{props.onLastFiledChange(e)}}/>
		</div>}
		<div className='field alignRight'>
			<Button label={"Cancel"} className={"ui basic circular button"} value={1} onClick={onPopupCloseClick}/>
			<Button label={"Create"} className={"ui teal circular button"} value={2} onClick={onAddNewProject}/>
		</div>
	</div>
)


export class PopupModel extends Component{
	constructor(props){
		super(props)
		this.state={
			title:"",
			description:"",
			lastField:""
		}

		this.onTitleChange=this.onTitleChange.bind(this)
		this.onDescriptionChange=this.onDescriptionChange.bind(this)
		this.onLastFiledChange=this.onLastFiledChange.bind(this)
		this.onAddNewProject=this.onAddNewProject.bind(this)
	}

	onTitleChange(e){
		this.setState({
			title:e.target.value
		})
	}

	onDescriptionChange(e){
		this.setState({
			description:e.target.value
		})
	}

	onLastFiledChange(e){
		this.setState({
			lastField:e.target.value
		})
	}

	onAddNewProject(){
		let lastFieldKey=this.props.lastFieldLabel.toLowerCase()
		let params={
			title:this.state.title,
			description:this.state.description,
			id:this.state.title.toLowerCase(),
			[lastFieldKey]:this.state.lastField

		}
		this.props.onAddProject(params)
	}

	render(){
		return <PopupModelView   {...this.state} 	{...this.props} onTitleChange={this.onTitleChange} onLastFiledChange={this.onLastFiledChange}
				onDescriptionChange={this.onDescriptionChange} onAddNewProject={this.onAddNewProject}/>
	}

}


