import React from 'react'
import axios from 'axios'
import NavLink from './NavLink'

export default class Tour extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      singleTour: {}
    };
  }

  componentDidMount() {
    axios.get('/tours/' + this.props.params.TourID).then((response) => {
      this.setState({singleTour: response.data[0]});
    });
  }

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
}





// {
//   image:  'https://a0.muscache.com/im/pictures/89957997-2e3f-40cb-8f0b-dcbd5626bd9c.jpg?aki_policy=large',
//   title: 'Maverick Biker',
//   tourGuide: 'Mark',
//   price: '$125',
//   time: '3 days',
//   rating: 2,
//   numberOfReviews: 2,
//   id: 6,
//   description: `We'll meet at my business, where I’ll hook you up with the bike you’ll use for the duration of our time together. I’ll introduce you to my colleagues, show you around and talk about why our business is special. From there we'll cross the elegant Vedado neighborhood to find my favorite coffee shop, Mamainés. I’ll leave you with some tips on places to ride before we reunite again. In order to get to Café Mamainé I will take you through my favorite neighborhood, El Vedado, a place that mixes history, elegance, and the vibrant energy of the "new Cuba."`
// } 