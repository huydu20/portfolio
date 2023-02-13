import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';

import { ArrowRight } from '../Icons';

const cx = classNames.bind(styles);

function Navbar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link className={cx('logo')} to="/">
                    <span>Huy Du</span>
                </Link>
                <div className={cx('line')}></div>
                <div className={cx('nav')}>
                    <Link className={cx('nav-item')} to="/about">
                        About
                    </Link>
                    <Link className={cx('nav-item')} to="/projects">
                        Projects
                    </Link>
                    <Link className={cx('nav-item')} to="/activities">
                        Activities
                    </Link>
                </div>
                <Link className={cx('contact')} to="/contact">
                    <span>Contact</span>
                    <ArrowRight size={18} color="CurrentColor" />
                </Link>
            </div>
        </div>
    );
}

export default Navbar;
