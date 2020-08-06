import React from 'react';
import PropTypes from 'prop-types'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Icons({icons, className, target}) {
    return (
        <div className={className}>
            {icons.map((icon, i) => ( 
                <a data-testid={`icon-${i}`} href={icon.href} alt={icon.name} key={i} target={target}>
                    <FontAwesomeIcon icon={icon.icon} />
                </a>
            ))}
        </div>
    );
}

Icons.propTypes = {
    icons: PropTypes.array,
    className: PropTypes.string,
    target: PropTypes.string,
}

Icons.defaultProps = {
    target: '_blank'
};
