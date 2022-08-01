import React, { useState } from "react";

const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
    console.log(e);
    document.querySelector("#search").value = "";
    document.querySelector("#search").blur();
  };

  return (
    <>
      <section className="mx-4">
        <div className="group relative z-0 mb-6 max-w-sm mx-auto my-10">
          <form onSubmit={onSubmit} className="max-w-sm">
            <input
              onChange={(e) => setText(e.target.value)}
              type="text"
              name="search"
              id="search"
              className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-sky-600 focus:outline-none focus:ring-0"
              placeholder=" "
              required=""
            />
            <label
              htmlFor="search"
              className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-700 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-sky-600"
            >
              Search Image Term...
            </label>
          </form>
        </div>
      </section>
    </>
  );
};

export default ImageSearch;
