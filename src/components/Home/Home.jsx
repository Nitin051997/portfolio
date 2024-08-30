import React, { useRef } from 'react';
import './Home.css';
import pngData from '../Data/PngData.json';
import jpgData from '../Data/JpgAndGifData.json';

const Home = (props) => {

    const downloadLink = useRef(null);

    const handleDownload = () => {
        downloadLink.current.click();
      };

    const imagePng = pngData;
    const imageJpg = jpgData;

  return (
    <>
    <section className='home-section-container'>
        <div className='profile-info-container'>
            <span className='profile-info-one'>Hey..! I'm</span>
            <span className='profile-info-two'><i>N I T I N</i></span>
            <span className='profile-info-three'>
                <span className='profile-info-three-job'>Front</span>
                <i>{`</>`}</i>
                &nbsp;
                <span className='profile-info-three-title'>Developer</span>
            </span>
            <div className='profile-btn-container'>
                <a style={{display: 'none'}} href={`${process.env.PUBLIC_URL}/assets/NitinSivakumar.pdf`} download={`NitinSivakumar_CV.pdf`} ref={downloadLink}>Download</a>
                <button className="button-download-cv" onClick={() => handleDownload()}>Download CV</button>
                <button className="button-contact" onClick={() => props.setNavigate(5)}>Contact</button>
            </div>
        </div>
        <div className='profile-pic-container'>
            <div className='profile-pic-cover'>
                <img className='profile-pic' src={`${process.env.PUBLIC_URL}/assets/profile.jpg`} alt='profile' />
                <div className='profile-social-cover-github make-hand' onClick={() => window.open('https://github.com/Nitin051997', '_blank')}>
                    <img className='pic-github' src={`${process.env.PUBLIC_URL}/assets/github.png`} alt='github' />
                </div>
                <div className='profile-social-cover-linkedin make-hand' onClick={() => window.open('https://www.linkedin.com/in/nitin-nadar-b36a23191?utm_source=share&utm_campaign=share_via&utm_conten', '_blank')}>
                    <img className='pic-linkedin' src={`${process.env.PUBLIC_URL}/assets/linkedin.png`} alt='linkedin' />
                </div>
            </div>
        </div>
    </section>
    <section className='home-section-container-mobile'>
        <div className='profile-pic-container'>
            <div className='profile-pic-cover'>
                <img className='profile-pic' src={`${process.env.PUBLIC_URL}/assets/profile.jpg`} alt='profile' />
                <div className='profile-social-cover-github make-hand' onClick={() => window.open('https://github.com/Nitin051997', '_blank')}>
                    <img className='pic-github' src={`${process.env.PUBLIC_URL}/assets/github.png`} alt='github' />
                </div>
                <div className='profile-social-cover-linkedin make-hand' onClick={() => window.open('https://www.linkedin.com/in/nitin-nadar-b36a23191?utm_source=share&utm_campaign=share_via&utm_conten', '_blank')}>
                    <img className='pic-linkedin' src={`${process.env.PUBLIC_URL}/assets/linkedin.png`} alt='linkedin' />
                </div>
            </div>
        </div>
        <div className='profile-info-container'>
            <span className='profile-info-one'>Hey..! I'm</span>
            <span className='profile-info-two'><i>N I T I N</i></span>
            <span className='profile-info-three'>
                <span className='profile-info-three-job'>Front</span>
                <i>{`</>`}</i>
                &nbsp;
                <span className='profile-info-three-title'>Developer</span>
            </span>
            <div className='profile-btn-container'>
                <a style={{display: 'none'}} href={`${process.env.PUBLIC_URL}/assets/NitinSivakumar.pdf`} download={`NitinSivakumar_CV.pdf`} ref={downloadLink}>Download</a>
                <button className="button-download-cv" onClick={() => handleDownload()}>Download CV</button>
                <button className="button-contact" onClick={() => props.setNavigate(5)}>Contact</button>
            </div>
        </div>
    </section>
    <div style={{display: "none"}}>
        {imagePng.map((res) => {
            return (
                <img style={{width: "1px", height: "1px"}} src={`${process.env.PUBLIC_URL}/assets/${res}.png`} alt='load'/>
            )
        })}
        {imageJpg.map((res) => {
            if(res.type === 'jpg / gif'){
                return (
                    <>
                    <img style={{width: "1px", height: "1px"}} src={`${process.env.PUBLIC_URL}/assets/${res.value}.gif`} alt='load'/>
                    <img style={{width: "1px", height: "1px"}} src={`${process.env.PUBLIC_URL}/assets/${res.value}.jpg`} alt='load'/>
                    </>
                )
            } else {
                return (
                    <img style={{width: "1px", height: "1px"}} src={`${process.env.PUBLIC_URL}/assets/${res.value}.jpg`} alt='load'/>
                )
            }
        })}
    </div>
    </>
  )
}

export default Home;