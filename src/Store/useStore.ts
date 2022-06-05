import axios from 'axios';
import create from 'zustand';
import { DataInterface } from '../Common/Interface';

interface StoreInterface {
  characters: DataInterface;
  getAllCharacters: () => void;
  getPaginationCharacters: (url: string) => void;
  sortData: (filterValues: string[]) => void;
}

const BASE_URL_CHARACTERS = 'https://rickandmortyapi.com/api/character';

const useStore = create<StoreInterface>((set, get) => ({
  characters: {
    info: {
      count: 0,
      pages: 0,
      next: '',
      prev: ''
    },
    results: []
  },
  getAllCharacters: async () => {
    try {
      await axios
        .get(BASE_URL_CHARACTERS)
        .then((response) => {
          set({
            characters: {
              info: response.data.info,
              results: response.data.results
            }
          });
        })
        .catch((error) => {
          throw new Error(error);
        });
    } catch (error: any) {
      throw new Error(error.message);
    }
  },
  getPaginationCharacters: async (url: string) => {
    try {
      await axios
        .get(url)
        .then((response) => {
          set({
            characters: {
              info: response.data.info,
              results: response.data.results
            }
          });
        })
        .catch((error) => {
          throw new Error(error);
        });
    } catch (error: any) {
      throw new Error(error.message);
    }
  },
  sortData: async (filterValues: string[]) => {
    try {
      const params = `/?name=${filterValues[0]}
                      &type=${filterValues[1]}
                      &status=${filterValues[2]}
                      &species=${filterValues[3]}&gender=${filterValues[4]}`;

      await axios
        .get(`${BASE_URL_CHARACTERS}${params}`)
        .then((response) => {
          set({
            characters: {
              info: response.data.info,
              results: response.data.results
            }
          });
        })
        .catch((error) => {
          throw new Error(error);
        });
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}));

export default useStore;
