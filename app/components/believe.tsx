// components/cards.tsx
"use client";
import React from 'react';
import ReactCardFlip from 'react-card-flip';
import { Special_Elite } from 'next/font/google';
const specialElite = Special_Elite({ subsets: ['latin'], weight: '400' });

interface CardsProps {}

interface AppState {
  isFlipped: boolean;
}

class Believe extends React.Component<CardsProps, AppState> {
  constructor(props: CardsProps) {
    super(props);
    this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.preventDefault();
    this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        {/* Front of the card */}
        <div
          onClick={this.handleClick}
          className={`bg-white text-black py-4 my-3 px-4 mx-4 min-w-screen min-h-[97vh] items`}
          style={{ backgroundImage: `url(/images/background.png)`, backgroundSize: 'cover' }}
        >
          <div className={`${specialElite.className} text-center mt-[12rem] text-6xl`} style={{ textDecoration: 'underline' }}>
            Open When:
          </div>
          <div className={`${specialElite.className} text-center mt-40 text-4xl`} style={{ }}>
You need Someone To believe in You!</div>
        </div>

        {/* Back of the card */}
        <div
          onClick={this.handleClick}
          className={`bg-white text-black py-4 my-3 px-4 mx-4 min-w-screen min-h-[97vh]`}
          style={{ backgroundImage: `url(/images/background.png)`, backgroundSize: 'cover' }}
        >
            <div className={`${specialElite.className} text-center mt-[2rem] text-xl`} >
          Mi amor!!!!! Yo se que estamos en una edad donde hay muchos challenges y es muy difícil creer en uno mismo mi amor pero amor mío sabe que I DO BELIEVE IN YOU. No me queda duda alguna de que vas a hacer cosas increíbles amor mío y qué what you’re going through right now es solo un obstáculo pequeño amor, vas a ver qué you’re going to be able to overcome it amor mío y I believe in you amor. Sos una persona increíble, your smart, strong, independent, really really really good looking {':)'}, perserverant, kind, sos todo lo bueno qué hay mi amor y mucho mucho mucho más. Vas a ver qué esto que you’re going through right now es solo un pequeño hurdle y que cuando llegues a tu meta vas a look back y pensar en how far you’ve come. I’m proud of you y keep going baby ❤
       </div>
        </div>
      </ReactCardFlip>
    );
  }
}

export default Believe;
