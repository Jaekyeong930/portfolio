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
    {/* 헤더 영역 */}
      <header className='Header'>
        {/* 사이트 로고, 클릭하면 맨 위로 이동 */}
        <div className='Header_logo'><Link to ='title' smooth={true}>JKKim's Portfolio</Link></div> 
        {/* 각 영역으로 이동하는 헤더 메뉴*/}
        <div className='Header_navigation'>
          <nav className='menu_container'>
            {/* width = 992px 이하일 때 나타나는 메뉴 토글 */}
            <button className='menu-toggle' onClick={toggleMenu}>
              {isMenuOpen ? '✖' : '☰'}
            </button>
            {/* 각 메뉴. width = 992px 이하일 경우 접힌 상태로 표시 */}
            <div className={`Header_navigation_menus ${isMenuOpen ? "open" : ""}`}>
              <div className='Header_navigation_menu' style={{ transitionDelay: "0.2s"}}>
                <Link to ='profile' smooth={true} offset={-headerHeight}>Profile</Link>
              </div>
              <div className='Header_navigation_menu' style={{ transitionDelay: "0.4s"}}>
                <Link to ='skills' smooth={true} offset={-headerHeight}>Skills</Link>
              </div>
              <div className='Header_navigation_menu' style={{ transitionDelay: "0.6s"}}>
                <Link to ='projects' smooth={true} offset={-headerHeight}>Projects</Link>
              </div>
              <div className='Header_navigation_menu' style={{ transitionDelay: "0.8s"}}>
                <Link to ='career' smooth={true} offset={-headerHeight}>Career</Link>
              </div>
            </div>
          </nav>
        </div>
      </header>
      {/* 맨 위 상단 프롤로그 영역. 이름, 한줄소개, 더보기 버튼 */}
      <div id='title' className='prolog' style={{height:'60vh'}}>
        <div className='prolog_content'>
          {/* 이름 기재 */}
          <div className='prolog_content_title'>
            Jaegyeong Kim
          </div>
          <div className='prolog_content_line'>
            ━━━━
          </div>
          {/* 한줄소개 */}
          <div className='prolog_content_introduce'>
            Hello, I'm Jaegyeong Kim, a developer who values UI/UX. 
          </div>
          {/* 더보기 버튼 */}
          <div className='prolog_content_btn'>
            <Link to ='profile' smooth={true} offset={-headerHeight}>
            <button>more ▼</button>
            </Link>
          </div>
        </div>
      </div>
      {/* 메뉴를 각각 클릭할 경우 이동하는 영역들 */}
      {/* 1. 프로필 영역 / 이름, 생년월일, 주소지, 연락처, 이메일, 학력, 국적을 기재 */}
      <article id='profile' className='article article_profile' style={{backgroundColor:'pink'}}>
        <div className='article_profile_title'>
        </div>
      </article>
      {/* 2. 스킬 영역 / 사용 경험이 있는 기술을 추가한다. */}
      <article id='skills' className='article article_skills' style={{backgroundColor:'lightblue'}}>
        <div className='article_skills_title'>
          Skills
        </div>
      </article>
      {/* 3. 프로젝트 영역 / 참가했던 프로젝트와 개요, 다룬 기술, 감상 등을 기재 */}
      <article id='projects' className='article article_projects' style={{backgroundColor:'lightyellow'}}>
        <div className='article_projects_title'>
        Projects
        </div>
      </article>
      {/* 4. 커리어 영역 / 근무했던 회사와 기간을 기재 */}
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
