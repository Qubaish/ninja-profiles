import React, { useState, useEffect, useRef } from "react";
import clsx from "clsx";
import PropTypes from 'prop-types';
import { StyledWrapper, StyledImg } from './styled';

function LazyImage({ className, src, alt, lqip, aspectRatio = 2 / 3 }) {
    const [loaded, setLoaded] = useState(false);
    const imgRef = useRef();
    useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
        setLoaded(true);
    }
    }, []);

    return (
        <StyledWrapper className={className}>
            <div data-testid="ratio" style={{ paddingBottom: `${100 / aspectRatio}%` }} />
            {lqip && <StyledImg src={lqip} alt="" aria-hidden="true" />}
        <StyledImg
            loading="lazy"
            src={src}
            alt={alt}
            ref={imgRef}
            onLoad={() => setLoaded(true)}
            className={clsx("source", loaded && "loaded")}
        />
     </StyledWrapper>
  );
}

LazyImage.propTypes = {
    className: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string,
    lqip: PropTypes.string,
    aspectRatio: PropTypes.number,
}

export default LazyImage;
