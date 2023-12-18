import { Page } from "./lib/page";

import inscribed_square from "./sketches/inscribed_square";
import text from "./sketches/text";

const page = new Page("Magic Circles");

page.InstallSketch(text);

window.onhashchange = () => {
  console.log("hash changed", window.location.hash);

  let text_hash = "#" + text.name.toLowerCase().replaceAll(" ", "-");
  console.log(text_hash);
  let inscribed_square_hash =
    "#" + inscribed_square.name.toLowerCase().replaceAll(" ", "-");

  switch (window.location.hash) {
    case text_hash:
      page.InstallSketch(text);
      break;
    case inscribed_square_hash:
      page.InstallSketch(inscribed_square);
      break;
    default:
      console.log("Unknown hash!");
      page.InstallSketch(inscribed_square);
      break;
  }
};

export {};
