import React from 'react'

const Mentors = () => {
  return (
    <>
      <div>
        <h1>Mentors</h1>
      </div>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner carousel">
          <div className="carousel-item active">
            <img src="https://bootstrapious.com/i/snippets/sn-team/teacher-4.jpg" className="d-block w-100" alt="..." height="550px" />
          </div>
          <div className="carousel-item">
            <img src="https://bootstrapious.com/i/snippets/sn-team/teacher-4.jpg" className="d-block w-100" alt="..." height="550px" />
          </div>
          <div className="carousel-item">
            <img src="https://bootstrapious.com/i/snippets/sn-team/teacher-4.jpg" className="d-block w-100" alt="..." height="550" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}

export default Mentors
