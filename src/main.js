
// import "primevue/resources/themes/lara-light-teal/theme.css"      //theme
// import "primevue/resources/themes/vela-orange/theme.css"         // dark theme
import "primevue/resources/primevue.min.css"              //core css
import "primeicons/primeicons.css"  //primeicons
import "/node_modules/primeflex/primeflex.css"

import "./assets/style/layouts.scss"
import { createApp, reactive } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import PrimeVue from 'primevue/config';

import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import Breadcrumb from 'primevue/breadcrumb';
import Toolbar from 'primevue/toolbar';
import SplitButton from 'primevue/splitbutton';
import Menu from 'primevue/menu';
import Avatar from 'primevue/avatar';
import Chart from 'primevue/chart';
import Divider from 'primevue/divider';
import BadgeDirective from 'primevue/badgedirective';
import Tag from 'primevue/tag';
import Dropdown from 'primevue/dropdown';
import InputSwitch from 'primevue/inputswitch';
import InputText from 'primevue/inputtext';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';     //optional for column grouping
import Row from 'primevue/row';  
import Tooltip from 'primevue/tooltip';
import OverlayPanel from 'primevue/overlaypanel';
import Calendar from 'primevue/calendar';
import InputNumber from 'primevue/inputnumber';

const app = createApp(App)

app.use(PrimeVue, { ripple: true, inputStyle: 'outlined' })
app.use(store)
app.use(router)

// Global variables
window.addEventListener("resize", (event) => {
    console.log(event.currentTarget.innerWidth);
    app.config.globalProperties.SCREEN_WIDTH = event.currentTarget.innerWidth;
    app.config.globalProperties.SCREEN_HEIGHT = event.currentTarget.innerHeight;

})
app.config.globalProperties.SCREEN_WIDTH = window.innerWidth;
app.config.globalProperties.SCREEN_HEIGHT = window.innerHeight;
app.config.globalProperties.$appState = reactive({ theme: 'saga-orange', darkTheme: false });






// app.directive('ripple', Ripple);
// app.directive('code', CodeHighlight);
app.directive('Badge', BadgeDirective);
app.directive('tooltip', Tooltip);
// app.directive('styleclass', StyleClass);

app.component('Dialog', Dialog);
app.component('Button', Button);
app.component('Breadcrumb', Breadcrumb);
app.component('Toolbar', Toolbar);
app.component('SplitButton', SplitButton);
app.component('Menu', Menu);
app.component('Avatar', Avatar);
app.component('Badge', BadgeDirective);
app.component('Chart', Chart);
app.component('Divider', Divider);
app.component('Tag', Tag);
app.component('Dropdown', Dropdown);
app.component('InputSwitch', InputSwitch);
app.component('InputText', InputText);
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('ColumnGroup', ColumnGroup);
app.component('Row', Row);
app.component('Tooltip', Tooltip);
app.component('OverlayPanel', OverlayPanel);
app.component('Calendar', Calendar);
app.component('InputNumber', InputNumber);













app.mount('#app')
