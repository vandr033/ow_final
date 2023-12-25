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

class Compliments extends React.Component<CardsProps, AppState> {
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
You Need To hear A Compliment </div>
        </div>

        {/* Back of the card */}
        <div
          onClick={this.handleClick}
          className={`bg-white text-black py-4 my-3 px-4 mx-4 min-w-screen min-h-[97vh]`}
          style={{ backgroundImage: `url(/images/background.png)`, backgroundSize: 'cover' }}
        >
                      <div className={`${specialElite.className} text-center mt-[2rem] text-xl`} >
                      Mi amor if you need a compliment, llámame y espero que tengas mucho tiempo porque im going to be there a while. Por donde empiezo, sos hermosa, sos inteligente, sos buena en todo lo qué haces y si no you keep working until you are, tenes la cara más hermosa que he visto en toda mi vida, tu sonrisa me encantaaaaa, tenes una sonrisa que lights up todo un cuarto amor, sos increíblemente chistosa amor, te lo juro que algo que me encanta de vos es lo ocurrente que sos amor, podemos estar chilling ahí y se que siempre vas a pillar algo chistoso amor and i absolutely love that mi amor sobre vos te lo juro, mi amor me encanta tu altura, encajas Perfecto conmigo mi amor, tu cabello es hermoso amor, a mi me encanta both cuando te lo alacias y cuando está crespo me vuelve loco la verdad {':)'}. Te amo mucho y i can keep going so por favor llámame porque si no esto nunca va a acabar y prefiero decirtelo todo por llamada o mejor aun en persona!
                      </div>
        </div>
      </ReactCardFlip>
    );
  }
}

export default Compliments;
