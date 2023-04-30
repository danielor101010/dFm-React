import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div>
        <header className="first-header">
  <div className="f-header-content">
    <h1 className="headerTitle">Welcome to dFm </h1>
    <h3><span className="red-letter">D</span>rive For Money</h3>
    <p className="p-header">Here you can earn money or use our services</p>

    {/* login buttons */}
    <div className="loginButtons">
      <Link to="/Login"><button type="button" className="Inbutton" name="button">Login</button></Link>
      <Link to="/SignUp"><button type="button" className="Upbutton " name="button">Sign Up</button></Link>
    </div>
  </div>
</header>

<section className="white-section" id="ourservices">
  <h3 className="section-heading">Our Services</h3>
  <div className="container-fluid">
    <div className="row">
      <div className="service-box col-lg-4">
        <i className="icon fas fa-check-circle fa-4x"></i>
        <h3 className="service-title">Travels</h3>
        <p>Our drivers will take you from place to place at an affordable price suitable for every budget.</p>
      </div>
      <div className="service-box col-lg-4">
        <i className="icon fas fa-check-circle fa-4x"></i>
        <h3 className="service-title">Shipments</h3>
        <p>Our drivers also offer a service of deliveries from place to place with high availability and at any hour.</p>
      </div>
      <div className="service-box col-lg-4">
        <i className="icon fas fa-check-circle fa-4x"></i>
        <h3 className="service-title">Availability</h3>
        <p>Our site is at your service twenty-four hours a day with a wide audience of drivers who will be happy to help you at any hour.</p>
      </div>
    </div>
  </div>
</section>

<hr/>
<section className="colored-section" id="testimonials">
  <div id="testimonial-carousel" className="carousel slide" data-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active container-fluid">
        <h2 className="testimonial-text">Working with a dFm Website is a recommended job for anyone looking to make some money in their spare time</h2>
        <img className="testimonial-image" src="https://media-cldnry.s-nbcnews.com/image/upload/newscms/2020_07/3227271/200212-jennifer-aniston-cs-900a.jpg" alt="driver-profile" />
        <em> Rechel Grin - Driver, Illinois</em>
      </div>
      <div className="carousel-item container-fluid">
        <h2 className="testimonial-text">I recommend everyone to use the site, its use is easy and simple. Just getting from place to place </h2>
        <img className="testimonial-image" src="https://i.guim.co.uk/img/media/561c7de9ead71433817771724a31373c2d4f32e7/0_279_2400_1440/master/2400.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=58c5062d3a48e8c292ac97c87d57e958" alt="driver-profile" />
        <em> Goey Tribbiani - Passenger, Kalifornia </em>
      </div>
    </div>
    <a className="carousel-control-prev" href="#testimonial-carousel" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon"></span>
    </a>
    <a className="carousel-control-next" href="#testimonial-carousel" role="button" data-slide="next">
      <span className="carousel-control-next-icon"></span>
    </a>
  </div>

  <hr />

  <section className="white-section" id="contact">
    <h2 className="section-heading ">Contact and About us</h2>

    <div className="container-fluid">
      <div className="row">

        <div className="contact-box col-lg-6">
          <h2 className="contact-title">Contact us <i className="fas fa-address-book"></i></h2>
          <p>Hi and thank you  for using DFm! For any suggestion, comment and question we are at your service at our email address.
            Please click on the button below and write to us and we will be happy to be at your service at any time of the day.<br/> <em> Keep in touch! </em></p>

          <a className="btn" href="mailto:info@ari.w.05122@gmail.com">Send Email</a>
        </div>

        <div className="about-box col-lg-6">
          <h2 className="about-title">About us <i className="fas fa-address-card "></i></h2>
          <p>The developers of this website are third year students in the computer science degree at Ashkelon Gan Yavne College.
            The site was built by <em>Daniel Orlik</em>, <em>Benyaho Tamsut</em> and <em>Ari Weisner</em>.</p>
        </div>

      </div>
    </div>
  </section>
</section>

   
    </div>
  );
}

export default Home;