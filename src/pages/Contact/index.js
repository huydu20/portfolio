import { useState, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './Contact.module.scss';

import Button from '../../components/Button';
import Image from '../../components/Image';
import { images } from '../../assets/imgs';
// import useDebounce from '../../components/hooks/useDebounce';
import { Youtube, Facebook, Github } from '../../components/Icons';

const cx = classNames.bind(styles);

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const inputNameRef = useRef();
    const inputEmailRef = useRef();
    const inputMessageRef = useRef();

    function sendMessage() {
        const data = {
            name: name,
            email: email,
            message: message,
        };
        if (!name || !email || !message) {
            alert("You haven't filled it out");
            if (!name) {
                inputNameRef.current.focus();
                return;
            }
            if (!email) {
                inputEmailRef.current.focus();
                return;
            }
            if (!message) {
                inputMessageRef.current.focus();
                return;
            }
        }
        setName('');
        setEmail('');
        setMessage('');
        console.log(data);
        alert('Your message was send !!');
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')} data-aos="fade-up" data-aos-easing="ease-out" data-aos-duration="500">
                <div className={cx('form')}>
                    <div className={cx('title')}>
                        <h1>Let's get in touch!</h1>
                        <p>
                            Either by <span>email</span> or through my <span>social media</span>.
                        </p>
                    </div>
                    <div className={cx('form-inputs')}>
                        <div>
                            <label>Name</label>
                            <input
                                ref={inputNameRef}
                                value={name}
                                placeholder="Enter your name ...  "
                                onChange={(e) => setName(e.target.value)}
                                type="text"
                            />
                        </div>
                        <div>
                            <label>Email</label>
                            <input
                                ref={inputEmailRef}
                                value={email}
                                placeholder="Enter your email ..."
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                            />
                        </div>
                    </div>
                    <div className={cx('form-textarea')}>
                        <label>Message</label>
                        <textarea
                            ref={inputMessageRef}
                            value={message}
                            placeholder="Your message ...  "
                            onChange={(e) => setMessage(e.target.value)}
                            rows="240"
                        ></textarea>
                    </div>
                    <Button className={cx('send-btn')} commonBtn onClick={sendMessage}>
                        Send me !
                    </Button>
                </div>
                <div className={cx('social')}>
                    <a href="https://www.facebook.com/du.vanhuy">
                        <Facebook size={42} color="white" />
                    </a>
                    <a href="https://www.youtube.com/channel/UCMplfZd5BxMHy3Y6OVvLblg">
                        <Youtube size={42} color="white" />
                    </a>
                    <a href="https://github.com/huydu20">
                        <Github size={42} color="white" />
                    </a>
                </div>
                <div>
                    <Image src={images.airplay} alt="airplay" />
                </div>
            </div>
        </div>
    );
}

export default Contact;
