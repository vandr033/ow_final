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

class Crazy extends React.Component<CardsProps, AppState> {
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
Te Estoy Volviendo Loco </div>
        </div>

        {/* Back of the card */}
        <div
          onClick={this.handleClick}
          className={`bg-white text-black py-4 my-3 px-4 mx-4 min-w-screen min-h-[97vh]`}
          style={{ backgroundImage: `url(/images/background.png)`, backgroundSize: 'cover' }}
        >                      <div className={`${specialElite.className} text-center mt-[60px] text-xl`} >

                    Mi amor la verdad es que puse esto porque se que a veces {'(muchas veces)'} te saco de quicio amor y espero que sepas que no lo hago aproposito mi amor. Por favor decime when this is happening, háblame así yo se amor mío y puedo parar de hacer eso que te saca de quicio amor. Por favor no te enojes nomas y no me digas y así aprendo yo amor también. I love you so much y siempre quiero hacer lo mejor que puedo amor y eso incluye aprender amor mío para después poder no repetir los mismos errores. 

<br/> <br/> Más que todo por favor remember que te amo mucho mi amor y no lo hago por malo todo lo contrario. 


        </div>
        </div>
      </ReactCardFlip>
    );
  }
}

export default Crazy;
