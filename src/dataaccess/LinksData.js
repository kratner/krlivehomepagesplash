import { qryPostsFromLinksCategory } from "./GetDataWPRESTAPI";

const handleData = (data, callback) => {
  let socialListItems = [];
  let splashListItems = [];
  data
    .filter(node => node.categories.findIndex(e => e === 48) >= 0)
    .forEach(element => {
      socialListItems.push({
        href: element.acf.href,
        title: element.acf.title,
        icon: element.acf.icon,
        weight: element.acf.social_link_weight
      });
    });
  data
    .filter(node => node.categories.findIndex(e => e === 47) >= 0)
    .forEach(element => {
      splashListItems.push({
        href: element.acf.splashlinkhref,
        title: element.acf.splashlinktitle,
        linkText: element.acf.splashlinklinktext,
        weight: element.acf.splash_link_weight
      });
    });
  callback({
    socialListItems: socialListItems,
    splashListItems: splashListItems,
    hasListItems: true
  });
};

export const getData = callback => {
  fetch(qryPostsFromLinksCategory)
    .then(data => data.json())
    .then(data => {
      handleData(data, callback);
    });
};
