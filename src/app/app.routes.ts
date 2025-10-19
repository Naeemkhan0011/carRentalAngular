import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Layout } from './pages/layout/layout';
import { Dashboard } from './pages/dashboard/dashboard';
import { Vehicles } from './pages/vehicles/vehicles';
import { Customer } from './pages/customer/customer';
import { Bookings } from './pages/bookings/bookings';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    },
    {
        path:'login',
        component: Login
    },
    {
        path:'',
        component: Layout,
        children: [
            {
                path: 'dashboard',
                component: Dashboard
            },
            {
                path: 'vehicles',
                component: Vehicles
            },
            {
                path: 'user',
                component: Customer
            },
            {
                path: 'booking',
                component: Bookings
            }
        ]
    }
];
