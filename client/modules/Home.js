import React from 'react'
import ListElement from './ListElement'

// <<<<<<< HEAD


// export default class Home extends React.Component{
//   constructor(props) {
//     super(props);
//     this.state = {
//       tours: []
//     };
//   }

//   //get all tours and set first six as homepage's tours
//   componentDidMount() {
//     axios.get('/tours').then((response) => { this.setState({tours: response.data.slice(0, 6)})});
//   }

//   render() {
//     return (
//       <div>
//         <div className="jumbotron">
//           <div className="container jumboText">
//             <h1 >Experience worth spreading</h1>
//             <p >If you want special experience in San Francisco, find a local here!</p>
//             <form className="form-inline" role="search" >
//               <div className="input-group">
//                 <input type="text" className="form-control mb-8 mr-sm-2 sb-sm-0" placeholder="Search" name="search" id="search-home" />
//                 <div className="input-group-btn">
//                   <button className="btn btn-default" type="submit"><i className="glyphicon glyphicon-search"></i></button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//         <div className="space">
//         </div>
//         <div className="container">
//         <div className="row">
//           { this.state.tours.map((listElement)=>
//             <ListElement listElement={listElement} key={listElement.id}/> 
//           )}
//         </div>
//         </div>
// =======
export default props =>  (
  <div>
    <div className="jumbotron">
      <div className="container jumboText">
        <h1>Experience worth spreading</h1>
        <p>If you want special experience in San Francisco, find a local here!</p>
// >>>>>>> upstream/master
      </div>
    </div>
    <div className="space" />

    <div className="row">
      { props.tours.map((listElement) =>
        <ListElement listElement={listElement} key={listElement.id}/>
      )} 
    </div>
  </div>
);
