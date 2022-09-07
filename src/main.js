
// import "primevue/resources/themes/lara-light-teal/theme.css"      //theme
// import "primevue/resources/themes/vela-orange/theme.css"         // dark theme
import "primevue/resources/primevue.min.css"              //core css
import "primeicons/primeicons.css"  //primeicons
import "/node_modules/primeflex/primeflex.css"

import "./assets/style/layouts.scss"
import { createApp, reactive } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import Maska from 'maska'



// PrimeVue components

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
import Password from 'primevue/password';
import ToastService from 'primevue/toastservice';
import Toast from 'primevue/toast';
import Galleria from 'primevue/galleria';
import Image from 'primevue/image';
import Menubar from 'primevue/menubar';
import AutoComplete from 'primevue/autocomplete';
import Sidebar from 'primevue/sidebar';
import Slider from 'primevue/slider';
import ConfirmationService from 'primevue/confirmationservice';
import ConfirmDialog from 'primevue/confirmdialog';
import Steps from 'primevue/steps';
import Textarea from 'primevue/textarea';
import Skeleton from 'primevue/skeleton';
import Knob from 'primevue/knob';
import ContextMenu from 'primevue/contextmenu';





const app = createApp(App)

app.use(PrimeVue, { ripple: true, inputStyle: 'outlined' })
app.use(ToastService);
app.use(store)
app.use(router)
app.use(Maska);
app.use(ConfirmationService);




// Global variables
window.addEventListener("resize", (event) => {
    console.log(event.currentTarget.innerWidth);
    app.config.globalProperties.SCREEN_WIDTH = event.currentTarget.innerWidth;
    app.config.globalProperties.SCREEN_HEIGHT = event.currentTarget.innerHeight;

})
app.config.globalProperties.SCREEN_WIDTH = window.innerWidth;
app.config.globalProperties.SCREEN_HEIGHT = window.innerHeight;
app.config.globalProperties.$appState = reactive({ theme: 'lara-light-blue', darkTheme: false });






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
app.component('Password', Password);
app.component('Toast', Toast);
app.component('Galleria', Galleria);
app.component('Image', Image);
app.component('Menubar', Menubar);
app.component('AutoComplete', AutoComplete);
app.component('Sidebar', Sidebar);
app.component('Slider', Slider);
app.component('ConfirmDialog', ConfirmDialog);
app.component('Steps', Steps);
app.component('Textarea', Textarea);
app.component('Skeleton', Skeleton);
app.component('Knob', Knob);
app.component('ContextMenu', ContextMenu);

























app.mount('#app')
