import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SearchView from '../views/SearchView.vue'
import EditView from '../views/EditView.vue'
import ResultList from '../views/ResultList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/edit',
      name: 'edit',
      component: EditView
    },
    {
      path: '/search',
      name: 'search',
      component: SearchView,
    },
    {
      path: '/search/result',
      name: 'result',
      component: ResultList,
      props: { mode: '검색결과' }
    },
    {
      path: '/bookmarked',
      name: 'bookmarked',
      component: ResultList,
      props: { mode: '저장한 레시피' },
    },
    {
      path: '/posted',
      name: 'posted',
      component: ResultList,
      props: { mode: '등록한 레시피' },
    },
  ]
})

export default router
