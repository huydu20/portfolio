import classNames from 'classnames/bind';
import styles from './Mainlayout.module.scss';

import Navbar from '../Navbar';

const cx = classNames.bind(styles);

function MainLayout({ children }) {
    return (
        <div className={cx('app')}>
            <Navbar />
            <div className={cx('container')}>{children}</div>
        </div>
    );
}

export default MainLayout;
