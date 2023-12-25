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

class Estas_Dudando extends React.Component<CardsProps, AppState> {
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
Estas Dudando De Vos Misma
</div>
        </div>

        {/* Back of the card */}
        <div
          onClick={this.handleClick}
          className={`bg-white text-black py-4 my-3 px-4 mx-4 min-w-screen min-h-[97vh]`}
          style={{ backgroundImage: `url(/images/background.png)`, backgroundSize: 'cover' }}
        >
                      <div className={`${specialElite.className} text-center mt-[60px] text-xl`} >

Mi amor antes que nada, Youre amazing, youre smart, youre perserverant, sos muy pero muy inteligente. Te lo juro que sos la persona más fuerte que conozco, siempre que queres algo lo conseguís amor y a veces las cosas cuestan amor no siempre es a la primera and thats okay, es normal tener setbacks, es normal que a veces las cosas no salgan a plan por más que uno quisiera que si amor pero a mi no me queda duda que todo lo que vos queres lo vas a conseguir amor, you are extremely hard working and extremely smart amor y vas a ver qué whatever it is Youre doubting yourself about right now lo vas q conseguir, por favor sabe que no matter what aquí estoy para ayudarte amor no estás sola y aunque yo personalmente sé que podes con todo sola, no lo tenes que hacer sola mi amor. Sos increíble mi amor❤❤❤❤❤❤        </div>
     </div>
      </ReactCardFlip>
    );
  }
}

export default Estas_Dudando;
