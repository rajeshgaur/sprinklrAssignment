export default function tasksReducer(tasks={},action) {
	switch(action.type){
		case "ADD_NEW_TASK":
		{
			//let id=`${}`
			return {
				...tasks,
				[action.id]:{
					...tasks[action.id],
					header:action.header,
					data:[]
				}
			}
			break;
		}

		case "ADD_NEW_TASK_MEMBER":{
			let newData=[...tasks[action.taskid].data,{
				name:action.name,
				id:action.id
			}]
			return {
				...tasks,
				[action.taskid]:{
					...tasks[action.taskid],
					data:newData
				}

			}
		}
		default :
		  return tasks;
		  break;
	}
}