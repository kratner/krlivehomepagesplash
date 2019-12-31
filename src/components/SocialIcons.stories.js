import React from "react";
import SocialIcons from "./SocialIcons";

export default {
  title: "Social Icons",
  component: SocialIcons
};

const iconSize = "3em";

export const LinkedinIcon = () => (
  <SocialIcons iconName="linkedin" iconSize={iconSize} />
);

LinkedinIcon.story = {
  name: "LinkedIn Icon"
};

export const GithubIcon = () => (
  <SocialIcons iconName="github" iconSize={iconSize} />
);

GithubIcon.story = {
  name: "GitHub Icon"
};

export const FacebookIcon = () => (
  <SocialIcons iconName="facebook" iconSize={iconSize} />
);
export const BehanceIcon = () => (
  <SocialIcons iconName="behance" iconSize={iconSize} />
);
export const InstagramIcon = () => (
  <SocialIcons iconName="instagram" iconSize={iconSize} />
);
export const TwitterIcon = () => (
  <SocialIcons iconName="twitter" iconSize={iconSize} />
);
export const YelpIcon = () => (
  <SocialIcons iconName="yelp" iconSize={iconSize} />
);
export const WhatsappIcon = () => (
  <SocialIcons iconName="whatsapp" iconSize={iconSize} />
);

WhatsappIcon.story = {
  name: "WhatsApp Icon"
};

export const ReverbnationIcon = () => (
  <SocialIcons iconName="reverbnation" iconSize={iconSize} />
);

ReverbnationIcon.story = {
  name: "ReverbNation Icon"
};

export const PinterestIcon = () => (
  <SocialIcons iconName="pinterest" iconSize={iconSize} />
);
export const AngellistIcon = () => (
  <SocialIcons iconName="angellist" iconSize={iconSize} />
);

AngellistIcon.story = {
  name: "AngelList Icon"
};

export const DribbbleIcon = () => (
  <SocialIcons iconName="dribbble" iconSize={iconSize} />
);
export const StackoverflowIcon = () => (
  <SocialIcons iconName="stackoverflow" iconSize={iconSize} />
);

StackoverflowIcon.story = {
  name: "StackOverflow Icon"
};
