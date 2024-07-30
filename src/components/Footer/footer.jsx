import style from './footer.module.css';

export default function footer() {
  return (<>
    <div className={`container-fluid text-white`}>
      <div className={`row text-center align-items-center ${style.bgFooter} p-5`}>
        <div className="col-md-4">
          <h3>LOCATION</h3>
          <p>2215 John Daniel Drive</p>
          <p>Clark, MO 65243</p>
        </div>
        <div className="col-md-4">
          <h3>AROUND THE WEB</h3>
          <div className="icons">
            <a href="" className='text-white me-3'><i className='fa-brands fa-facebook'></i></a>
            <a href="" className='text-white me-3'><i className='fa-brands fa-twitter'></i></a>
            <a href="" className='text-white me-3'><i className='fa-brands fa-linkedin-in'></i></a>
            <a href="" className='text-white me-3'><i className='fa-solid fa-earth'></i></a>
          </div>
        </div>
        <div className="col-md-4">
          <h3>ABOUT FREELANCER</h3>
          <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
        </div>
      </div>

    </div>
        <p className={`${style.bgCopy} p-4 text-white text-center mb-0`}>Copyright © Your Website 2021</p>
    </>
  )
}
