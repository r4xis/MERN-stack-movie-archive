import { GET_MOVIES, ADD_MOVIE, DELETE_MOVIE } from './types'
import axios from 'axios'
import { tokenConfig } from './authActions'
import { returnErrors } from './errorActions'

export const getMovies = () => (dispatch, getState) => {
    axios.get('/movies', tokenConfig(getState))
        .then(res => dispatch({
            type: GET_MOVIES,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status))
        })
}

export const deleteMovie = id => (dispatch, getState) => {
    axios.delete(`/movies/${id}`, tokenConfig(getState))
        .then(res => dispatch({
            type: DELETE_MOVIE,
            payload: id 
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status))
        })
}

export const addMovie = movie => (dispatch, getState) => {
    axios.post('/movies', movie, tokenConfig(getState))
        .then(res => dispatch({
            type: ADD_MOVIE,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status))
        })
}
