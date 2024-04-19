import {createRouter, createWebHashHistory} from 'vue-router'
import LoanApplicationView from "@/views/LoanApplicationView";

const routes = [
  {
    path: '/',
    name: 'LoanApplicationView',
    component: LoanApplicationView
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
