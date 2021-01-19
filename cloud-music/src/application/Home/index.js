import React , { useState } from 'react';
import { renderRoutes } from 'react-router-config';
import { Top, Tab, TabItem, FixPosition, FixOne } from './style';
import { NavLink } from 'react-router-dom';

const routeLink = [
  { name: '/recommend', title: '推荐' },
  { name: '/singers', title: '歌曲' },
  { name: '/rank', title: '排行榜' },
]

function Home (props) {
  const { route } = props;
  return(
    <FixPosition>
      <Top>
        <span className='iconfont menu'>&#xe6ae;</span>
        <span className="title">WebApp</span>
        <span className="iconfont search">&#xe662;</span>
      </Top>
      <Tab>
        { routeLink.map(item => 
          <NavLink to={item.name} activeClassName='selected'>
            <TabItem>
              <span>{item.title}</span>
            </TabItem>
          </NavLink>
        )}
      </Tab>
      <FixOne>
        { renderRoutes(route.routes) }
      </FixOne>
    </FixPosition>
  )
}


export default React.memo(Home);