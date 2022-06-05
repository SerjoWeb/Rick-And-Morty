export interface CharacterInterface {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: [];
  url: string;
  created: string;
}

export interface InfoInterface {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

export interface DataInterface {
  info: InfoInterface;
  results: CharacterInterface[];
}

export interface windowDimenionInterface {
  winWidth: number;
  winHeight: number;
}

export interface CharacterDetailsInterface {
  showModal: boolean;
  setShowModal: (state: boolean) => void;
  details: CharacterInterface;
}

export interface ButtonInterface {
  name: string;
  content: string;
  classProps: string;
  clickHandler: () => void;
  disabled: boolean;
}

export interface SortableSelectInterface {
  id: string;
  name: string;
  list: string[];
  dublicates: boolean;
  status: string;
  handleSelect: () => void;
}

export interface TableListInterface {
  results: CharacterInterface[];
  onRowClick: (result: CharacterInterface) => void;
}

export interface MobileListInterface {
  results: CharacterInterface[];
  onItemClick: (result: CharacterInterface) => void;
}
