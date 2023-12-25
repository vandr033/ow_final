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

class Christmas_Card extends React.Component<CardsProps, AppState> {
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
Right Now         <br/> {'(FELIZ NAVIDAD!!!!!!!)'} <br/> {'(Te Amo! <3)'}</div>
        </div>

        {/* Back of the card */}
        <div
          onClick={this.handleClick}
          className={`bg-white text-black py-4 my-3 px-4 mx-4 min-w-screen min-h-[97vh]`}
          style={{ backgroundImage: `url(/images/background.png)`, backgroundSize: 'cover' }}
        >
                      <div className={`${specialElite.className} text-center mt-[2rem] text-2xl`} >
                      Mi amor!!!!!! Feliz navidad amor mío!!!!!!! La verdad es que odio que no podamos pasar navidad juntos mi amor pero agradezco tanto que estemos juntos qmor mío. Espero que la estés pasando increíble mi niña con tus padres y tu familia, ojalá que disfrutes mucho mi amor y que papá Noel te traiga muchos regalos amor mio. Esta vez el tuyo de mi parte va q llegar unos días atrasados ya que no sabía cuándo ibas a estar en tu casa mi amor pero trust me va a llegar mi amor. Feliz navidad mi niña hermosa, te amo como no te imaginas y gracias por making my life so much better mi amor enserio espero poder ayudar a hacer tus días mejor mi amor y sacarte una sonrisa as much as i Can es algo que siempre quiero y siempre voy a querer hacer amor. Te amo!!!!!!
                      </div>
        </div>
      </ReactCardFlip>
    );
  }
}

export default Christmas_Card;
