import { useState } from 'react'
import img1 from "./assets/1.png"
import img2 from "./assets/2.png"
import img3 from "./assets/3.png"
import img4 from "./assets/4.png"
import img5 from "./assets/double.png"
import img6 from "./assets/campuslife.png"
import img7 from "./assets/echooling.png"
import img8 from "./assets/green.png"
// import {FontAwesomeIcon} from '@fontawesome/react-fontawesome'
import './App.css'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid image">
    <img className='logo' width="100px" height="100px" src={img7} alt="" />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div  className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto  mb-2 mb-lg-0 ">
        <li className="nav-item  last home">
          <a className="nav-link active " aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item last">
          <a className="nav-link" href="/">Pages</a>
        </li>
        <li className="nav-item last">
          <a className="nav-link" href="/">Courses</a>
        </li>
        <li className="nav-item last">
          <a className="nav-link" href="/">Blog</a>
        </li>
        <li className="nav-item ilast">
          <a className="nav-link " href="/">Contact</a>
        </li>
        
       
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search Courses" aria-label="Search"/>
       
        
      </form>
    </div>
  </div>
</nav>


{/* hero */}
<section id="hero">

<h4>Great Quality Cocial life </h4>

<p>Discover the world of <br /> possible university.</p>

<button >Admission</button>

</section>

<div  id="academics">
  
<h1  >Academics</h1>
<img src={img8} alt="" />
</div><br /><br />

<div className="container">
<section id="feature" className="section-p1">
        
        <div className="fe-box pic1 pic ">
            <h4>Lets talk science</h4>
            <p>Learn More</p>
            
        </div>
        <div className="fe-box pic2 pic ">
        <h4>Innovative Courses</h4>
        <p>Learn More</p>
            
            
        </div>
        <div className="fe-box pic3 pic">
        <h4>Cloud Storage</h4>
        <p>Learn More</p>
            
            
            
        </div>
        <div className="fe-box pic4 pic">
        <h4>Online Education</h4>
        <p>Learn More</p>
            
            
        </div>
    </section>
</div><br /><br /><br />

<section id="sm-banner" className="section-p1 ">
        <div className="banner-box ban1">
        </div>

        <div className="banner-box ban2 ">
            <h1 className="first1"><br /><br />Welcome to</h1>
            <h1 className="first" >Echooling LMS Platform</h1><br />
            <h5>Education is both the act of teaching knowledge to others and</h5>
            <h5>the act of receiving knowledge from someone else.</h5><br /><br />
            <p>Have questions? <span className='free'>Get Free Guide</span></p><hr />
            <p>Education also refers to the knowledge received through schooling instruction
              and to the institution of teaching as a whole. The main purpose of education
              is the integral development of a person.</p><br />
              <button className="button">Read More </button>

        </div>
    </section><br /><br /><br />


    <section className="section4 container">
    <div  id="academics">
  
<h1  >Campus Life</h1>
<img src={img8} alt="" />
</div><br /><br />
      <div className=" sec1 campus">
      
      
        
      <div className="text" >
         <h5>Do More, Stress Less</h5>
         <span>Why I say old chap that is spiffing he legged</span><br /><span>it in my flat easy peasy.</span><br /><br />

         <h5>Do More, Stress Less</h5>
         <span>Why I say old chap that is spiffing he legged</span><br /><span>it in my flat easy peasy.</span><br /><br />

         <h5>Do More, Stress Less</h5>
         <span>Why I say old chap that is spiffing he legged</span><br /><span>it in my flat easy peasy.</span><br /><br />
      </div>
      
      
     
         
          
        
        <div className="sec2">
          <img src={img6} alt="" />
        </div>
        </div><br /><br /><br />


        <button >More about campus life</button>
      

    </section>

    
    <div  id="academics">
  
  <h1  >Popular Courses</h1>
  <img src={img8} alt="" />
  </div><br /><br />  
    
    <div className="container">
<section id="feature" className="section-p1">
        
        <div className="fe-box ">
            <img src={img1} alt=""/>
            <p className='red'>UX Desigh</p>
            <h6>Dave conservatoire is the <br /> Entirely free online</h6><hr />
            <p>56 Students</p>
            
        </div>
        <div className="fe-box">
            <img  src={img2} alt=""/>
            <h6>Dave conservatoire is the <br /> Entirely free online</h6><hr />
            <p>56 Students</p>
            
            
        </div>
        <div className="fe-box img3">
            
            <img  src={img3} alt=""/>
            <h6>Dave conservatoire is the <br /> Entirely free online</h6><hr />
            <p>56 Students</p>
            
            
        </div>
        <div className="fe-box">
            <img  src={img4} alt=""/>
            <h6>Dave conservatoire is the <br /> Entirely free online</h6><hr />
            <p>56 Students</p>
            
            
        </div>
        
   
    </section>


</div><br /><br />
<button className='courses'>View all Courses</button><br /><br /><br />
{/* <h1 id="academics" >Academics</h1>
    <div className="container">
<section id="feature" className="section-p1">
        
        <div className="fe-box ">
            <img src={img1} alt=""/>
            
        </div>
        <div className="fe-box">
            <img  src={img2} alt=""/>
            
        </div>
        <div className="fe-box img3">
            
            <img  src={img3} alt=""/>
            
        </div>
        <div className="fe-box">
            <img  src={img4} alt=""/>
            
        </div>
        
   
    </section>


</div><br /><br />

<h1 id="academics" >What our students saying</h1>

<section className='say container'>
  <div><img src={img3} alt="" /></div>
  <div>
    <h4>Justin Case</h4>
    <p>Student</p>
  </div>
</section> */}

<section className='container count'>
  

</section>






        
    </>
  )
}

export default App
