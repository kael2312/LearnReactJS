import React from "react";
import PropTypes from "prop-types";
import Images from "../../constants/image";
import "./banner.scss";

Banner.propTypes = {
    bannerTitle: PropTypes.string,
    bannerImgUrl: PropTypes.string,
};

Banner.defaultProps = {
    bannerTitle: '',
    bannerImgUrl: Images.ORANGE_BG
};

function Banner(props) {
    const { bannerTitle, bannerImgUrl } = props;
    

    return (
        <section className="banner" style={{backgroundImage: `url(${bannerImgUrl})`}}>
            <h1 className="banner__title">{bannerTitle}</h1>
        </section>
    );
}

export default Banner;
