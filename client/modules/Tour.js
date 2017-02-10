import React from 'react'
import NavLink from './NavLink'

export default ({ tours, params }) => {
  if (!tours) {
    return (<div />);
  }

  const id = params.TourID;
  const thisTour = tours.find(elem => elem.id == id);
  const divStyle = {
    backgroundImage: 'url(' + thisTour.image + ')'
  }

<<<<<<< HEAD
  render() {
    if (this.state.singleTour == {}) {
      return (
        <div></div>
      );
    }
    const id = this.props.params.TourID;
    const thisTour = this.state.singleTour;
    const divStyle = {
      backgroundImage: 'url(' + thisTour.image + ')'
    }
    return (
      <div className="container">

        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" >
          
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          
          <div className="carousel-inner" role="listbox" >
            <div className="carousel-item">
              <img src="..." alt="..." />
            </div>
            <div className="carousel-item">
              <img src="..." alt="..." />
            </div>
            <div className="carousel-item">
              <img src="..." alt="..." />
            </div>
          </div>
          
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
          </a>
        </div>

        <div className="space"></div> 

        <h1 className="text-center">
          {thisTour.title}
        </h1>

        <div className="space"></div> 

        <div className="center-cropped-tour col-md-6" style={divStyle}>
        </div>

        <div className="space"></div>

        <h3>Tour guide:{thisTour.tourGuide}</h3>

        <h3>Price:{thisTour.price}</h3>
        <h3>Time:{thisTour.time}</h3>
        <p>{thisTour.description}</p>
        <NavLink to="/Login"><button type="button" className="btn btn-primary btn-lg btn-block">Book this experience</button></NavLink>
      </div>
    );
  }
=======
  return (
    // Button doesn't do anything aside from take you to login, make sure to refactor
    <div className="container text-center ">

      <div className="space" /> 
      <h1 className="text-center">{thisTour.title}</h1>
      <div className="space" />

      <div className="center-cropped-tour col-md-6" style={divStyle} />
      <div className="space" />

      <h3>Tour guide: {thisTour.tourGuide}</h3>
      <h3>Price: {thisTour.price}</h3>
      <h3>Time: {thisTour.time}</h3>
      <p>{thisTour.description}</p>

      <NavLink to="/Login">
        <button type="button" className="btn btn-primary btn-lg btn-block">
          Book this experience
        </button>
      </NavLink>
    </div>
  );
>>>>>>> upstream/master
}
