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

class Gap extends React.Component<CardsProps, AppState> {
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
We Have Closed The Gap! </div>
        </div>

        {/* Back of the card */}
        <div
          onClick={this.handleClick}
          className={`bg-white text-black py-4 my-3 px-4 mx-4 min-w-screen min-h-[97vh]`}
          style={{ backgroundImage: `url(/images/background.png)`, backgroundSize: 'cover' }}
        >
                      <div className={`${specialElite.className} text-center mt-[60px] text-xl`} >
Llego el momento!!!!!!!!! La verdad es que cuando estoy escribiendo esto it looks far away y se que es algo que nos ha costado mucho amor pero if you’re reading this it means que were close mi amor por fin y la verdad te puedo asegurar que estoy muy feliz. No importa donde es que sea, ya sea que yo esté en mexico o los dos estemos en otro país o donde sea que estemos mi amor we did it!!!!!!! La verdad es que im so so so excited te esta nueva aventura a tu lado amor y de seguir creando memorias juntos ahora más y más seguidas y diferentes mi amor. Es algo que desde que estoy escribiendo esto me emociona muchísimo amor y se que 2024 is our year mi amor. Si estás leyendo esto it means que lo logramos asi que deberías ir a darme un beso {':)'}        </div>
</div></ReactCardFlip>
    );
  }
}

export default Gap;
