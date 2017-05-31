import React,{Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {Button} from '../components/button/buttons'
import {PopupModel} from '../components/popmodel/popupmodel'
import {CardList,AddStreamsCard} from '../components/card/card'
import {Header} from '../components/header/header'
import * as  allActions from '../actions/allActions'

class Streams extends Component{
	constructor(props){
		super(props)
		this.state={
			popup:false
		}
		this.onPopupOpenClick=this.onPopupOpenClick.bind(this)
		this.onPopupCloseClick=this.onPopupCloseClick.bind(this)
		this.onAddProject=this.onAddProject.bind(this)
	}
	onPopupCloseClick(e){
		this.setState({
			popup:false
		})
	}
	onPopupOpenClick(){
		
		this.setState({
			popup:true
		})
	}

	onAddProject(params){
		this.setState({
			popup:false
		})
		this.props.actions.addNewTaskAsync(params,params.title)
		/*this.props.actions.addNewTask(,params.id)*/

	}


	render(){
		return(
				<div style={{height:'100%'}} className="streams">
					{this.state.popup?<div className='overlay'>
									<PopupModel popuptitle={'Create Project'} onAddProject={this.onAddProject}
									onPopupCloseClick={this.onPopupCloseClick} lastFieldLabel={'Members'}/>
					</div>:null}
					<Header>
						<div><span>{this.props.header}</span></div>
					</Header>
					<CardList cards={this.props.data} lasttile={true}  onPopupOpenClick={this.onPopupOpenClick}/>
				</div>
			   )
	}
}

function mapStateToProps(store) {
	return{
		...store.streams
	}
}

function mapPropsToAction(dispatch){
	return{
		actions:bindActionCreators(allActions,dispatch)
	}
}


let StreamsContainer=connect(mapStateToProps,mapPropsToAction)(Streams)

export default StreamsContainer

