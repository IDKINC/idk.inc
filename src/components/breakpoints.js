const size = {
  mobileOnly: "320px",
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const breakpoints = {
  mobileOnly: `(min-width: ${size.mobileOnly})`,
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};

/*

@media ${breakpoints.mobileL} {

}
@media ${breakpoints.tablet} {

}
@media ${breakpoints.laptop} {

}
@media ${breakpoints.laptopL} {
  
}
@media ${breakpoints.desktop} {

}

*/
