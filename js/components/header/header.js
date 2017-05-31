import React,{Component} from 'react'

require('./header.css')
export const Header = ({...props
}) => (
  <div className="nav header" style={{background:'#21AB83'}}>
    {props.children}
  </div>
)
