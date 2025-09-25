import { Routes } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Header } from './components/header/header';
import { Form } from './components/form/form';

export const routes: Routes = [
    { path: 'navbar', component: Navbar },
    { path: 'header', component: Header },
    { path: 'form', component: Form }
];
