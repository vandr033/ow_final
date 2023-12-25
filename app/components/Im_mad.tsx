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

class Im_mad extends React.Component<CardsProps, AppState> {
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
I{"'"}m Mad At You</div>
        </div>

        {/* Back of the card */}
        <div
          onClick={this.handleClick}
          className={`bg-white text-black py-4 my-3 px-4 mx-4 min-w-screen min-h-[97vh]`}
          style={{ backgroundImage: `url(/images/background.png)`, backgroundSize: 'cover' }}
        >
                                <div className={`${specialElite.className} text-center mt-[60px] text-xl`} >

Antes que nada, estás segura que estoy enojado con vos? Por favor háblame y pregúntame porque son muy muy muy pocas las veces que enserio me enojo amor y mucho mucho mucho menos con vos amor así que make sure que I’m actually mad amor mio. Antes que nada, no matter what happened sabe que I still love you y eso no va a cambiar even when I’m mad. Por favor háblame, se que everyone handles things differently pero please talk to me, reach out, no me des espacio even though you think I need it, porque eso makes me feel que you don’t care enough para resolver el problema amor {'(even though que yo se que that’s not the case).'} I love you y eso no cambia amor espero que lo sepas no matter how pissed off este finde vos eso se mantiene siempre amor. I promise que we’ll talk it out y vamos q estar bien amor mío.        
</div>

</div>
      </ReactCardFlip>
    );
  }
}

export default Im_mad;
