import { request } from './request.js'


export const getCinimaList = (cityId) => {
    return request({
        url: '/api/cinemaList?cityId=' + cityId,
        method: 'get'
    })
}


export const getHotMovie = (cityId) => {
    return request({
        url: '/api/movieOnInfoList?cityId=' + cityId,
        method: 'get'
    })
}

export const getMovieDetail = (movieId) => {
    return request({
        url: '/api/detailmovie?movieId=' + movieId,
        method: 'get'
    })
}

