import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    children,
    className,
    downloadBtn = false,
    commonBtn,
    leftIcon,
    rightIcon,
    download,
    href,
    to,
    onClick,
    ...passProps
}) {
    let Component = 'button';

    const props = {
        onClick,
        ...passProps,
    };

    if (href) {
        props.href = href;
        Component = 'a';
    } else if (to) {
        props.to = to;
        Component = Link;
    }

    const classes = cx('wrapper', {
        [className]: className,
        commonBtn,
        downloadBtn,
    });

    return (
        <Component className={classes} {...props}>
            {leftIcon && <>{leftIcon}</>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <>{rightIcon}</>}
        </Component>
    );
}

export default Button;
