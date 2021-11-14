import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
        <section className='footer-subscription'>
            <h1 className='footer-subscription-heading'>
            TV Cable Acoyapa Apolo 11 <br/><br/> Número telefónico: 2518-0355 
            </h1>
        </section>
        <section class='social-media'>
            <div class='social-media-wrap'>
                <div class='footer-logo'>
                    <img to='/' className='social-logo' src='https://scontent.fmga3-1.fna.fbcdn.net/v/t31.18172-8/11219474_580880788718685_213548138517917174_o.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=wKGH9XbEGnwAX-2sXad&_nc_ht=scontent.fmga3-1.fna&oh=edce0fb51b21677e08aab1a19950e98d&oe=61AA9C00'/>
                </div>
                <small class='website-rights'>TVApolo © 2021</small>
                <div class='social-icons'>
                    <Link
                    class='social-icon-link facebook'
                    to='https://www.facebook.com/TV-Cable-Acoyapa-APOLO-11-509717942501637/?ref=page_internal'
                    target='_blank'
                    aria-label='Facebook'
                    >
                    <i class='fab fa-facebook-f' />
                    </Link>
                 </div>
            </div>
        </section>
    </div>
  );
}

export default Footer;