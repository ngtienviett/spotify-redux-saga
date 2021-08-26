import axiosClient from "./axoisClient";

const artistApi = {
  getArtistList: (query: string): Promise<any> => {
    return axiosClient.get("v1/search", {
      params: {
        type: "artist",
        q: query,
      },
    });
  }
};

export default artistApi;