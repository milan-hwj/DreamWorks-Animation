/**
 * @author   milan(white gourd angel)
 * @describe UI主类，用于搭建平台页面、事件绑定
 */
import './main.less';
import Vue from 'vue';
import { Button, Menu, MenuItem, Submenu } from 'element-ui';

Vue.component('el-menu', Menu);
Vue.component('el-menu-item', MenuItem);
Vue.component('el-submenu', Submenu);

class Main {
    constructor() {
        console.info('UI init');
        new Vue({
            el: '.main',
            template: `
            <div>
            <!-- 顶部菜单 -->
            <div class="head">
                <el-menu theme="dark" class="el-menu-demo" mode="horizontal">
                  <el-menu-item index="1">处理中心</el-menu-item>
                  <el-submenu index="2">
                    <template slot="title">我的工作台</template>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                    <el-menu-item index="2-3">选项3</el-menu-item>
                  </el-submenu>
                  <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
                </el-menu>
            </div>
                <!-- 内容区域 -->
                <div class="content">
                    <!-- 左侧操作栏 -->
                    <div class="left-content">
                    </div>
                    <!-- 主画板 -->
                    <div class="main-content"></div>
                </div>
            </div>`
        });
    }
    render(data) {
    }
}
export default () => new Main ();
