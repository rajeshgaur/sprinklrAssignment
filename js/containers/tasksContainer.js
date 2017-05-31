import React,{Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as  allActions from '../actions/allActions'
import { Router, Route, Link,RouterContext ,browserHistory} from 'react-router'
import {Header} from '../components/header/header'
import {PopupModel} from '../components/popmodel/popupmodel'
import TaskList from '../components/tasklist/tasklist'

class TaskDetail extends Component{
	constructor(props){
		super(props)
		
		this.state={
			popup1:false,
			popup2:false,
			userid:''
		}
		
		this.onPopupOpenClick=this.onPopupOpenClick.bind(this)
		this.onPopupCloseClick=this.onPopupCloseClick.bind(this)
		this.onValueSelect=this.onValueSelect.bind(this)
		this.onAddTask=this.onAddTask.bind(this)
		this.onAddMemberClick=this.onAddMemberClick.bind(this)
		this.onAddMember=this.onAddMember.bind(this)
	}

	goBack() {
    	window.history.back();
	}

	onPopupOpenClick(userid){
		this.setState({
			popup1:true,
			userid:userid
		})
	}

	onPopupCloseClick(e){
		this.setState({
			popup1:false,
			popup2:false
		})
	}

	onAddTask(params){
		this.setState({
			popup1:false
		})
		this.props.actions.addNewUserActivity(this.state.userid,params)
	}

	onValueSelect(userid,id,newStatus){
		this.props.actions.setDropdownValue(userid,id,newStatus)
	}

	onAddMemberClick(){
		this.setState({
			popup2:true,
		})
	}

	onAddMember(params){
		this.setState({
			popup2:false,
		})
		this.props.actions.addNewTaskMemberAsync(params.title,this.props.routeParams.taskId)
	}

	render(){
		let id=this.props.routeParams.taskId
		let tdata=this.props.tasks[id]
		return <div style={{height:'100%'}} className="tasks">
					{this.state.popup1?<div className='overlay'>
									<PopupModel popuptitle={'Create Task'} onAddProject={this.onAddTask}
									onPopupCloseClick={this.onPopupCloseClick} lastFieldLabel={'status'}/>
					</div>:null}
					{this.state.popup2?<div className='overlay'> 
									<PopupModel popuptitle={'Add New Member'} onAddProject={this.onAddMember} memberPopup={true}
									onPopupCloseClick={this.onPopupCloseClick} lastFieldLabel={'status'}/>
					</div>:null}
					<Header>
						<div style={{display:'flex',justifyContent:'space-between',width:'100%'}}>
							<span>{tdata.header}</span> 
							<div className="alignRight close" onClick={this.goBack}>
								<span style={{fontSize: '20px'}}>X</span>
							</div>
						</div>
					</Header>
					<TaskList taskList={tdata.data} userList={this.props.users} onValueSelect={this.onValueSelect}
					onAddTaskClick={this.onPopupOpenClick}  onAddMemberClick={this.onAddMemberClick} /> 
				</div>
		}
}

function mapStateToProps(store) {
	return{
		tasks:store.tasks,
		users:store.users
	}
}

function mapPropsToAction(dispatch){
	return{
		actions:bindActionCreators(allActions,dispatch)
	}
}

TaskDetail.contextTypes = {
  router: React.PropTypes.object
}

let TaskDetailContainer=connect(mapStateToProps,mapPropsToAction)(TaskDetail)

export default TaskDetailContainer
