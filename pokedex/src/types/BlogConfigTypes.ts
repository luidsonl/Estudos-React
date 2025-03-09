import MenuTypes from "./MenuTypes";

interface BlogConfigTypes {
  name: string;
  postsPerPage: number;
  footerText: string;
  featuredPokemons: string[];
  mainMenuItems?: MenuTypes;
}

export default BlogConfigTypes;
