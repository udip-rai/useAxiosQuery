// Default
import React, { useState } from "react";

// Hooks
import useAxiosQuery from "../../../hooks/useAxiosQuery";

const AddProductPage = () => {
  // States
  const [productName, setProductName] = useState("");

  // Variables required for the useAxiosQuery
  const m = { method: "post", url: "products/add" };
  const onSuccess = (data) => {
    alert(JSON.stringify(data));
  };
  const onError = (error) => {
    alert(JSON.stringify(error));
  };
  // const addProductApi = useAxiosQuery(m); // You can use below arguments if you want some modifiations as per the result from the (response)
  const addProductApi = useAxiosQuery({ ...m, onSuccess, onError }); // You can use above variable if you dont want to add some modifications
  const {
    context,
    data: addProductResponse,
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
  } = addProductApi; // Use only the required variables For eg:: const {isLoading, data: response } = addProductApi

  console.log("addProductApi", addProductApi);

  // Action when the button is clicked
  const handleGetApiClick = () => {
    const data = JSON.stringify({ title: productName });
    addProductApi.mutate(data); // Actual api call
  };

  return (
    <div>
      <p>(You can also check the console for the data)</p>
      <hr />
      <hr />
      <div
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            justifyContent: "center",
          }}
        >
          <label htmlFor="productName">Product Name</label>
          <input
            name="productName"
            type="text"
            value={productName}
            onChange={(e) => setProductName(e?.target?.value)}
          />
        </div>

        <button
          style={{
            backgroundColor: "black",
            color: "#ccc",
            padding: "10px 20px",
          }}
          onClick={handleGetApiClick}
        >
          Add Product (Click me)
        </button>
      </div>
      <hr />
      <hr />
      <div>
        <div>
          <p>context: {context?.toString()}</p>
          <p>error: {error?.toString()}</p>
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
          <p
            style={{
              maxHeight: "300px",
              overflow: "auto",
            }}
          >
            data: {JSON.stringify(addProductResponse ?? {})}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AddProductPage;
