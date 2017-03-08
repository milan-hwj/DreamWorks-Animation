/**
 * @author   milan(white gourd angel)
 * @describe 可视化动画制作平台，支持事件绑定、动画外部调用等二次开发特性
 */
import './main.less';
import UIinit from './UI/main';
// import Vuex from 'vuex'
// Vue.use(Vuex);

import i18n from './i18n/main';

class Main {
    constructor() {
        i18n.init('zh_cn');
        console.info(i18n.getMsg());
        UIinit();
    }
    render(data) {
    }
}
new Main();
