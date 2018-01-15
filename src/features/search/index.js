export default {
    name: 'search',
    path: '/',
    component: () => System.import(/* webpackChunkName: "search" */ './search.component')
}