import React from 'react';
import PropTypes from 'prop-types';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import LazyImage from '../../atoms/LazyImage';
import Icons from '../../atoms/Icons';
import { StyledProfileCard, StyledPersonalDetails, StyledContactInfo } from './styled';
import { lqip, officeText } from '../../utils/constant';

const iconsToShow = {
    linkedIn: faLinkedin,
    gitHub: faGithub,
    twitter: faTwitter
};

const iconsToShowf = (props) => {
    const data = Object.keys(props).map(icon => {
        return props[icon] ? {
            icon: iconsToShow[icon],
            href: props[icon],
            name: icon,
        } : null;
    }).filter(x => x);
    return data;
};

export default function ProfileCard({ className, profile}) {
    const { name, office, imagePortraitUrl, linkedIn, twitter, gitHub } = profile;

    return (
        <StyledProfileCard className={className} sec={3}>
            <LazyImage
                className="avatar"
                aspectRatio={1 / 1}
                lqip={lqip}
                src={imagePortraitUrl}
                alt={`${name} ninja profile`}
            />
            <StyledContactInfo>
                <StyledPersonalDetails>
                    <h1>{name}</h1>
                    <p>{`${officeText} ${office}`}</p>
                </StyledPersonalDetails>
                <Icons icons={iconsToShowf({linkedIn, gitHub, twitter})} />
            </StyledContactInfo>
        </StyledProfileCard>
    );
}

ProfileCard.propTypes = {
    className: PropTypes.string,
    profile: PropTypes.objectOf({
        name: PropTypes.string,
        office: PropTypes.string,
        imagePortraitUrl: PropTypes.string,
        linkedIn: PropTypes.string,
        gitHub: PropTypes.string,
        twitter: PropTypes.string,
    }),
};