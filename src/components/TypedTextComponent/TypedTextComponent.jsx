import  { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypedTextComponent = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Swift and Secure Deliveries!',' Global Reach, Local Touch', 'Track, Trace, and Trust!'],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      // Clean up the Typed instance on component unmount
      typed.destroy();
    };
  }, []);

  return <span ref={typedRef}></span>;
};

export default TypedTextComponent;