import React from 'react'
import './Portfolio.css'

const Portfolio = () => {
  return (
    <div className='pp-container'>
      <h2 className='p-head' data-aos='fade-right'>Our Immense and Organised team.</h2>
      <div className="paddings innerWidth flexCenter ">
        <div className="p-desc">
          <p data-aos='fade-left'>Our companny always vlaues its Client's and maintains a healthy relations. For this to achieve we work as a team to meet the goals and satisfactions.
          Teamwork in a company refers to the collaborative effort of a group of individuals working together to achieve common goals and objectives. It's a vital aspect of any successful organization and involves employees from various departments pooling their skills, knowledge, and resources to solve problems, make decisions, and complete tasks. Effective teamwork fosters a positive work environment, encourages innovation, enhances productivity, and contributes to the overall success of the company.
          </p>
        </div>
        <div className="p-individul">
          <p className='c-heading' data-aos='fade-down'>Our Team Members</p> <br />
          <div className="flexCenter p-card">
            <div className="p-left" data-aos='fade-right'>
              <img src="./header/logo.png" alt="" />
            </div>
            <div className="p-right" data-aos='fade-left'>
              <h3>Prakash Kumar Nayak</h3>
              <span>A brilliant mind with full of creativity.</span> <br />
              <span>A well orgainised and hardworking person.</span> <br />
              <span>A team player.</span> <br />
              <button className='button'>
                <a href="https://www.google.com">Click Here</a>
              </button>
            </div>
          </div>

          <div className="flexCenter p-card">
          <div className="p-right" data-aos='fade-right'>
              <h3>Pavan Kumar</h3>
              <span>A brilliant mind with full of creativity.</span> <br />
              <span>A well orgainised and hardworking person.</span> <br />
              <span>A team player.</span> <br />
              <button className='button'>
                <a href="http://pawaninsights.com.ezyro.com/?i=1">Click Here</a>
              </button>
            </div>

            <div className="p-left" data-aos='fade-left'>
              <img src="./header/logo.png" alt="" />
            </div>
            
          </div>

          <div className="flexCenter p-card">
            <div className="p-left" data-aos='fade-right'>
              <img src="./header/logo.png" alt="" />
            </div>
            <div className="p-right" data-aos='fade-left'>
              <h3>Akshay Singh</h3>
              <span>A brilliant mind with full of creativity.</span> <br />
              <span>A well orgainised and hardworking person.</span> <br />
              <span>A team player.</span> <br />
              <button className='button'>
                <a href="https://www.google.com">Click Here</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio