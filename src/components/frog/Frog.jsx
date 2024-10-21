// src/components/frog/Frog.jsx

import {
    FrogContainer,
    Eye,
    Pupil,
    Mouth,
    Nouse,
  } from './frog.styles';
  
  const Frog = () => {
    return (
      <FrogContainer>
        <Eye className="left" />
        <Eye className="right" />
        <Pupil className="left" />
        <Pupil className="right" />
        <Mouth />
        <Nouse className="left" />
        <Nouse className="right" />
      </FrogContainer>
    );
  };
  
  export default Frog;
  