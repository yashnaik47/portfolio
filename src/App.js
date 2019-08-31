import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from './assets/profile.png';

class App extends Component{

  // constructor(){
  //   super();
  //   this.state = {
  //     displayBio: false
  //   };
  //   this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
  // }

  state = { displayBio: false };

  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio});
  }

render() {
    return (
      <div>
        <img src={profile} alt='profile' className='profile'/>
        <h1>Hello!</h1>
        <p>My name is Yash.</p>
        <p>I'm always looking forward to working on meaningful projects.</p>
        {
          this.state.displayBio ? (
            <div>
              <p>I live in Mumbai, and code every day.</p>
              <p>My favorite language is JavaScript, and I think React.js is awesome.</p>
              <p>Besides coding, I also love music and noodles!</p>
              <button onClick={this.toggleDisplayBio}>Show less</button>
            </div>
          ) : (
            <div>
              <button onClick={this.toggleDisplayBio}>Read more</button>
            </div>
          )
        }
        <hr />
        <Projects />
        <hr />
        <SocialProfiles />
      </div>
    )
  }
}
export default App;