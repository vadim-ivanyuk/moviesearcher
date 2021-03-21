export const convertReleaseDate = (releaseDate = "2021-02-05") => {
  let date = new Date(releaseDate);
  date.setDate(date.getDate());

  return String(date);
};
