import './common/css/index.css'
import Layer from './components/layer/layer'

const App = function () {
    let dom = document.getElementById('app')
    let layer = new Layer()
    dom.innerHTML = layer.tpl
}

new App()