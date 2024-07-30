

export default function contact() {
  return (
    <div className="container mt">
      <div className="p-5">
      <h1 className="text-center">CONTACT SECTION</h1>
      <div className="header-shape d-flex justify-content-center align-items-center mt-2 mb-3">
          <span className="right bg-black me-2"></span>
          <span><i className="fa-solid fa-star"></i></span>
          <span className='left bg-black ms-1'></span>
      </div>
      <form className="w-75 mx-auto">
        <input type="text" className="form-control border-0 p-3 border-bottom mx-auto mb-4" placeholder="userName" />
        <input type="number" className="form-control border-0 p-3 border-bottom mx-auto mb-4" placeholder="userAge" />
        <input type="email" className="form-control border-0 p-3 border-bottom mx-auto mb-4" placeholder="userEmail" />
        <input type="password" className="form-control border-0 p-3 border-bottom mx-auto mb-4" placeholder="userPassword" />
        <button className="btn" id="btnSubmit">send message</button>
      </form>
      </div>
    </div>
  )
}
