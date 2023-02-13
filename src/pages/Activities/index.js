import classNames from 'classnames/bind';
import styles from './Activities.module.scss';

const cx = classNames.bind(styles);

function Activities() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <h1>Updating ... </h1>
            </div>
        </div>
    );
}

export default Activities;
