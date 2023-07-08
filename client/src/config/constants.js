import { swatchIcon, fileIcon, aiIcon, logoShirtIcon, stylishShirtIcon } from "../assets";


export const EditorTabs = [
  {
    name: "colorSelector",
    icon: swatchIcon,
  },
  {
    name: "filSelector",
    icon: fileIcon,
  },
  {
    name: "customSuggestion",
    icon: aiIcon,
  },
];

export const FilterTabs = [
  {
    name: "logoShirt",
    icon: logoShirtIcon,
  },
  {
    name: "stylishShirt",
    icon: stylishShirtIcon,
  },
];

export const DecalTypes = {
  logo: {
    stateProperty: "logoDecal",
    filterTab: "logoShirt",
  },
  full: {
    stateProperty: "fullDecal",
    filterTab: "stylishShirt",
  },
};
