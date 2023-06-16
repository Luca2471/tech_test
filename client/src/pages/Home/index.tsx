import React from 'react';
import { Header } from '../../Components/Header';
import { Footer } from '../../Components/Footer';
import VulnerabilityList from "./components/VulnerabilityList";


export default function Home() {
  return (
    <>
      <Header />
      <VulnerabilityList />
      <Footer />
    </>
  )
};
