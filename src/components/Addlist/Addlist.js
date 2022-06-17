import React, { Component } from 'react'
import classes from './addlist.module.css'
import {ArrowForward,CalendarToday} from '@material-ui/icons';
export default class  Addlist extends Component {

  constructor(props){
    super(props)
    this.state={work:"",date:""}
  }
  todoAdd=()=>{
    this.props.todos(this.state)
    this.setState({work:"" ,date:""})
    console.log("work",this.state.work)
  
  }
render() {  
    
    
    return (
      <div>
        <h3><u>To-Do-List</u></h3><br/>
         <label><h3>Task</h3></label> 
         <div  className={classes.tododiv}>
         <input type="text" className={classes.input1} placeholder='Enter a task....' name='work' onChange={(e)=>this.setState({work:e.target.value})} value={this.state.work}/><br/><br/>
        <span> <input type="date" className={classes.input2} placeholder='Enter date'onChange={ (e)=>this.setState({date:e.target.value})} value={this.state.date} name="date"/></span>
       <span className={classes.input3}><ArrowForward className={classes.arrow} onClick={this.todoAdd}/></span></div>
      </div>
   )
  
}}
