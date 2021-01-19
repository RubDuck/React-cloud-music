import React, { forwardRef, useState, useEffect, useRef, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import BScroll from 'better-scroll';
import styled from 'styled-components';


const ScrollContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`
const Scroll = forwardRef((props, ref) => {
  const [bScroll, setBScroll] = useState ();
  const scrollContaninerRef = useRef();
  useEffect(() => {
    const scroll = new BScroll(scrollContaninerRef.current, {
      scrollY: true,
      click: true,
      scrollX: true,
    })
    setBScroll (scroll);
    return () => {
      setBScroll (null);
    }
  })
  return(
    <ScrollContainer ref = {scrollContaninerRef}>
      {props.children}
    </ScrollContainer>
  )
})

export default Scroll;