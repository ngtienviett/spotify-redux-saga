import axiosClient from "./axoisClient";

const trackApi = {
  
  getTopTrack: (id :string): Promise<any> => {
    return axiosClient.get(`v1/artists/${id}/top-tracks`, {
      params: {
        market: "VN",
      }
    })
  }
};

export default trackApi;