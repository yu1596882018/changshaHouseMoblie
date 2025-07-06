/**
 * Vant组件导入配置
 * @description 统一管理Vant组件的导入和注册
 */

import Vue from 'vue'
import {
  // 导航组件
  Tabbar,
  TabbarItem,
  NavBar,
  Tab,
  Tabs,

  // 表单组件
  Field,
  Form,
  Button,
  Picker,
  Popup,
  Calendar,

  // 展示组件
  Toast,
  Icon,
  Tag,
  Cell,
  Grid,
  GridItem,
  List,
  Collapse,
  CollapseItem,

  // 交互组件
  Search,
  Swipe,
  SwipeItem,
  Popover,
  PullRefresh,
  TreeSelect,
  DropdownMenu,
  DropdownItem,
} from 'vant'

// 导航组件注册
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(NavBar)
Vue.use(Tab)
Vue.use(Tabs)

// 表单组件注册
Vue.use(Field)
Vue.use(Form)
Vue.use(Button)
Vue.use(Picker)
Vue.use(Popup)
Vue.use(Calendar)

// 展示组件注册
Vue.use(Toast)
Vue.use(Icon)
Vue.use(Tag)
Vue.use(Cell)
Vue.use(Grid)
Vue.use(GridItem)
Vue.use(List)
Vue.use(Collapse)
Vue.use(CollapseItem)

// 交互组件注册
Vue.use(Search)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Popover)
Vue.use(PullRefresh)
Vue.use(TreeSelect)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)

// 允许Toast多实例显示
Toast.allowMultiple()
