import React, { useState } from 'react';
import './Landing.css';
import logo from './assets/LogGapple.png';
import { FaDiscord, FaShoppingCart, FaBook, FaTiktok, FaYoutube, FaInstagram, FaFacebook } from 'react-icons/fa';

function App() {
  const [copied, setCopied] = useState(null);
  
  const serverIPPrem = "gapple.club";
  const serverIPNoPrem = "np.gapple.club";
  const serverPortBedrock = "19132";

  const handleCopy = (type, text) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="landing-container">
      
      <header className="header wrapper">
        <div className="logo-container">
          <span></span> 
        </div>
        <button className="btn-top-right">Postularse para staff</button>
      </header>

      <main className="hero wrapper">

        <img src={logo} alt="Logo del Servidor" className="server-icon" />
        
        <h1 className="title">
          <span className="gradient-text">Gapple Club</span>
        </h1>
        
        <p className="subtitle">
          Unete a la comunidad más épica de Minecraft. ¡Diversión, eventos y aventuras te esperan en Gapple Club!
        </p>

        <div className="ip-grid-container">
          
          <div className="ip-box premium">
            <div className="ip-text-container">
              <div className="ip-label">Servidor Premium</div>
              <div className="ip-address">{serverIPPrem}</div>
            </div>
            <button className="btn-copy" onClick={() => handleCopy('prem', serverIPPrem)}>
              {copied === 'prem' ? '¡Copiado! ✓' : 'Copiar IP'}
            </button>
          </div>

          <div className="ip-box no-premium">
            <div className="ip-text-container">
              <div className="ip-label">Servidor No-Premium</div>
              <div className="ip-address">{serverIPNoPrem}</div>
            </div>
            <button className="btn-copy" onClick={() => handleCopy('noprem', serverIPNoPrem)}>
              {copied === 'noprem' ? '¡Copiado! ✓' : 'Copiar IP'}
            </button>
          </div>

          <div className="ip-box bedrock-port">
            <div className="ip-text-container">
              <div className="ip-label">Puerto Bedrock</div>
              <div className="ip-address">{serverPortBedrock}</div>
            </div>
            <button className="btn-copy" onClick={() => handleCopy('bedrock', serverPortBedrock)}>
              {copied === 'bedrock' ? '¡Copiado! ✓' : 'Copiar Puerto'}
            </button>
          </div>

        </div>

        <div className="buttons-grid">
          <a href="https://discord.gapple.club" target="_blank" rel="noopener noreferrer" className="btn-nav">
            <FaDiscord /> Discord
          </a>
          <a href="https://tienda.gapple.club" target="_blank" rel="noopener noreferrer" className="btn-nav">
            <FaShoppingCart /> Tienda
          </a>
          <a href="https://wiki.gapple.club" target="_blank" rel="noopener noreferrer" className="btn-nav">
            <FaBook /> Wiki
          </a>
          
          <a href="https://tiktok.gapple.club" target="_blank" rel="noopener noreferrer" className="btn-nav btn-icon">
            <FaTiktok />
          </a>
          <a href="https://youtube.gapple.club" target="_blank" rel="noopener noreferrer" className="btn-nav btn-icon">
            <FaYoutube />
          </a>
          <a href="https://instagram.gapple.club" target="_blank" rel="noopener noreferrer" className="btn-nav btn-icon">
            <FaInstagram />
          </a>
          <a href="https://facebook.gapple.club" target="_blank" rel="noopener noreferrer" className="btn-nav btn-icon">
            <FaFacebook />
          </a>
        </div>

      </main>

      <footer className="footer wrapper">
        <p>&copy; 2026 Gapple Club. Todos los derechos reservados.</p>
        <div className="footer-links">
          <p>Gapple.club no tiene ninguna relacion con Mojang ni con Microsoft.</p>
        </div>
      </footer>

    </div>
  );
}

export default App;