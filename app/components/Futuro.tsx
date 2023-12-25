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

class Futuro extends React.Component<CardsProps, AppState> {
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
Estas Pensando En Nuestro Futuro <br/> {'😍!!!!!!!!'}</div>
        </div>

        {/* Back of the card */}
        <div
          onClick={this.handleClick}
          className={`bg-white text-black py-4 my-3 px-4 mx-4 min-w-screen min-h-[97vh]`}
          style={{ backgroundImage: `url(/images/background.png)`, backgroundSize: 'cover' }}
        >
                      <div className={`${specialElite.className} text-center mt-[60px] text-xl`} >
        
Bueno mi amor la verdad espero que sea algo bueno de nuestro futuro amor mío. Ojalá que estés pensando en lo bonito que va a ser eventualmente llegar del trabajo y poder darnos un abrazo enorme después de un día largo. La verdad i love it when you think about the future and you include me in it mi amor porque de verdad que yo te quiero en mi futuro y te veo en mi futuro y me alegra tanto que vos también (si es que es así amor). Yo se que were young and anything can happen pero con más razón i want to make us happen y que siga pasando siempre mi amor porque me encanta estar con vos ❤. 
<br/> <br/> Y mi amor si es algo no muy bueno de nuestro futuro please call me y hablame así podemos arreglarlo mi amor. Te amo ❤❤❤
        </div>
        </div>
      </ReactCardFlip>
    );
  }
}

export default Futuro;
