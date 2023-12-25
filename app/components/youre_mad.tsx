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

class Youre_Mad extends React.Component<CardsProps, AppState> {
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
Youre Mad At Me <br/> {':( Im Sorry'}</div>
        </div>

        {/* Back of the card */}
        <div
          onClick={this.handleClick}
          className={`bg-white text-black py-4 my-3 px-4 mx-4 min-w-screen min-h-[97vh]`}
          style={{ backgroundImage: `url(/images/background.png)`, backgroundSize: 'cover' }}
        >
                      <div className={`${specialElite.className} text-center mt-[60px] text-xl`} >
                      Mi amor yo se que va a haber alguna vez que te voy a hacer enojar, no te puedo decir que soy perfecto y que nunca vas a enojarte conmigo porque i would be lying to you. Lo que si te puedo asegurar es que I will always try mi amor y que siempre voy a tratar de hacer todo bien amor para vos y para nosotros porque lo último que quiero es que estemos peleados mi amor. Por favor háblame, decime lo que hice, como te hizo sentir amor, talk to me and I will listen amor, siempre amor no matter what voy a escucharte porque I know I’m not perfect pero créeme que créeme que Im trying my hardest to become the best version of myself I can be, for you, for us, for our relationship. Porque te amo como no te imaginas amor ❤❤❤


</div>        </div>
      </ReactCardFlip>
    );
  }
}

export default Youre_Mad;
