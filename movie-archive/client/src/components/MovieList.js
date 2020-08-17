import React, { Component, Fragment } from 'react'
import { Container, Button, Table } from 'reactstrap'
import { connect } from 'react-redux'
import { getMovies, deleteMovie } from '../actions/movieActions'
import PropTypes from 'prop-types'

class MovieList extends Component {

    static propTypes = {
        getMovies: PropTypes.func.isRequired,
        movie: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool
    }

    componentWillUpdate() {
        this.props.getMovies()
    }

    onDeleteClick = id => {
        this.props.deleteMovie(id)
    }

    render() {
        const { movies } = this.props.movie;
        return(
            <Container>
            { this.props.isAuthenticated ? (
            <Fragment>
                <Table size="sm">
                    <thead>
                        <tr>
                        <th>Delete Button</th>
                        <th>Title</th>
                        <th>Year</th>
                        <th>Director</th>
                        <th>Imdb Rate</th>
                        <th>Your Rate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {movies.map(({ _id, title, year, director, imdb_rate, your_rate }) => (
                            <tr key={_id}>
                                <td><Button 
                                    className="remove-btn"
                                    color="danger" 
                                    size="sm"
                                    onClick={this.onDeleteClick.bind(this, _id)}
                                    >Del</Button></td>
                                <td>{ title }</td>
                                <td>{ year }</td>
                                <td>{ director }</td>
                                <td>{ imdb_rate }</td>
                                <td>{ your_rate }</td>
                                
                            </tr>
                        ))}
                    </tbody>
                </Table></Fragment>) : null }
            </Container>
        )
    }
}



const mapStateToProps = state => ({
    movie: state.movie,
    isAuthenticated: state.auth.isAuthenticated
})
export default connect(mapStateToProps, { getMovies, deleteMovie })(MovieList)