export default function streamsReducer(streams={},action) {
	switch(action.type){
		case 'ADD_NEW_STREAM':{
			let newTask={
				...action.params,
				id:action.id
			}
			let newData=[...streams.data,newTask]

			return {
				...streams,
				data:newData
			}
			break;
		}
		default :
		  return streams;
		  break;
	}
}