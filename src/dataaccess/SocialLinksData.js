import { qryPostsFromSocialLinksCategory } from "./GetDataWPRESTAPI";

const handleData = (data, callback) => {
  let listItems = [];
  data.forEach(element => {
    listItems.push({
      href: element.acf.href,
      title: element.acf.title,
      //linkText: element.acf.splashlinklinktext,
      icon: element.acf.icon,
      weight: element.acf.social_link_weight
    });
  });
  callback({
    listItems: listItems,
    hasListItems: true
  });
};

export const getData = callback => {
  fetch(qryPostsFromSocialLinksCategory)
    .then(data => data.json())
    .then(data => {
      handleData(data, callback);
    });
};
