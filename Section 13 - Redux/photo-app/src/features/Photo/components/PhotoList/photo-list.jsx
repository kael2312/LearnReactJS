import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "reactstrap";
import PhotoCard from "../PhotoCard/photo-card";
import { useDispatch } from "react-redux";
import { deletePhoto } from "features/Photo/photoSlice";
import { useHistory } from "react-router-dom";

PhotoList.propTypes = {
    photoList: PropTypes.array,
};

PhotoList.defaultProps = {
    photoList: [],
};

function PhotoList(props) {
    const { photoList } = props;
    const dispatch = useDispatch();
    const history = useHistory()

    const handleOnClickRemove = (photoId) => {
        dispatch(deletePhoto(photoId))
    }

    const handleOnEditClick = (photo) => {
        history.push(`/photos/${photo.id}`)
    }

    return (
        <Row>
            {photoList.map((photo) => (
                <Col key={photo.id} xs="12" md="6" lg="3">
                    <PhotoCard photo={photo} onRemoveClick={handleOnClickRemove} onEditClick={handleOnEditClick} />
                </Col>
            ))}
        </Row>
    );
}

export default PhotoList;
