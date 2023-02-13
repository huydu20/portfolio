import classNames from 'classnames/bind';
import styles from './About.module.scss';

import { images } from '../../assets/imgs';
import Button from '../../components/Button';
import Image from '../../components/Image';
import { Facebook, Github, Start, User, Youtube, Award, ArrowRight } from '../../components/Icons';

const cx = classNames.bind(styles);

function About() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Banner */}
                <div className={cx('banner')}>
                    <div className={cx('wallpaper')}>
                        <Image className={cx('img')} src={images.wallpaper} alt="Wallpaper" />
                    </div>
                    <div className={cx('intro')}>
                        <div className={cx('avatar')}>
                            <Image src={images.avatar} alt="Avatar" />
                        </div>
                        <div className={cx('body')}>
                            <div className={cx('title')}>
                                <h1 className={cx('full-name')}>Huy Du</h1>
                                <div className={cx('status')}>
                                    <p>
                                        -
                                        <Image className={cx('status-icon')} src={images.school} alt="Avatar" />
                                        I'm curently studying UTE.
                                    </p>
                                    <p>
                                        -
                                        <Image className={cx('status-icon')} src={images.book} alt="Avatar" />
                                        I'm curently learning Computer Engineer.
                                    </p>
                                    <p>
                                        -
                                        <Image className={cx('status-icon')} src={images.search} alt="Avatar" />
                                        I'm looking for work.
                                    </p>
                                    <p>
                                        -
                                        <Image className={cx('status-icon')} src={images.mail} alt="Avatar" />
                                        vanhuydu123@gmail.com.
                                    </p>
                                </div>
                            </div>
                            <div className={cx('actions')}>
                                <div className={cx('links')}>
                                    <a className={cx('link')} href="https://www.facebook.com/du.vanhuy">
                                        <Facebook size={42} color="white" />
                                    </a>
                                    <a
                                        className={cx('link')}
                                        href="https://www.youtube.com/channel/UCMplfZd5BxMHy3Y6OVvLblg"
                                    >
                                        <Youtube size={42} color="white" />
                                    </a>
                                    <a className={cx('link')} href="https://github.com/huydu20">
                                        <Github size={42} color="white" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Introdution */}
                <p className={cx('text')} data-aos="fade-up" data-aos-easing="ease-out" data-aos-duration="500">
                    I am a hardworking and ambitious individual with a great passion for the Information Tecnology. I am
                    currently a junior of studying Ho Chi Minh University of Technology and Education. I am looking for
                    a position in the industry in which I can put my knowledge and experience into practice, which will
                    ultimately benefit the operations of the organization I work for.
                </p>
                {/* About */}
                <div className={cx('about')} data-aos="fade-up" data-aos-easing="ease-out" data-aos-duration="500">
                    <div className={cx('section')}>
                        <h1 className={cx('heading')}>about me</h1>
                        <div className={cx('about-content')}>
                            <Image className={cx('document')} src={images.document} alt="Document" />
                            <div className={cx('infor')}>
                                <div className={cx('infor-item')}>
                                    <span>Full Name:</span>
                                    <p>Van Huy Du</p>
                                </div>
                                <div className={cx('infor-item')}>
                                    <span>Birthday:</span>
                                    <p>20/01/2002</p>
                                </div>
                                <div className={cx('infor-item')}>
                                    <span>Phone:</span>
                                    <p>0923096155</p>
                                </div>
                                <div className={cx('infor-item')}>
                                    <span>Address:</span>
                                    <p>Ho Chi Minh City</p>
                                </div>
                                <div className={cx('infor-item')}>
                                    <span>Email:</span>
                                    <p>vanhuydu123@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Skills */}
                <div className={cx('skills')}>
                    <div className={cx('section')}>
                        <div className={cx('skill-content')}>
                            <div
                                className={cx('content-left')}
                                data-aos="fade-right"
                                data-aos-easing="ease-out"
                                data-aos-duration="500"
                            >
                                <h1>
                                    <span>Skills</span> and tools
                                </h1>
                                <p>Proficient HTML, CSS, JavaScript, basic knowledge of React, ...</p>
                            </div>
                            <div
                                className={cx('content-right')}
                                data-aos="fade-left"
                                data-aos-easing="ease-out"
                                data-aos-duration="500"
                            >
                                <div>
                                    <Image src={images.html} alt="HTML" />
                                    <Image src={images.css} alt="CSS" />
                                    <Image src={images.js} alt="JavaScript" />
                                    <Image src={images.sass} alt="SASS" />
                                    <Image src={images.react} alt="React" />
                                </div>
                                <div>
                                    <Image src={images.word} alt="Word" />
                                    <Image src={images.excel} alt="Excel" />
                                    <Image src={images.ppt} alt="Powerpoint" />
                                    <Image src={images.figma} alt="Figma" />
                                </div>
                                <div>
                                    <Image src={images.c} alt="C" />
                                    <Image src={images.cplusplus} alt="C++" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Personal */}
                <div className={cx('personal')}>
                    <div className={cx('section', 'personal-container')}>
                        <Image
                            src={images.galaxy}
                            alt="Galaxy"
                            data-aos="fade-right"
                            data-aos-easing="ease-out"
                            data-aos-duration="500"
                        />
                        <div className={cx('personal-content')}>
                            <div
                                className={cx('personal-item')}
                                data-aos="fade-up"
                                data-aos-easing="ease-out"
                                data-aos-duration="500"
                                data-aos-delay="100"
                            >
                                <h3>
                                    <User size={32} color="#27ae60" />
                                    Personal
                                    <div className={cx('line')}></div>
                                </h3>
                                <p>Self-motivated, Enthusiastic Sociable.</p>
                            </div>
                            <div
                                className={cx('personal-item')}
                                data-aos="fade-up"
                                data-aos-easing="ease-out"
                                data-aos-duration="500"
                                data-aos-delay="200"
                            >
                                <h3>
                                    <Start size={32} color="#27ae60" />
                                    Interested
                                    <div className={cx('line')}></div>
                                </h3>
                                <p>
                                    Have a huge passion for <span>Football</span>, listen to
                                    <span> music</span>, playing <span>games</span>.
                                </p>
                            </div>
                            <div
                                className={cx('personal-item')}
                                data-aos="fade-up"
                                data-aos-easing="ease-out"
                                data-aos-duration="500"
                                data-aos-delay="300"
                            >
                                <h3>
                                    <Award size={32} color="#27ae60" />
                                    Certifications
                                    <div className={cx('line')}></div>
                                </h3>
                                <p>
                                    TOEIC Certificate with score <span>635</span> issued by IIG Viet Nam.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer */}
                <div className={cx('footer')}>
                    <div className={cx('section', 'footer-container')}>
                        <h1
                            className={cx('footer-title')}
                            data-aos="fade-right"
                            data-aos-easing="ease-out"
                            data-aos-duration="500"
                        >
                            Take a look at what I've <span>created</span>
                        </h1>
                        <Button
                            className={cx('explore-btn')}
                            commonBtn
                            rightIcon={<ArrowRight size={18} color="white" />}
                            to="/projects"
                            data-aos="fade-left"
                            data-aos-easing="ease-out"
                            data-aos-duration="500"
                        >
                            Explore Now
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
