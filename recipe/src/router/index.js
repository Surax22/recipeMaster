import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore, useAlertStore } from './../stores';
import { Home } from './../views';
import accountRoutes from './account.routes';
import usersRoutes from './users.routes';
import { AddRecipes,ProductDisplay ,Footer, AppHeder} from './../components/Recipe'


export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    linkActiveClass: 'active',
    routes: [
        { path: '/', components: {
            default:Home,
            cards:ProductDisplay,
            Header:AppHeder,
            Footer:Footer
        }
     },
        { ...accountRoutes },
        { ...usersRoutes },
        { path: '/:pathMatch(.*)*', redirect: '/' },
        { 
            path: '/AddRecipes',
         components:{
            default:AddRecipes,
            Header:AppHeder,
            Footer:Footer
         },
        
        },      
    ]
});

// router.beforeEach(async (to, from) => {
//     // clear alert on route change
//     const alertStore = useAlertStore();
//     alertStore.clear();

//     // redirect to login page if not logged in and trying to access a restricted page 
//     const publicPages = ['/account/login', '/account/register'];
//     const authRequired = !publicPages.includes(to.path);
//     const authStore = useAuthStore();

//     if (authRequired && !authStore.user) {
//         authStore.returnUrl = to.fullPath;
//         return '/account/login';
//     }
// });
