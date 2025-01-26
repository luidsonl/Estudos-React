export interface AbilityTypes {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

export interface CryTypes {
  latest: string;
  legacy: string;
}

export interface FormTypes {
  name: string;
  url: string;
}

export interface GameIndexTypes {
  game_index: number;
  version: {
    name: string;
    url: string;
  };
}

export interface SpriteTypes {
  front_default: string | null;
  front_shiny: string | null;
  front_female: string | null;
  front_shiny_female: string | null;
  back_default: string | null;
  back_shiny: string | null;
  back_female: string | null;
  back_shiny_female: string | null;
  other?: Record<string, any>;
  versions?: Record<string, any>;
}

export interface VersionGroupDetailsTypes {
  level_learned_at: number;
  move_learn_method: {
    name: string;
    url: string;
  };
  version_group: {
    name: string;
    url: string;
  };
}

export interface MoveTypes {
  move: {
    name: string;
    url: string;
  };
  version_group_details: VersionGroupDetailsTypes[];
}

export interface HeldItemTypes {
  item: {
    name: string;
    url: string;
  };
  version_details: {
    rarity: number;
    version: {
      name: string;
      url: string;
    };
  }[];
}

export interface LocationAreaEncounterTypes {
  location_area: {
    name: string;
    url: string;
  };
  version_details: {
    encounter_details: {
      min_level: number;
      max_level: number;
      condition_values: {
        name: string;
        url: string;
      }[];
      chance: number;
      method: {
        name: string;
        url: string;
      };
    }[];
    max_chance: number;
    version: {
      name: string;
      url: string;
    };
  }[];
}

export interface StatTypes {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface TypeSlotTypes {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

interface PokemonTypes {
  abilities: AbilityTypes[];
  base_experience: number;
  cries: CryTypes;
  forms: FormTypes[];
  game_indices: GameIndexTypes[];
  height: number;
  held_items: HeldItemTypes[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: MoveTypes[];
  name: string;
  order: number;
  past_types: any[];
  species: {
    name: string;
    url: string;
  };
  sprites: SpriteTypes;
  stats: StatTypes[];
  types: TypeSlotTypes[];
  weight: number;
}

export default PokemonTypes;
