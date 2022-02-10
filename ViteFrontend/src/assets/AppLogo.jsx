import React from "react";

function AppLogo(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      style={{
        height: 100,
        width: 150,
      }}
      {...props}
    >
      <defs>
        <linearGradient id="a">
          <stop offset="0%" stopColor="#e63946" />
          <stop offset="100%" stopColor="#a8dadc" />
        </linearGradient>
      </defs>
      <path
        d="M192.215 39.565c-48.32 6.48-43.031 58.948-42.874 75.82l93.895 13.622c1.004-35.647 5.621-59.868 13.545-76.27 2.186-4.523 4.704-8.455 7.469-11.836zm107.012 2.48c-1.17.023-2.36.098-3.57.226-8.898.937-15.873 4.232-22.669 18.296-6.795 14.065-11.916 39.331-12.095 80.59l-.026 5.95-5.484 2.306c-50.104 21.083-82.1 39.796-100.16 55.334-18.06 15.538-21.362 26.305-19.541 34.088 1.82 7.783 10.734 16.375 25.353 23.44 14.62 7.064 33.96 12.409 52.951 15.634l11.293 1.918-83.045 192.608 120.118-32.106 51.136-112.484 51.045 86.37 113.43-30.929-86.887-142.223 10.647-3.617c15.087-5.126 32.096-12.698 45.673-21.45 13.578-8.753 23.156-18.91 25.407-26.64 1.125-3.864.992-7.055-1.028-11.146-2.02-4.09-6.362-9.116-14.296-14.488-15.869-10.744-45.623-22.39-93.485-32.809l-6.672-1.453-.398-6.816c-.762-13.052-6.589-35.803-17.293-53.27-9.366-15.284-21.176-26.136-36.961-27.242a38.595 38.595 0 0 0-3.443-.086zm-170.685 87.41c-79.404 44.697-85.83 54.663-86.757 71.6-2.209 40.397 42.597 46.791 89.698 59.957-6.026-5.765-11.447-10.033-13.329-18.075-3.82-16.327 4.783-34.158 25.328-51.834 17.067-14.684 43.279-30.404 80.907-47.62zM93.291 271.788c-22.445 48.26-38.283 103.023-59.254 153.977l87.723 43.328 17.77-35.852 57.154-132.556zm222.283 94.963-15.752 34.648 43.543 12.375z"
        fill="url(#a)"
        transform="translate(0 -20)"
      />
      <g transform="matrix(.5 0 0 .5 364 364)">
        <circle cx={128} cy={128} r={128} fill="#f4f1de" />
        <circle
          stroke="#e07a5f"
          fill="#f4f1de"
          strokeWidth={18}
          cx={128}
          cy={128}
          r={101}
        />
        <path
          fill="#e07a5f"
          d="m167.113 57.102-.992 21.603 13.16 7.697.621-21.726-12.789-7.574zm-14.129 26.582c-11.305.147-22.5 6.311-28.892 12.279-22.41 26.033-23.614 74.596-53.223 88.01v.002c36.856 13.126 78.422 2.292 102.5-27.961 18.15-23.496 14.895-47.259 3.16-60.975-8.66 30.452-30.28 52.776-56.718 61.549 23.525-13.791 40.411-43.059 44.341-70.815-3.619-1.518-7.4-2.138-11.168-2.09z"
        />
      </g>
      <g
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize={120}
        fontWeight="bold"
        textAnchor="middle"
        textDecoration="rgba(61, 64, 91, 1)"
      >
        <text
          stroke="rgba(244, 241, 222, 1)"
          strokeWidth={30}
          transform="rotate(-15 626.511 -767.533)"
        >
          <tspan x={0} y={0}>
            {"My Art "}
          </tspan>
          <tspan x={0} y={120}>
            {"Journal"}
          </tspan>
        </text>
        <text
          fill="rgba(61, 64, 91, 1)"
          transform="rotate(-15 626.511 -767.533)"
        >
          <tspan x={0} y={0}>
            {"My Art "}
          </tspan>
          <tspan x={0} y={120}>
            {"Journal"}
          </tspan>
        </text>
      </g>
    </svg>
  );
}

export default AppLogo;
