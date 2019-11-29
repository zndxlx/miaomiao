
const routes = [
    {
        path: '/movie',
        name: 'movie',
        redirect: '/movie/hot',
        component: () => import('@/views/movie/Movie'),
        children: [
            {
                path: 'mcity',
                component: () => import('@/views/movie/mCity')
            },
            {
                path: 'hot',
                component: () => import('@/views/movie/hot')
            },
            {
                path: 'soon',
                component: () => import('@/views/movie/soon')
            },
            {
                path: 'search',
                component: () => import('@/views/movie/search')
            }
        ]
    },
    {
        path: '/cinema',
        name: 'cinema',
        component: () => import('@/views/cinema/Cinema')
    },
    {
        path: '/mine',
        name: 'mine',
        component: () => import('@/views/mine/Mine')
    },
    {
        path: '/movieDetail',
        name: 'movieDetail',
        component: () => import('@/views/movie/movieDetail')
    },
    {
        path: '/*',
        redirect: '/movie'
    },
]

export default routes