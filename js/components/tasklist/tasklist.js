import React,{Component} from 'react'
import Dropdown from '../dropdown/dropdown'

require('./tasklist.css')

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

export const AddTask=({onAddTaskClick,userid,...props})=>(
  <div className="ui card" style={{margin:'10px',background:'#f7f7f8'}}>
  <div className="content simpalcard addStream" onClick={()=>{onAddTaskClick(userid)}}>
    <div>
      <div style={{padding: '0 30px'}}><img src={'../../../dist/images/add.png'}  width='40px' /></div>
      <div style={{textAlign:'center'}}>Create Task</div>
    </div>
  </div>
</div>
)



const NameTitle=({name,...props})=>(
	<div className="ui card name" style={{margin:'0 10px'}}>
			<div className="content" style={{textAlign:'center',padding:'2em'}}>
	 			<h3>{name}</h3>
			</div>  		
	</div>
)



const UserTaskSection=({name,id,count,userTaskList,onAddTaskClick,...props})=>{
	let style={
		borderLeft:count==0?'1px dashed #d9d9da':'none'
	}

	return <div className="tasklistWrapper" style={style}>
				<div className="tasklist" >
				<NameTitle name={name}/>
				{
					userTaskList.map((item,i)=><Dropdown key={i} {...item} {...props} />)
				}
				<AddTask onAddTaskClick={onAddTaskClick} userid={id}/>
			</div>
			</div>
}




export default class TaskList extends Component{
	constructor(props){
		super(props)
		this.state={
			openDropdown:false,
		}
	}


	render(){

		return <div className="contentWrapper">
					<div style={{display:'flex'}}>
					{
						this.props.taskList.map((item,i) => <UserTaskSection key={i} {...item} userid={item.id}
							userTaskList={this.props.userList[item.id].data} onValueSelect={this.props.onValueSelect}
			 			    onAddTaskClick={this.props.onAddTaskClick} count={i}/>)
					}
					
					<div className="tasklist">
							 <div className="ui card" style={{margin:'0 10px'}}>
							  <div className="content simpalcard addStream" onClick={this.props.onAddMemberClick}>
							    <div>
							      <div style={{padding: '0 30px'}}><img src={'../../../dist/images/add.png'}  width='40px' /></div>
							      <div style={{textAlign:'center'}}>Add New Member</div>
							    </div>
							  </div>
							</div>
					</div>
					</div>
			  </div>
	}
}