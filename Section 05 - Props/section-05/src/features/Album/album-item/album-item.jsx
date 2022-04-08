import React from 'react';
import PropTypes from 'prop-types';
import './album-item.scss';

AlbumItem.propTypes = {
    album: PropTypes.object.isRequired
};

function AlbumItem({album}) {
    return (   
        <div className='album'>
            <div className='album__thumbnail'>
                <img src={album.thumbnailUrl} alt="" />
            </div>
            <p className='album__name'>{album.name}</p>
        </div>
    );
}

export default AlbumItem;