// import { BrowserRouter as Router, Route, Routes, Link, Switch } from 'react-router-dom';
import React, { useRef, useEffect, useState } from 'react';

import { Link } from 'react-scroll';



function Portfolio( {  } ) {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // 메뉴 열림 상태를 관리

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // 메뉴 열고 닫기 토글바
  };

  const headerHeight = 70;

  return (
    <div className='root'>
      <header className='Header'>
        {/* 페이지 맨 위 상단으로 이동하는 사이트 이름, 로고 */}
        <div className='Header_logo'><Link to ='title' smooth={true}>JKKim's Portfolio</Link></div> 

        {/* 햄버거 메뉴 버튼 */}
        <button className='menu-toggle' onClick={toggleMenu}>
          {isMenuOpen ? '✖' : '☰'}
        </button>
        {/* 각 영역으로 이동하는 헤더 메뉴*/}
        <div className='Header_navigation'>
          <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
            <div className='Header_navigation_menu'><Link to ='profile' smooth={true} offset={-headerHeight}>Profile</Link></div>
            <div className='Header_navigation_menu'><Link to ='skills' smooth={true} offset={-headerHeight}>Skills</Link></div>
            <div className='Header_navigation_menu'><Link to ='projects' smooth={true} offset={-headerHeight}>Projects</Link></div>
            <div className='Header_navigation_menu'><Link to ='career' smooth={true} offset={-headerHeight}>Career</Link></div>
          </nav>
        </div>
      </header>
      <div id='title' className='prolog' style={{height:'60vh'}}>
        <div className='prolog_content'>
          <div className='prolog_content_title'>
            Jaegyeong Kim
          </div>
          <div className='prolog_content_line'>
            ━━━━
          </div>
          <div className='prolog_content_introduce'>
            Hello, I'm Jaegyeong Kim, a developer who values UI/UX. 
          </div>
          <div className='prolog_content_btn'>
            <Link to ='profile' smooth={true} offset={-headerHeight}>
            <button>more ▼</button>
            </Link>
            
          </div>
        </div>
      </div>
      <article id='profile' className='article article_profile' style={{backgroundColor:'pink'}}>
        <div className='article_profile_title'>
          Profile
        </div>
      </article>
      <article id='skills' className='article article_skills' style={{backgroundColor:'lightblue'}}>
        <div className='article_skills_title'>
          Skills
        </div>
      </article>
      <article id='projects' className='article article_projects' style={{backgroundColor:'lightyellow'}}>
        <div className='article_projects_title'>
        Projects
        </div>
      </article>
      <article id='career' className='article article_career' style={{backgroundColor:'lavender'}}>
        <div className='article_carrer_title'>
        Career
        </div>
      </article>
      {/* <img src={logo} className='App-logo' alt='logo' /> */}
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <div className='copyright'>© 2024. Kim Jaegyeong. All rights reserved.</div>

    </div>
  );
}

export default Portfolio;
