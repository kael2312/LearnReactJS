import React from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import "./photo-card.scss";

PhotoCard.propTypes = {
    photo: PropTypes.object,
    onEditClick: PropTypes.func,
    onRemoveClick: PropTypes.func,
};

PhotoCard.defaultProps = {
    photo: {},
    onEditClick: null,
    onRemoveClick: null,
};

function PhotoCard(props) {
    const { photo, onEditClick, onRemoveClick } = props;

    const onClickRemove = (photoId) => {
        if (onRemoveClick) {
            onRemoveClick(photoId)
        }
    }

    const onClickEdit = (photo) => {
        if (onEditClick) {
            onEditClick(photo)
        }
    }

    return (
        <div className="photo">
            <img src={photo.photo} alt={photo.title} />

            <div className="photo__overlay">
                <h3 className="photo__title">{photo.title}</h3>

                <div className="photo__actions">
                    <div>
                        <Button outline size="sm" color="light" onClick={() => {onClickEdit(photo)}}>
                            Edit
                        </Button>
                    </div>
                    <div>
                        <Button onClick={() => {onClickRemove(photo.id)}} outline size="sm" color="danger">
                            Remove
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PhotoCard;
