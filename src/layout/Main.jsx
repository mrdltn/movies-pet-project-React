import React from "react";
import { MoviesList } from "../components/MoviesList"; 


class Main extends React.Component{
    state = {
        movies: [],
    }

    componentDidMount() {
        fetch('http://www.omdbapi.com/?apikey=3db7964c&s=matrix')
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search}))
    }

    render() {
        const {movies} = this.state

        return <main className="container content">
            {
                movies.length ? (<MoviesList movies={this.state.movies} />) :
                <h4>Loading...</h4>
            }
        </main>
    }
}


export {Main}