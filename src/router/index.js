import { createRouter, createWebHistory } from 'vue-router';
import DefaultLayout from '../components/DefaultLayout.vue'
import Home from '../view/Home.vue'
import ByName from '../view/MealsByName.vue'
import ByLetter from '../view/MealsByLetter.vue'
import ByIngrediant from '../view/MealsByIngrediant.vue'
import GuestLayout from '../components/GuestLayout.vue'
import MealDetail from '../view/MealDetails.vue'
import Ingredients from '../view/Ingredients.vue'
const routes = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
            {
                path: '/',
                name: 'home',
                component: Home,
            },
            {
                path: '/by-name/:name?',
                name: 'byName',
                component: ByName,
            },
            {
                path: '/by-letter/:letter?',
                name: 'byLetter',
                component: ByLetter
            },
            {
                path: '/ingredients',
                name: 'Ingredients',
                component: Ingredients,
            },
            {
                path: '/by-ingrediant/:ingrediant',
                name: 'byIngrediant',
                component: ByIngrediant,
            },
            {
                path: '/meal/:id?',
                name: 'mealDetails',
                component: MealDetail
            }
        ]
    },
    {
        path: '/guest',
        name: '',
        component: GuestLayout
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;