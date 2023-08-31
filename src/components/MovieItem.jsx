function MovieItem(props) {
    const {
        Title: title, 
        Year: year, 
        imdbID: id, 
        Type: type, 
        Poster: poster} = props;

    return <div id={id} className="card movieItem">
        <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src={poster} alt=""/>
        </div>
        <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">{title}<i className="material-icons right">more_vert</i></span>
            <p>{year}<span className="right">{type}</span></p>
        </div>
        <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">{title}<i className="material-icons right">close</i></span>
            <p>Here is some more information about this product that is only revealed once clicked on.</p>
        </div>
    </div>
}


export {MovieItem}