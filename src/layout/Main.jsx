import React from "react";
import { MoviesList } from "../components/MoviesList"; 
import { Preloader } from "../components/Preloader";
import { Search } from "../components/Search";


class Main extends React.Component{
    state = {
        movies: [],

    }

    componentDidMount() {
        fetch('http://www.omdbapi.com/?apikey=3db7964c&s=matrix')
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search}))
    }

    searchMovies = (str) => {
        fetch(`http://www.omdbapi.com/?apikey=3db7964c&s=${str}`)
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search}))
    }

    render() {
        const {movies} = this.state

        return <main className="container content">
            <Search searchMovies={this.searchMovies} />
            {
                movies.length ? (
                <MoviesList movies={this.state.movies} />
                ) : <Preloader />
            }
        </main>
    }
}


export {Main}