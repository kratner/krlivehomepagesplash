import { qryPostsFromSplashLinksCategory } from "./GetDataWPRESTAPI";

const handleData = (data, callback) => {
  let listItems = [];
  data.forEach(element => {
    listItems.push({
      href: element.acf.splashlinkhref,
      title: element.acf.splashlinktitle,
      linkText: element.acf.splashlinklinktext
    });
  });
  callback({
    listItems: listItems,
    hasListItems: true
  });
};

export const getData = callback => {
  console.log(qryPostsFromSplashLinksCategory);
  fetch(qryPostsFromSplashLinksCategory)
    .then(data => data.json())
    .then(data => {
      handleData(data, callback);
    });
};
