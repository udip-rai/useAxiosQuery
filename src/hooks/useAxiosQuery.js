// Default
import axios from "axios";
import { useMutation } from "react-query";

// Base api
const BASE_API = axios.create({
  baseURL: "https://dummyjson.com/", // test
});

// Actual axios api query
const apiQuery = async (props) => {
  try {
    const response = await BASE_API({
      ...props, // (method, data, url inside props here)
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

// Main function starts here
const useAxiosQuery = (props) => {
  // Props
  const {
    method,
    url,
    // id,
    onSuccess,
    onError,
    onSettled,
  } = props;


  // Mutation part
  const mutation = useMutation({
    mutationFn: async (data) => {
      const actualData = { method, url, data };
      return apiQuery(actualData);
    },

    onSuccess: (data, variables, context) => {
      if (onSuccess) {
        onSuccess(data, variables, context);
      }

    },

    onError: (error, variables, context) => {
      if (onError) {
        onError(error, variables, context);
      }
    },

    onSettled: (data, error, variables, context) => {
      if (onSettled) {
        onSettled(data, error, variables, context);
      }
    },
  });
  return mutation;
};

export default useAxiosQuery;
