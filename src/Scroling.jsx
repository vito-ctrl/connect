import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './styles/Scroling.css'

function Scrolling() {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  useEffect(() => {
  let smoother = ScrollSmoother.create({
    wrapper: 'smoth-1',
    content: 'smoth-2'
  })
})

  return (
    <>
      <div id='smoth-1'>
        <div id='smoth-2'>
          <h1 className='title'>scroosmoother</h1>
          <div className='boxes'>
            <div className='box box-a'>a</div>
            <div className='box box-b'>b</div>
            <div className='box box-c'>c</div>
          </div>
          <div className='line'></div>
        </div>
      </div>
    </>
  );
}

export default Scrolling;