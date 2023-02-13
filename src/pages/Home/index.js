import AOS from 'aos';
import 'aos/dist/aos.css';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';

import { ArrowRight, DownLoad } from '../../components/Icons';
import { images } from '../../assets/imgs';
import files from '../../assets/files';
import Image from '../../components/Image';
import Button from '../../components/Button';

const cx = classNames.bind(styles);

function Home() {
    AOS.init();
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('title')} data-aos="fade-up" data-aos-easing="ease-out" data-aos-duration="500">
                    <h1>
                        Hello!!, I'm <span className={cx('name')}>Huy Du</span>
                    </h1>
                    <h3>Welcome to my Portfolio.</h3>
                    <div className={cx('btns')}>
                        <Button
                            className={cx('down-cv')}
                            downloadBtn
                            download
                            href={files.temp}
                            rightIcon={<DownLoad size={18} color="white" />}
                        >
                            Download CV
                        </Button>
                        <Button
                            className={cx('explore')}
                            commonBtn
                            to="/contact"
                            rightIcon={<ArrowRight size={18} color="white" />}
                        >
                            Contact Me
                        </Button>
                    </div>
                </div>
                <div className={cx('banner')} data-aos="fade-left" data-aos-easing="ease-out" data-aos-duration="500">
                    <Image className={cx('img')} src={images.banner} alt="Banner" />
                </div>
            </div>
        </div>
    );
}

export default Home;
