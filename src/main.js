import { mount } from 'svelte'
import './app.css'
import App from './App.svelte'
import '@fortawesome/fontawesome-free/css/all.css';

const app = mount(App, {
  target: document.getElementById('app'),
})

export default app
