import React from 'react';
import {Badge} from 'reactstrap';

const MovieGenresListComponent = ({ index, movieGenres, genresfilm }) => {
    return (
        <span key={'genercontainer_' + genresfilm + '_' + index}>
            {
                movieGenres && movieGenres.map(function (geners, index) {
                    if (geners.id === genresfilm) {
                        return (
                            <span key={'gener_' + geners.id + '_' + index}>
                                <Badge className="customBadge" color="primary">{geners.name}</Badge>
                            </span>
                        )
                    }
                    return null;
                }, this)
            }
        </span>
    );
}

export default MovieGenresListComponent;