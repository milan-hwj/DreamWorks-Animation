/**
 * @author   milan(white gourd angel)
 * @describe UI主类，用于搭建平台页面、事件绑定
 */
import './main.less';
import Vue from 'vue';
import pageHead from './head';
import { Button, Menu, MenuItem, Submenu } from 'element-ui';

Vue.component('el-menu', Menu);
Vue.component('el-menu-item', MenuItem);
Vue.component('el-submenu', Submenu);

class Main {
    constructor() {
        new Vue({
            el: '.main',
            components: {
                pageHead
            },
            template: `
            <div>
                <!-- 顶部菜单 -->
                <div class="head">
                    <pageHead></pageHead>
                </div>
                <!-- 内容区域 -->
                <div class="content">
                    <!-- 左侧操作栏 -->
                    <div class="left-content"></div>
                    <!-- 主画板 -->
                    <div class="main-content"></div>
                </div>
                <!-- 底部时间轴 -->
                <div class="bottom-area"></div>
            </div>
            `
        });
    }
    render(data) {
    }
}
export default () => new Main ();

