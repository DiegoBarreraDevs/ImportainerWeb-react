// const element = document.createElement('h1')
// element.innerText = 'Hola React'
// const container = document.getElementById('root')
// container.appendChild(element)
import React from 'react'
import ReactDOM from 'react-dom'
import "../src/index.css"
import App from './components/App'
import "./firebase"

const container = document.getElementById('root')


// ReactDOM.render(__QUE__,__DONDE__)
ReactDOM.render(<App/>, container)

