/**
 * @author   milan(white gourd angel)
 * @describe UI主类，用于搭建平台页面、事件绑定
 */
import './main.less';
import Vue from 'vue';
import { Button, Cell } from 'mint-ui';
import 'mint-ui/lib/style.css';

Vue.component(Button.name, Button);
Vue.component(Cell.name, Cell);

class Main {
    constructor() {
        console.info('UI init');
        new Vue({
            el: '.head',
            template: `<mt-button>1</mt-button>`
        });
    }
    render(data) {
    }
}
export default () => new Main ();
