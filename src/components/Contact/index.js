import { useEffect, useState } from 'react';
// import Loader from 'react-loaders';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const form = useRef();

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_q72ip6g', 'template_p1im51h', form.current, '9K4J4SkwqNkvtkCua')
      .then(
        () => {
          alert('Message successfully sent!');
          window.location.reload(false);
        },
        () => {
          alert('Failed to send the message, please try again');
        }
      );
  };

  return (
    <>
      <div className="container contact-page">
        <div className="contact-wrapper">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I’m interested in freelance opportunities—especially ambitious or large projects. Feel free to reach out with any requests or questions!
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li>
                  <input placeholder="Name" type="text" name="from_name" required />
                </li>
                <li>
                  <input placeholder="Email" type="email" name="user_email" required />
                </li>
                <li>
                  <input placeholder="Subject" type="text" name="subject" required />
                </li>
                <li>
                  <textarea placeholder="Message . . ." name="message" required></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND MESSAGE" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      {/* <Loader type="pacman" /> */}
    </>
  );
};

export default Contact;