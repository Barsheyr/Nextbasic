"use client";

const error = (error) => {
  return (
    <div>
      <div> {error.error.message} </div>
    </div>
  );
};
