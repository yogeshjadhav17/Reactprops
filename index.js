import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Header extends React.Component{
  render(){
    return <div className='backgroundbanner'>

      <ul className='nav'>
        <li>Home</li>
        <li>Aboutus</li>
        <li>Products</li>
        <li>Services</li>
        <li>Contact Us</li>
      </ul>

      <div className='bannerpara'>
        <ol>
        <li><h2> Hubsem Private Limited was started in {this.props.year}</h2></li>
        <li><h3>We are a dedicated to provide software or {this.props.tool} as per the {this.props.person} requirements.</h3></li>
        <li> <h3>We undergo all the phases of software {this.props.name} such as </h3></li>
        <li>{this.props.phase1}</li>
        <li>{this.props.phase2}</li>
        <li>{this.props.phase3}</li>
        <li>{this.props.phase4}</li>
        <li>{this.props.phase5}</li>
        <li>{this.props.phase6}</li>
        </ol>
      </div>

      
    </div>
  }
}

ReactDOM.render(<Header year="1993" tool="business website" person="user" name="lifecycle" phase1="Gathering Information" phase2="Planning" phase3="Website Design" phase4="Development" phase5="Testing" phase6="Maintenance"/>, document.getElementById('root'));