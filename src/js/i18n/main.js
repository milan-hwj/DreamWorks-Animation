/**
 * @author   milan(white gourd angel)
 * @describe 可视化动画制作平台，国际化入口文件
 */
import zh_cn from './zh_cn';
import en from './en';

const languages = {
    zh_cn, en
};
let translate = en;
export default {
    init: (l) => {
        translate = languages[l];
    },
    getMsg: () => {
        return translate;
    }
};
