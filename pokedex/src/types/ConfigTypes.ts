import MenuTypes from "./MenuTypes";

interface ConfigTypes {
  name: string;
  postsPerPage: number;
  theme: 'light' | 'dark';
  footerText: string;
  featuredPokemons: string[];
  mainMenuItems?: MenuTypes;
}

export default ConfigTypes;
