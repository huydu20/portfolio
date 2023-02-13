import classNames from 'classnames';
import styles from './Image.module.scss';

function Image({ src, alt, className, ...prop }) {
    return <img className={classNames(className, styles.wrapper)} src={src} alt={alt} {...prop} />;
}

export default Image;
