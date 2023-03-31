import service from "./http";

const getRequests = async (url: string, query?: object) => {
  try {
    const response = await service.get(url, {
      params: query,
    });
    if (response.data.status) {
      return {
        status: true,
        data: response.data.data,
        msg: "Success",
      };
    } else {
      return {
        status: false,
        data: response.data.data,
        msg: "Error",
      };
    }
  } catch (error) {
    return {
      status: false,
      data: error,
      msg: "Error",
    };
  }
};

const postRequests = async (url: string, body: object) => {
  try {
    const response = await service.post(url, body);
    if (response.data.status) {
      return {
        status: true,
        data: response.data.data,
        msg: "Success",
      };
    } else {
      return {
        status: false,
        response: response,
        msg: "Error",
      };
    }
  } catch (error) {
    return {
      status: false,
      data: error,
      msg: "Error",
    };
  }
};

export { getRequests, postRequests };
