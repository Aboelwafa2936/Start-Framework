import src from '../../assets/avataaars.aa9aff02ddd0ef36a1724ecef4133df9.svg';
import style from './home.module.css';


export default function Home() {
  return (
    <div className={`container-fluid  ${style.bgHome}`}>
      <div className={`col-md-3 mx-auto`}>
        <img src={src} className='img-fluid' alt="" />
        <h1 className='text-white my-4 text-center'>START FRAMEWORK</h1>
        <div className="header-shape d-flex justify-content-center align-items-center mt-2 mb-3">
          <span className="bg-white left me-2"></span>
          <span><i className="fa-solid fa-star text-white"></i></span>
          <span className="bg-white right ms-1"></span>
        </div>
        <p className='text-white mb-0 pb-5'>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </div>
  )
}
