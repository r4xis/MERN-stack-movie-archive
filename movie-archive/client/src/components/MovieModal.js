import React, { Component, Fragment } from 'react'
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap'

import { connect } from 'react-redux'
import { addMovie } from '../actions/movieActions'
import PropTypes from 'prop-types'

class MovieModal extends Component {
    state = {
        modal: false,
        title: '', 
        year: 0, 
        director: '', 
        imdb_rate: 0, 
        your_rate: 0 
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = e => {
        e.preventDefault();
        const newMovie = {
            title: this.state.title,
            year: this.state.year,
            director: this.state.director,
            imdb_rate: this.state.imdb_rate,
            your_rate: this.state.your_rate,
        }
        this.props.addMovie(newMovie);
        this.toggle();
    }

    render() {
        return(
            <div>
                { this.props.isAuthenticated ? <Fragment><Button
                    color="dark"
                    style={{marginBottom: '2rem', marginLeft: '30rem'}}
                    onClick={this.toggle}
                >Add Movie</Button>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>
                        Add To Movie List
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="title">
                                    Title
                                </Label>
                                <Input 
                                    type="text"
                                    name="title"
                                    id="title"
                                    placeholder="Interstellar"
                                    onChange={this.onChange}
                                />
                                <Label for="year">
                                    Year
                                </Label>
                                <Input 
                                    type="number"
                                    min='1800'
                                    max='2022'
                                    year="year"
                                    name="year"
                                    placeholder="2014"
                                    onChange={this.onChange}
                                />
                                <Label for="director">
                                    Director
                                </Label>
                                <Input 
                                    type="text"
                                    name="director"
                                    id="director"
                                    placeholder="Christopher Nolan"
                                    onChange={this.onChange}
                                />
                                <Label for="imdb_rate">
                                    Imdb Rate
                                </Label>
                                <Input 
                                    type="number"
                                    step="0.1"
                                    min='0'
                                    max='10'
                                    name="imdb_rate"
                                    id="imdb_rate"
                                    placeholder="8.6"
                                    onChange={this.onChange}
                                />
                                <Label for="your_rate">
                                    Your Rate
                                </Label>
                                <Input 
                                    type="number"
                                    step="0.1"
                                    min='0'
                                    max='10'
                                    name="your_rate"
                                    id="your_rate"
                                    placeholder="9.0"
                                    onChange={this.onChange}
                                />
                            </FormGroup>
                            <Button
                                color="dark"
                                style={{ marginBottom: '2rem', marginLeft: '12rem' }}
                            >Add Item</Button>
                        </Form>
                    </ModalBody>
                </Modal></Fragment>
                : <Fragment><h4 className="mb-3 ml-4" align="center">Please login</h4></Fragment> }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    movie: state.movie,
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {addMovie})(MovieModal);