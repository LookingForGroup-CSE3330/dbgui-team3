import {Login} from './app/Login';
import {AccountPage} from './app/AccountPage';
import {CreateQuestion} from './app/CreateQuestion';
import {HomePage} from './app/HomePage';
import { SignUp } from './app/SignUp';
import {AnswerPage} from './app/AnswersPage';

export const ROUTES = [
    //{path: '', component: },
    //{path: '/:usr_id', component: AccountPage},
    {path: '/answers/:post_id', component: AnswerPage},
    {path: '/cq', component: CreateQuestion},
    {path: '/users/:username', component: AccountPage},
    {path: '/login', component: Login},
    {path: '/signUp', component: SignUp},
    {path: '/', component: HomePage}

]