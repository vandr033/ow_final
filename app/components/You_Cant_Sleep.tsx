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

class You_Cant_Sleep extends React.Component<CardsProps, AppState> {
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
No Podes Dormir Y Estes Dando Vueltas</div>
        </div>

        {/* Back of the card */}
        <div
          onClick={this.handleClick}
          className={`bg-white text-black py-4 my-3 px-4 mx-4 min-w-screen min-h-[97vh]`}
          style={{ backgroundImage: `url(/images/background.png)`, backgroundSize: 'cover' }}
        >

            <div className={`${specialElite.className} text-center mt-[2rem] text-xl`} >
            Mi amor antes que nada, call meee!!!!!!!!!!! No importa q qué hora estés leyendo esto por favor llámame amor mío, no importa si mañana tengo que despertaré temprano, o si tengo que ir a la oficina o lo que sea amor. Llámame, háblame decime que te tiene despierta amor y yo me quedo ahí hasta que vos te durmas mi amor. Sabe que siempre voy a estar ahí para vos amor mío no matter what y esto va para cuando sea amor, siempre voy a ser feliz de hablar con vos mi niña y de quedarme dormido en FaceTime con vos aunque espero que soon pueda ser en persona y no por FaceTime pero mientras tanto siempre lo voy a ser. Te amo mucho, por favor si estás leyendo esto llámame amor <br/>❤❤❤❤❤<br/>
            <a href='https://youtu.be/FdN1pnEaJs0?si=D0R3PXL48zOPisMm' className=' text-blue-800' style={{textDecoration:'underline'}}>Sleep Sounds! <br/></a>
            <a href='https://shuteye.ai/relaxing-sounds/' className=' text-blue-800' style={{textDecoration:'underline'}}>Mas Sleep Sounds!<br/></a>
            <a href='https://youtu.be/xdsVcoL18Ts?si=XEB8wNVIUALdjlwq' className=' text-blue-800' style={{textDecoration:'underline'}}>Mas Sleep Sounds!<br/></a>
            <a href={`tel:${+14055417441}`}>Surprise!!!! {'(Click Me!)'}</a>

            </div>
        </div>
      </ReactCardFlip>
    );
  }
}

export default You_Cant_Sleep;
