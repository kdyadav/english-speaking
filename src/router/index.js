import { createRouter, createWebHistory } from 'vue-router';
import LearnPage from '../views/LearnPage.vue';
import VocabPage from '../views/VocabPage.vue';
import PracticePage from '../views/PracticePage.vue';

const routes = [
    {
        path: '/',
        redirect: '/learn'
    },
    {
        path: '/learn',
        name: 'Learn',
        component: LearnPage
    },
    {
        path: '/vocab',
        name: 'Vocab',
        component: VocabPage
    },
    {
        path: '/practice',
        name: 'Practice',
        component: PracticePage
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
