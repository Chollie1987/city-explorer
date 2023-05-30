import React from "react";

class Movies extends React.Component {
    render() {
        
        return (
            <>
            {this.props.movieData.map(movie => <p>{movie.title}</p>)}
            </>
        )
    }
}

export default Movies;

