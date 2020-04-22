import {Login} from './app/Login';
import {AccountPage} from './app/AccountPage';
import {CreateQuestion} from './app/CreateQuestion';
import {HomePage} from './app/HomePage';

export const ROUTES = [
    //{path: '', component: },
    //{path: '/:usr_id', component: AccountPage},
    {path: '/user', component: AccountPage},
    {path: '/', component: HomePage}

]