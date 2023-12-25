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

class Anytime extends React.Component<CardsProps, AppState> {
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
Anytime    <br/> {'(Vos Podes Escoger!)'} <br/> </div>
        </div>

        {/* Back of the card */}
        <div
          onClick={this.handleClick}
          className={`bg-white text-black py-4 my-3 px-4 mx-4 min-w-screen min-h-[97vh]`}
          style={{ backgroundImage: `url(/images/background.png)`, backgroundSize: 'cover' }}
        >
                      <div className={`${specialElite.className} text-center mt-[60px] text-xl`} >
                      Mi amor se que probablemente vas a leer esto en navidad porque no te vas a aguantar mi amor jajajajajaj te conozco mi vida, si es así el caso Merry Christmas mi amor!!!!!!!!!!! Y si no, espero que estés teniendo un muy buen día mi vida. Aquí solo te quería escribir y decirte lo mucho que te aprecio mi amor. La verdad es que mi vida no sería lo mismo sin vos amor mío y gracias por hacerme tan pero tan pero tan feliz mi amor. Yo se que a veces quiero estar hablando 24/7 y así amor pero that’s just because of how much I love you and how safe and happy I feel cuando estoy hablando con vos y con vos mi amor, gracias por ser mi safe place mi amor aún a la distancia q veces amor mío. Te amo como no te imaginas mi vida y gracias por todo mi amor
</div>

        </div>
      </ReactCardFlip>
    );
  }
}

export default Anytime;
