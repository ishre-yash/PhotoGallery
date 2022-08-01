import React from "react";

const ImageCard = ({ image }) => {
  const tags = image.tags.split(",");

  return (
    <section className="group">
      <div className="max-w-sm rounded overflow-hidden shadow bg-gray-100 transition duration-200  group-hover:shadow-lg border">
        <img
          src={image.webformatURL}
          alt=""
          className="w-full group-hover:scale-110 transition duration-150 ease-out overflow-hidden"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-gray-900 text-xl mb-2">
            Photo by{" "}
            <div className="bg-gradient-to-l from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
              {image.user}
            </div>
          </div>
          <ul className="flex justify-between">
            <li className="flex items-center justify-center">
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="none"
                  stroke="#eab308"
                  stroke-width="2"
                  d="M12,17 C9.27272727,17 6,14.2222222 6,12 C6,9.77777778 9.27272727,7 12,7 C14.7272727,7 18,9.77777778 18,12 C18,14.2222222 14.7272727,17 12,17 Z M11,12 C11,12.55225 11.44775,13 12,13 C12.55225,13 13,12.55225 13,12 C13,11.44775 12.55225,11 12,11 C11.44775,11 11,11.44775 11,12 Z"
                />
              </svg>
              <div>{image.views}</div>
            </li>
            <li className="flex items-center justify-center gap-1">
              <svg
                width="15px"
                height="15px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="none"
                  stroke="#ec4899"
                  stroke-width="2"
                  d="M6,17 C3.23857625,17 1,14.7614237 1,12 C1,9.23857625 3.23857625,7 6,7 L12,7 M6,7 L6,6 C6,3 8,2 11,2 L13,2 C16,2 18,3 18,6 L18,7 C20.7614237,7 23,9.23857625 23,12 C23,14.7614237 20.7614237,17 18,17 M12,12 L12,21 M8,17 L12,21 L16,17"
                />
              </svg>
              <div>{image.downloads}</div>
            </li>
            <li className="flex items-center justify-center">
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.5 21.37C5.63886 21.3674 4.81374 21.0241 4.20482 20.4152C3.59589 19.8063 3.25264 18.9811 3.25 18.12V11.12C3.25 10.258 3.59241 9.43139 4.2019 8.8219C4.8114 8.21241 5.63805 7.87 6.5 7.87C7.36195 7.87 8.1886 8.21241 8.7981 8.8219C9.40759 9.43139 9.75 10.258 9.75 11.12V18.12C9.74736 18.9811 9.40411 19.8063 8.79518 20.4152C8.18626 21.0241 7.36114 21.3674 6.5 21.37ZM6.5 9.37C6.03587 9.37 5.59075 9.55437 5.26256 9.88256C4.93437 10.2107 4.75 10.6559 4.75 11.12V18.12C4.75 18.5841 4.93437 19.0292 5.26256 19.3574C5.59075 19.6856 6.03587 19.87 6.5 19.87C6.96413 19.87 7.40925 19.6856 7.73744 19.3574C8.06563 19.0292 8.25 18.5841 8.25 18.12V11.12C8.25 10.8902 8.20473 10.6626 8.11679 10.4503C8.02884 10.238 7.89994 10.0451 7.73744 9.88256C7.57493 9.72006 7.38202 9.59115 7.1697 9.50321C6.95738 9.41526 6.72981 9.37 6.5 9.37Z"
                  fill="#ef4444"
                />
                <path
                  d="M18.06 21.37H10.94C10.2274 21.3674 9.54469 21.0831 9.04079 20.5792C8.53689 20.0753 8.25263 19.3926 8.25 18.68V8.61999C8.24504 8.57679 8.24504 8.53318 8.25 8.48999C8.54864 6.65841 9.23013 4.91039 10.25 3.35999C10.4953 3.04655 10.8329 2.81809 11.2151 2.70685C11.5973 2.5956 12.0048 2.60719 12.38 2.73999C12.7685 2.86866 13.1063 3.11689 13.3452 3.44917C13.5841 3.78144 13.7118 4.18075 13.71 4.58999V7.86999H18.02C18.7317 7.86998 19.4144 8.15202 19.9186 8.65433C20.4228 9.15664 20.7073 9.83829 20.71 10.55V18.68C20.7075 19.3858 20.4288 20.0625 19.9334 20.5653C19.4381 21.0681 18.7657 21.3569 18.06 21.37ZM9.75 8.67999V18.68C9.75 18.8363 9.78078 18.991 9.84058 19.1354C9.90038 19.2798 9.98804 19.4109 10.0985 19.5214C10.209 19.6319 10.3402 19.7196 10.4846 19.7794C10.629 19.8392 10.7837 19.87 10.94 19.87H18.06C18.2163 19.87 18.371 19.8392 18.5154 19.7794C18.6598 19.7196 18.791 19.6319 18.9015 19.5214C19.012 19.4109 19.0996 19.2798 19.1594 19.1354C19.2192 18.991 19.25 18.8363 19.25 18.68V10.55C19.25 10.3942 19.2192 10.2399 19.1592 10.0961C19.0993 9.95228 19.0115 9.82175 18.9009 9.71204C18.7902 9.60234 18.659 9.51563 18.5146 9.45692C18.3703 9.39821 18.2158 9.36867 18.06 9.36999H13C12.8019 9.3674 12.6126 9.28755 12.4725 9.14745C12.3324 9.00736 12.2526 8.81809 12.25 8.61999V4.61999C12.2498 4.52347 12.2186 4.42957 12.161 4.35214C12.1034 4.27472 12.0224 4.21787 11.93 4.18999C11.85 4.15572 11.7607 4.14994 11.677 4.1736C11.5933 4.19726 11.5202 4.24893 11.47 4.31999C10.6097 5.64306 10.0247 7.12589 9.75 8.67999Z"
                  fill="#ef4444"
                />
              </svg>

              <div>{image.likes}</div>
            </li>
          </ul>
          <div className="grid grid-cols-2 md:grid-cols-1 gap-2 mt-4 ">
            <a href={image.webformatURL} download>
              <div className="flex items-center justify-center text-white bg-gradient-to-r from-green-700 to-green-500 font-bold text-base tracking-tighter  rounded-full py-1">
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  fill="#fff"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17,10.48h-.92l-2.3,2.3a2.475,2.475,0,0,1-3.53,0l-2.3-2.3H7a4.5,4.5,0,0,0-4.5,4.5v1A4.494,4.494,0,0,0,7,20.48H17a4.5,4.5,0,0,0,4.5-4.5v-1A4.507,4.507,0,0,0,17,10.48Zm0,5.75a1.25,1.25,0,1,1,1.24-1.25A1.253,1.253,0,0,1,17,16.23ZM8.31,8.72a1,1,0,0,1,0-1.41,1,1,0,0,1,1.41,0L11.01,8.6V4.02a1,1,0,0,1,2,0V8.6l1.3-1.29a1,1,0,0,1,1.41,0,1,1,0,0,1,0,1.41l-1.76,1.76-1.24,1.24a.978.978,0,0,1-1.41,0Z" />
                </svg>
                {image.webformatWidth} x {image.webformatHeight}
              </div>
            </a>
            <a href={image.largeImageURL} download>
              <div className="flex items-center justify-center bg-gradient-to-r from-green-500 to-green-700 text-white font-bold text-base tracking-tighter  rounded-full py-1">
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  fill="#fff"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17,10.48h-.92l-2.3,2.3a2.475,2.475,0,0,1-3.53,0l-2.3-2.3H7a4.5,4.5,0,0,0-4.5,4.5v1A4.494,4.494,0,0,0,7,20.48H17a4.5,4.5,0,0,0,4.5-4.5v-1A4.507,4.507,0,0,0,17,10.48Zm0,5.75a1.25,1.25,0,1,1,1.24-1.25A1.253,1.253,0,0,1,17,16.23ZM8.31,8.72a1,1,0,0,1,0-1.41,1,1,0,0,1,1.41,0L11.01,8.6V4.02a1,1,0,0,1,2,0V8.6l1.3-1.29a1,1,0,0,1,1.41,0,1,1,0,0,1,0,1.41l-1.76,1.76-1.24,1.24a.978.978,0,0,1-1.41,0Z" />
                </svg>
                {image.imageWidth} x {image.imageHeight}
              </div>
            </a>
          </div>
        </div>
        <div className="px-6 py-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mx-1 mt-1"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageCard;
