"use client";
// pages/index.tsx
import Image from 'next/image';
import Christmas_Card from './components/Christmas_Card';
import React, { useState, useEffect } from 'react';
import You_Cant_Sleep from './components/You_Cant_Sleep';
import Estas_Dudando from './components/Estas_Dudando';
import Distance from './components/Distance';
import Believe from './components/believe';
import Compliments from './components/compliment';
import Crazy from './components/Crazy';
import Futuro from './components/Futuro';
import Gap from './components/gap';
import Im_mad from './components/Im_mad';
import Memory from './components/memory';
import Overwhelmed from './components/overwhelmed';
import Anytime from './components/random';
import Spotify from './components/spotify';
import Voice from './components/voice';
import Youre_Mad from './components/youre_mad';

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const cardCount = 7;
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const cardHeight = window.innerHeight;
    const newCardIndex = Math.floor(scrollPosition / cardHeight);
    setCurrentCardIndex(newCardIndex);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='flex flex-col h-screen overflow-y-scroll'>
      <Christmas_Card/>
      <You_Cant_Sleep/>
      <Believe/>
      <Compliments/>
      <Crazy/>
      <Distance/>
      <Estas_Dudando/>
      <Futuro/>
      <Gap/>
      <Im_mad/>
      <Memory/>
      <Anytime/>
      <Youre_Mad/>
      
      
          </div>
  );
};

export default Home;
