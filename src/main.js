import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import router from './router'
import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import Card from 'primevue/card';
import Passwrd from './components/Passwrd.vue'

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

import Login from './components/Login.vue'
import Register from './components/Register.vue'
import User from './components/User.vue'
import Admin from './components/Admin.vue'
import Paginator from 'primevue/paginator';


const app = createApp(App);

import store from './store'

app.use(store)
app.use(router)
app.use(PrimeVue);
app.component('Button', Button)
app.component('InputText', InputText)
app.component('Password',Password)
app.component('TabView',TabView)
app.component('TabPanel', TabPanel)
app.component('Card',Card);
app.component('Passwrd',Passwrd);

app.component('DataTable',DataTable);
app.component('Column',Column);

app.component('Login',Login);
app.component('Register',Register);
app.component('User',User);
app.component('Admin',Admin);
app.component('Paginator',Paginator);
app.mount('#app');
