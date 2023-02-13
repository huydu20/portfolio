import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Projects.module.scss';

import projects from '../../projectDatas';
import Image from '../../components/Image';
import { ArrowLeft, ArrowRight } from '../../components/Icons';

const cx = classNames.bind(styles);

function Projects() {
    const [slideIndex, setSlideIndex] = useState(Math.floor(Math.random() * projects.length));

    function gotoSlide(index) {
        setSlideIndex(index);
    }
    console.log();

    function prevSlide() {
        const isFirstSlide = slideIndex === 0;
        const newIndex = isFirstSlide ? projects.length - 1 : slideIndex - 1;
        setSlideIndex(newIndex);
    }

    function nextSlide() {
        const isLastSlide = slideIndex === projects.length - 1;
        const newIndex = isLastSlide ? 0 : slideIndex + 1;
        setSlideIndex(newIndex);
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('content')} data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="500">
                    <div className={cx('title')}>
                        <h1>
                            {projects[slideIndex].title}
                            <div className={cx('line')}></div>
                        </h1>
                        <p>{projects[slideIndex].description}</p>
                    </div>
                    <div className={cx('links')}>
                        <div className={cx('link-item')}>
                            <h3>Using</h3>
                            <div>
                                {projects[slideIndex].languages.map((img, index) => (
                                    <Image key={index} src={img} alt="slide image" />
                                ))}
                            </div>
                        </div>
                        <div className={cx('link-item')}>
                            <h3>Link</h3>
                            <div>
                                {projects[slideIndex].repos.map((repo, index) => (
                                    <a href={repo.url} key={index} target="_blank" rel="noopener noreferrer">
                                        <Image src={repo.img} alt="slide image" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('slider')} data-aos="fade-left" data-aos-easing="ease-out" data-aos-duration="500">
                    <a href={projects[slideIndex].url} className={cx('slide-img')}>
                        <Image src={projects[slideIndex].slideImg} />
                    </a>
                    <div className={cx('control')}>
                        <div className={cx('prev-btn')} onClick={prevSlide}>
                            <ArrowLeft size={38} color="#858591" />
                        </div>
                        <div className={cx('dots')}>
                            {projects.map((dot, index) => (
                                <div
                                    key={index}
                                    className={cx('dot-item', index === slideIndex ? 'active' : '')}
                                    onClick={() => gotoSlide(index)}
                                ></div>
                            ))}
                        </div>
                        <div className={cx('prev-btn')} onClick={nextSlide}>
                            <ArrowRight size={38} color="#858591" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
