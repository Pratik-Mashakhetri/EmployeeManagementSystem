import React from 'react'

export const FirstPage = () => {
  return (
    <div>
      <h1 className='heading'>Welcome To Employee Management System</h1>

      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://www.zimyo.com/middle-east/wp-content/uploads/2024/12/Employee-Management-System-scaled-1.jpg" class="d-block w-100" style={{"height":"810px"}}alt="IMG1"></img>
              <div class="carousel-caption d-none d-md-block">
                {/* <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p> */}
              </div>
          </div>
          <div class="carousel-item">
            <img src="https://a-us.storyblok.com/f/1019507/8c4dfef1d9/microsoftteams-image-20-289-29-jun-20-2023-11-54-34-0559-am.png" class="d-block w-100" style={{"height":"810px"}}alt="Img2"></img>
              <div class="carousel-caption d-none d-md-block">

              </div>
          </div>
       
          <div class="carousel-item">
            <img src="https://leapmax.ai/wp-content/uploads/2024/10/employee-management-system.webp" class="d-block w-100" alt="Img3"></img>
              <div class="carousel-caption d-none d-md-block">
              </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}
