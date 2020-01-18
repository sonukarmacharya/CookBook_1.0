import Details from "./Component/Detail";

export default [
    {path:'/details/:id', component:Detail, exact:true},
    {path:'', component:Home, exact:true},
]
