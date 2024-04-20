// Default
import React from "react";

// Hooks
import useAxiosQuery from "../../hooks/useAxiosQuery";

const ExampleGetPage = () => {
  // Variables required for the useAxiosQuery
  const m = { method: "get", url: "products" };
  const getAllProductsApi = useAxiosQuery(m);
  const {
    context,
    data: getAllPostsResponse,
    error,
    failureCount,
    isError,
    isIdle,
    isLoading,
    isPaused,
    isSuccess,
    mutate,
    variables,
    mutateAsync,
    reset,
    status,
  } = getAllProductsApi; // Use only the required variables

  console.log("getAllProductsApi", getAllProductsApi);

  // Action when the button is clicked
  const handleGetApiClick = () => {
    getAllProductsApi.mutate(); // Actual api call
  };

  return (
    <div>
      <h3>Example: Get Api call</h3>
      <p>(You can also check the console for the data)</p>
      <button onClick={handleGetApiClick}>Initiate the api call (get)</button>

      <div>
        <div>
          <p>context: {context?.toString()}</p>
          <p
            style={{
              maxHeight: "300px",
              overflow: "auto",
            }}
          >
            data: {JSON.stringify(getAllPostsResponse ?? {})}
          </p>
          <p>error: {JSON.stringify(error ?? {})}</p>
          <p>failureCount: {failureCount}</p>
          <p>isError: {isError?.toString()}</p>
          <p>isIdle: {isIdle?.toString()}</p>
          <p>isLoading: {isLoading.toString()}</p>
          <p>isPaused: {isPaused?.toString()}</p>
          <p>isSuccess: {isSuccess?.toString()}</p>
          <p>mutate: {mutate?.toString()}</p>
          <p>variables: {variables?.toString()}</p>
          <p>mutateAsync: {mutateAsync?.toString()}</p>
          <p>reset: {reset?.toString()}</p>
          <p>status: {status?.toString()}</p>
        </div>
      </div>
    </div>
  );
};

export default ExampleGetPage;
