import React from "react";
import { Link } from 'react-router-dom';
//import { Button } from './Button';
import "../../App.scss";

function Footer() {
    return (
        <div className='footer-container'>
          <section class='social-media'>
          <div class='social-media-wrap'>
            <div class='footer-logo'>
              <Link to='/' className='social-logo'>
                JDesigns   
              </Link>
            </div>
            <small class='website-rights'>JDesigns © 2022</small>
            <div class='social-icons'>
              <Link
                class='social-icon-link facebook'
                to= {{ pathname: "https://www.facebook.com/" }}
                target='_blank'
                aria-label='Facebook'
              >
                <i class='fab fa-facebook-f' />
              </Link>
              <Link
                class='social-icon-link instagram'
                to= {{ pathname: "https://www.instagram.com/jdesign_art/" }}
                target='_blank'
                aria-label='Instagram'
              >
                <i class='fab fa-instagram' />
              </Link>
              <Link
                class='social-icon-link etsy'
                to= {{ pathname: "https://www.etsy.com//" }}
                target='_blank'
                aria-label='Etsy'
              >
                <i class='fab fa-etsy' />
              </Link>
            </div>
          </div>
          </section>
        </div>
    );
}

export default Footer;