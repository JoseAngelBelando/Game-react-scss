// Hangman.jsx

import {
  HangmanContainer,
  HPost,
  HBeam,
  HRope,
  HHead,
  HBody,
  HLeftArm,
  HRightArm,
  HLeftLeg,
  HRightLeg,
} from './drawinHangman.styles';

const Hangman = () => {
  return (
    <HangmanContainer>
      <HPost />
      <HBeam />
      <HRope />
      <HHead />
      <HBody />
      <HLeftArm />
      <HRightArm />
      <HLeftLeg />
      <HRightLeg />
    </HangmanContainer>
  );
};

export default Hangman;
