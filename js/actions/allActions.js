export function addNewProject(params,id) {
	return{
		type:'ADD_NEW_STREAM',
		params,
		id
	}
}

export function addNewTask(header,id){
	return{
		type:'ADD_NEW_TASK',
		header,
		id
	}
}
 export function addNewTaskAsync(params,header){
 		return function(dispatch,state){
 			let id=`t${state().streams.data.length+1}`
 			dispatch(addNewProject(params,id))
 			dispatch(addNewTask(header,id))
 		}
 }

export function addNewUserActivity(userid,params){
	return {
		type:'ADD_NEW_USER_ACTIVITY',
		userid,
		params
	}
}

export function setDropdownValue(userid,id,newStatus){
	return {
		type:'SET_DROPDOWN_VALUE',
		userid,
		id,
		newStatus
	}
}


export function addNewTaskMember(name,taskid,id){
	return {
		type:'ADD_NEW_TASK_MEMBER',
		name,
		taskid,
		id
	}
}

export function addNewUSer(id){
	return {
		type:'ADD_NEW_USER',
		id
	}
}

 export function addNewTaskMemberAsync(name,taskid){
 		return function(dispatch,state){
 			let id=`${taskid}u${state().tasks[taskid].data.length+1}`
 			dispatch(addNewTaskMember(name,taskid,id))
 			dispatch(addNewUSer(id))
 		}
 }





