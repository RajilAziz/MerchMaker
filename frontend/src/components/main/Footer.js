import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"
const Footer = () => {
  return (
    <div>
      <section>
        <footer id='footer'>
        <div class="footer-top">
      <div class="container">
        <div class="row">

          <div class="col-lg-3 col-md-6 footer-contact">
            <h3>Panache inclination station</h3>
            <p>
              A108 Adam Street <br/>
              New York, NY 535022<br/>
              United States <br/><br/>
              <strong>Phone:</strong> +1 5589 55488 55<br/>
              <strong>Email:</strong> PIS@example.com<br/>
            </p>
          </div>

          <div class="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i class="fa-solid fa-chevron-right"></i> <Link to="/main/home">Home</Link></li>
              <li><i class="fa-solid fa-chevron-right"></i><Link to="/main/aboutus">AboutUs</Link></li>
              <li><i class="fa-solid fa-chevron-right"></i> <Link to="/main/home">Services</Link></li>
              <li><i class="fa-solid fa-chevron-right"></i> <Link to="/main/home">Terms of Services</Link></li>
              <li><i class="fa-solid fa-chevron-right"></i><Link to="/main/home">Privacy Policy</Link></li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><i class="fa-solid fa-chevron-right"></i> <a href="#">Web Design</a></li>
              <li><i class="fa-solid fa-chevron-right"></i> <a href="#">Web Development</a></li>
              <li><i class="fa-solid fa-chevron-right"></i> <a href="#">Product Management</a></li>
              <li><i class="fa-solid fa-chevron-right"></i> <a href="#">Marketing</a></li>
              <li><i class="fa-solid fa-chevron-right"></i><a href="#">Graphic Design</a></li>
            </ul>
          </div>

          <div class="col-lg-4 col-md-6 footer-newsletter">
            <h4>Join Our Newsletter</h4>
            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
            <form action="" method="post">
              <input type="email" name="email"/><input type="submit" value="Subscribe"/>
            </form>
          </div>

        </div>
      </div>
    </div>

    <div class="container d-md-flex py-4">

      <div class="me-md-auto text-center text-md-start">
        <div class="copyright">
          &copy; Copyright <strong><span>PIS</span></strong>. All Rights Reserved
        </div>
        <div class="credits">
          
          Designed by <a href="#">Panache inclination station</a>
        </div>
      </div>
      <div class="social-links text-center text-md-right pt-3 pt-md-0">
        <a href="#" class="twitter"><i class="fa-brands fa-twitter"></i></a>
        <a href="#" class="facebook"><i class="fa-brands fa-facebook"></i></a>
        <a href="#" class="instagram"><i class="fa-brands fa-instagram"></i></a>
        <a href="#" class="google-plus"><i class="fa-brands fa-skype"></i></a>
        <a href="#" class="linkedin"><i class="fa-brands fa-linkedin-in"></i></a>
      </div>
    </div>
        </footer>
      </section>
    </div>
  )
}

export default Footer