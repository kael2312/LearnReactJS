import React, { useState } from "react";
import PropTypes from "prop-types";
import Banner from "../../../../components/Banner/banner";
import PhotoForm from "../../components/PhotoForm/photo-form";
import "./add-edit-page.scss";
import { useDispatch, useSelector } from "react-redux";
import { addPhoto, updatePhoto } from "features/Photo/photoSlice";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

AddEditPage.propTypes = {};

function AddEditPage(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const { photoId } = useParams();
    const isAddMode = !photoId;
    const photoEdited = useSelector((state) =>
        state.photos.find((photo) => photo.id === photoId)
    );

    const initialValues = isAddMode
        ? {
              id: "",
              title: "",
              categoryId: "",
              photo: "",
          }
        : photoEdited;

    console.log("photoEdited", photoEdited);

    const handleSubmit = (value) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                if (isAddMode) {
                    dispatch(addPhoto(value));
                }else{
                    dispatch(updatePhoto(value));
                }
                history.push("/photos");
                resolve(true);
            }, 2000);
        });
    };

    return (
        <div>
            <Banner bannerTitle="Pick your amazing photo 😎" />
            <div className="photo-edit__form">
                <PhotoForm
                    onSubmit={handleSubmit}
                    initialValues={initialValues}
                    isAddMode={isAddMode}
                />
            </div>
        </div>
    );
}

export default AddEditPage;
