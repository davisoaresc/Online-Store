import { Header } from "../Components/Header";
import Button from 'react-bootstrap/Button';
import '../Styles/Home.css'
import { Modal } from "react-bootstrap";
import { useState } from "react";

export function Home() {

  return (
    <div className="home-container">
      <Header />
      <div className="home-contents">
        <h1>Lista de produtos</h1>
      </div>
    </div>
  )
}