import PhotoList from "features/Photo/components/PhotoList/photo-list";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import Banner from "../../../../components/Banner/banner";
import Images from "../../../../constants/image";

MainPage.propTypes = {};

function MainPage(props) {
    const photos = useSelector(state => state.photos)
    return (
        <div className="photo-main">
            <Banner
                bannerTitle="🎉 Your awesome photos 🎉"
                bannerImgUrl={Images.PINK_BG}
            />

            <Container className="text-center">
                <div className="py-5">
                    <Link to="/photos/add">Add new photo</Link>
                </div>

                <PhotoList photoList={photos} />
            </Container>
        </div>
    );
}

export default MainPage;
