import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className="about-us">
        <p> Welcome to Paws-and-Found, Paws-and-Found is a place for pet owners to post flyers for their missing pets. Think of Paws-and-Found as the neighborhood telephone pole, but instead of only reaching people who happen to notice your flyer on a street corner, Paws-and-Found has the ability to reach anyone who visits our site. We know how important your pets are to you and that's why we are dedicated to reuniting pets with their families and making a paws-itive impact in our community.</p>

        <p> Why use our site? Well the truth is we know that no matter what happens, our pets are our family. Dogs, cats, hamsters, snakes it doesn't matter if they have paws or not, if you have lost a pet, paws and found is here for you! Help us help you reunite your family!</p>
        <h2>ABOUT US</h2>
        <div className="us">
        <div className="aaron">
        <h4>Aaron R</h4>
        <img src='https://res.cloudinary.com/drq0wwca0/image/upload/v1560270954/me_d2fx1f.jpg' alt='aaron'/>
      <p> My name is Aaron Reinheimer I am software Engineer and  animal lover located in upstate NY. I learned early on how important pets are to family. As web developers me and Jake came up with this idea so we could use our skills to help people and help their pets. I love my work as a developer just as much as I love animals!!</p>
        </div>
        <div className="jake">
        <h4>Jake R</h4>
        <img src='https://res.cloudinary.com/drq0wwca0/image/upload/v1560272972/IMG_1415_p2rh1t.jpg' alt='jake' />
        <p>My name is Jake and I'm a software engineer located in Carlsbad, CA. I've grown up with animals my whole life and because of this, I have a natural affinity for all kinds of animals. Together Aaron and I decided to use our skills as developers to help owners find their lost pets because we know how important they are to you.</p>
        </div>
        </div>
      </div>
    )
  }
}

export default About;
