import React from 'react';
import bannerData from '../assets/BannerData.json';
import '../styles/global.css';

const BannerHero = ({ pageId }) => {
  const data = bannerData.find(item => item.id === pageId);

  if (!data) {
    return null;
  }

  const { src, title, subtitle, text, width, height } = data;

  return (
    <div className={`banner-hero banner-hero-${pageId}`} style={{ width, height }}>
      <img src={src} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      <div className="banner-overlay"></div>
      <div className="banner-content">
        <h1>{title}</h1>
        {subtitle && <h2>{subtitle}</h2>}
        {text && <p>{text}</p>}
      </div>
    </div>
  );
};

export default BannerHero;