import './style.css'
import Navbar from './components/nav'
import Header from './components/header'

const $root = document.querySelector('#app');
$root.insertAdjacentHTML("beforeend", `
  ${Navbar()}
  ${Header()}
`);