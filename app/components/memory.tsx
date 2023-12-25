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

class Memory extends React.Component<CardsProps, AppState> {
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
You Want To Hear About My Favorite Memory Of Us! </div>
        </div>

        {/* Back of the card */}
        <div
          onClick={this.handleClick}
          className={`bg-white text-black py-4 my-3 px-4 mx-4 min-w-screen min-h-[97vh]`}
          style={{ backgroundImage: `url(/images/background.png)`, backgroundSize: 'cover' }}
        >
                                <div className={`${specialElite.className} text-center mt-[60px] text-xl`} >
                                Mi amor la verdad una de nuestras memorias favoritas juntos es cuando estuviste en Miami y fuimos a canes la verdad la pase increíble, fue algo totally unplanned amor pero manejar con las ventanas abajo disfrutando de estar con vos te lo juro que me encanto y es uno de mis recuerdos favoritos con vos amor, no fue nada súper fancy ni nada pero just being able to spend time alone just the two of us fue algo increíble amor y es algo por lo que siempre soy agradecido ya sea 1 minuto o 1 día o lo que sea amor me encanta pasar tiempo a tu lado y get to know you more amor porque you are growing every day y me encanta conocerte un poco más todos los días amor mío. Te amooooooo❤


                                  </div>
        </div>
      </ReactCardFlip>
    );
  }
}

export default Memory;
