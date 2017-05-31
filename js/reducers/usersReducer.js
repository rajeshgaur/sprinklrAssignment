export default function usersReducer(users={},action) {
	switch(action.type){
		case 'ADD_NEW_USER_ACTIVITY':{
			let newUserActivity={
				...action.params,
				id:`a${users[action.userid].data.length+1}`
			}
			let newData=[...users[action.userid].data,newUserActivity]
			return {
				...users,
				[action.userid]:{
					...users[action.userid],
					data:newData
				}
			}
			break;
		}

		case 'SET_DROPDOWN_VALUE':{
			return {
				...users,
				[action.userid]:{
					...users[action.userid],
					data:users[action.userid].data.map((item)=>{
						return {
							...item,
							status:item.id==action.id?action.newStatus:item.status
						}
					})
				}
			}
			break;
		}

		case 'ADD_NEW_USER':{
			return {
				...users,
				[action.id]:{
					...users[action.id],
					data:[]
				}
			}
			break;
		}
		default :
		  return users;
		  break;
	}
}