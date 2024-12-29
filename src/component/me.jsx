import React from "react";
import "./me.css"; // 引入样式文件
import avatar from "./../assets/avatar.png"

function Me() {
  return (
    <section className="me">
      <h2>About Me.</h2>
      <div className="me-container">
        {/* 左侧头像 */}
        <div className="me-avatar">
          <img src={avatar} alt="Avatar" />
        </div>
        {/* 右侧内容 */}
        <div className="me-content">
        <div className="title">
            Truth
          </div>
          <div className="introduction">
            Located in the US | BSCS@UIUC | MSCS@Gatech | I believe the tech revolution and education are the only ways to save us
          </div>
          <div className="title">
            Things I like
          </div>
          <div className="introduction">
            Ultimate Frisbee - I'm a good handler | Photography - I use Nikon | Liverpool - YNWA | Xiaomi | People who focus on their own stuffs | Road Bicycle Racing | Harry Potter | Videos about World History | All Nintendo Games | Teamfight Tactics | Cocacola
          </div>
          <div className="title">
            Things I dislike
          </div>
          <div className="introduction">
            Cherry Coca-Cola | Pepsi | Repeated Conversations | Pickles in Burgers | Lack of Design | Driving Car - I'm a huge supporter of Cybercab | College Dining Hall | People who feel superior | Cinnamon
          </div>
        </div>
      </div>
    </section>
  );
}

export default Me;
