import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList/album-list';

AlbumFeature.propTypes = {
    
};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'Nhạc Hoa Thịnh Hành',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/0/c/9/9/0c9962b7a26dc855b5e64428b588d773.jpg'
        },
        {
            id: 2,
            name: 'Nhạc Kpop Flop',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/f/b/9/a/fb9addef0fb2c786b294b9b55f74e6f9.jpg'
        },
        {
            id: 3,
            name: 'Nhạc Remix tung nóc',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/9/3/7/2/93726828695dcbdb6a652bfda73a2288.jpg'
        },
    ]
    return (
        <div>
            <AlbumList albumList={albumList}></AlbumList>
        </div>
    );
}

export default AlbumFeature;