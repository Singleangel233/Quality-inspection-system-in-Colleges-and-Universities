import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import LoginPage from '@/components/LoginPage'
import studentscore from '@/components/students/studentscore'
import teachers_main from '@/components/teachers/teachers_main'
import supervisors_main from '@/components/supervisors/supervisors_main'
import administrator from '@/components/administrators/administrator'
import EditPass from '@/components/EditPassword/EditPass'

Vue.use(Router)

export default new Router({
  routes: [
    {
    	path:'/',
    	name:'LoginPage',
    	component:LoginPage
    },
    {
      path:'/',
      redirect:'/loginpage'
    },
    {
      path:'/students/studentscore',
      name:'studentscore',
      component:studentscore
    },
    {
      path:'/teachers/teachers_main',
      name:'teachers_main',
      component:teachers_main
    },
    {
      path:'/supervisors/supervisors_main',
      name:'supervisors_main',
      component:supervisors_main
    },
    {
      path:'/administrators/administrator',
      name:'administrator',
      component:administrator
    },
    {
      path:'/EditPassword/EditPass',
      component:EditPass
    }
  ]
})
