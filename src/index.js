import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './components/App'

// function Image(props) {
//   return (
//     <img src={props.src} alt={props.alt}/>
//   )
// }

// class MovieItem extends React.Component {
//   constructor () {
//     super();

//     this.state = {
//       show: true,
//       like: false
//     }
//   }
  
//   toggleOverview = () => {
//     this.setState({
//       show: !this.state.show
//     })
//   }

//   handleLike = () => {
//     this.setState({
//       like: !this.state.like
//     })
//   }

//   render() {
//     const { data: {title, vote_average, backdrop_path, overview} } = this.props;
//     return (
//       <div style={{maxWidth: "500px", margin: "0 auto", backgroundColor: "#bbb", padding: "0.5em 1em"}}>
//         <Image src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} alt={title} />
//         <p>{title}</p>
//         <p>{vote_average}</p>
//         <div style={{display: "flex", justifyContent: "space-between"}}>
//           <button type="button" onClick={this.toggleOverview}>
//             {this.state.show ? "hide" : "show"}
//           </button>
//           <button 
//             type="button" 
//             onClick={this.handleLike} 
//             className={this.state.like ? "btn--like" : ""}
//             style ={{outline: "none"}}
//           >
//             Like
//           </button>
//         </div>
//         {this.state.show ? <p>{overview}</p> : null }
//       </div>
//     )
//   }
// }

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);