import { theme } from "../../theme";

export const addBorderForVoteAvarage = (voteAvarage = 0) => {
  if (voteAvarage >= 7) {
    return theme.colorGreen;
  }
  if (voteAvarage >= 4 && voteAvarage < 7) {
    return theme.colorOrange;
  }
  if (voteAvarage < 4) {
    return theme.colorRed;
  }
};
