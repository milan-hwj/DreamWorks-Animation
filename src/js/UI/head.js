/**
 * @author   milan(white gourd angel)
 * @describe 顶部元素
 */
import './main.less';
import Vue from 'vue';
import i18n from '../i18n/main';
import { Menu, MenuItem, Submenu } from 'element-ui';

Vue.component('el-menu', Menu);
Vue.component('el-menu-item', MenuItem);
Vue.component('el-submenu', Submenu);

const head =  {
        data: () => {
            return {
                i18n: i18n.getMsg()
            };
        },
        template: `
            <div>
                <el-menu theme="dark"  class="el-menu-demo" mode="horizontal" >
                    <el-menu-item index="1">{{i18n.yes}}</el-menu-item>
                    <el-submenu index="2">
                        <template slot="title">我的工作台</template>
                        <el-menu-item index="2-1">选项1</el-menu-item>
                        <el-menu-item index="2-2">选项2</el-menu-item>
                        <el-menu-item index="2-3">选项3</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
                </el-menu>
            </div>
        `
    }
export default head;
