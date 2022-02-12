import React from "react";

const SearchIcon = (props) => {
  return (
    
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      style={{
        height: 30,
        width: 30,
      }}
      {...props}
    >
      <defs>
        <linearGradient x1={0} x2={0} y1={0} y2={1} id="a">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#aef1ce" />
        </linearGradient>
      </defs>
      <rect
        fill="url(#a)"
        stroke="#fff"
        strokeWidth={9}
        height={494}
        width={494}
        rx={32}
        ry={32}
      />
      <path
        d="M186.436 55.738c-9.044 0-19.112 5.87-26.735 21.114l-6.807 13.62c2.48-.203 4.968-.31 7.455-.31 18.02 0 36.005 5.363 51.87 15.977V75.155c-7.5-13.917-17.102-19.418-25.782-19.418zm139.128 0c-8.68 0-18.28 5.5-25.78 19.418v30.994c18.064-12.06 38.895-17.28 59.345-15.638l-6.83-13.66c-7.624-15.245-17.692-21.114-26.736-21.114zm-165.216 51.926c-19.05 0-38.08 7.693-53.74 23l-37.38 65.418c14.492-6.743 30.633-10.518 47.64-10.518 39.96 0 75.16 20.792 95.35 52.124V128.846c-15.293-14.115-33.58-21.182-51.87-21.182zm192.433.033c-18.662-.306-37.39 6.74-52.997 21.145v108.845c20.19-31.33 55.39-52.123 95.348-52.123 17.01 0 33.15 3.775 47.643 10.518l-37.38-65.418c-15.35-15.003-33.95-22.66-52.612-22.967zM256 120.957c-5.113 0-11.882 2.775-25.783 9.627v133.014c7.246-5.314 16.164-8.467 25.783-8.467 9.62 0 18.537 3.154 25.783 8.468V130.584c-13.9-6.852-20.67-9.627-25.783-9.627zm-139.13 82.607c-52.767 0-95.35 42.582-95.35 95.348s42.583 95.35 95.35 95.35c52.765 0 95.347-42.584 95.347-95.35 0-52.766-42.582-95.348-95.348-95.348zm278.26 0c-52.765 0-95.347 42.582-95.347 95.348s42.582 95.35 95.348 95.35c52.767 0 95.35-42.584 95.35-95.35 0-52.766-42.583-95.348-95.35-95.348zm-279.827 19.004a80.4 80.4 0 0 1 3.674.03c7.344.225 14.694 1.462 21.77 3.816 36.842 11.343 59.745 51.664 50.622 89.11-7.652 37.743-45.455 64.51-83.595 59.17-38.748-3.865-69.376-39.578-67.16-78.483.167-11.41 3.133-22.336 8.2-32.124A26.087 26.087 0 0 0 73.39 281.52a26.087 26.087 0 0 0 26.09-26.084 26.087 26.087 0 0 0-17.447-24.584c9.058-4.694 19.097-7.594 29.606-8.147a84.277 84.277 0 0 1 3.663-.137zm278.26 0a80.345 80.345 0 0 1 3.673.03c7.344.225 14.696 1.462 21.774 3.816 36.84 11.343 59.742 51.664 50.62 89.11-7.652 37.742-45.453 64.51-83.59 59.173-38.75-3.865-69.38-39.582-67.163-78.488.167-11.41 3.133-22.334 8.2-32.122a26.087 26.087 0 0 0 24.575 17.433 26.087 26.087 0 0 0 26.086-26.084 26.087 26.087 0 0 0-17.443-24.584c9.057-4.694 19.095-7.594 29.603-8.147 1.22-.072 2.44-.118 3.664-.137zM256 273.13c-14.346 0-25.783 11.436-25.783 25.782s11.437 25.783 25.783 25.783c14.346 0 25.783-11.437 25.783-25.783 0-14.346-11.437-25.78-25.783-25.78z"
        fill="#fff"
        stroke="#ccc"
        strokeWidth={8}
      />
    </svg>
  );
}

export default SearchIcon;
