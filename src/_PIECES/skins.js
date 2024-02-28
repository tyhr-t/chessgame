const skins = {
  bishop:
    "M406.02 476.915h-300v-60h300v60zm-83.46-181H189.48v17.65h133.08v-17.65zm11.78-77.69a200 200 0 0 1-9.39 61.69H187.09a200 200 0 0 1-9.39-61.69c0-59.09 23.82-109 56.41-124.67a33.34 33.34 0 1 1 43.82 0c32.59 15.71 56.41 65.58 56.41 124.67zm-51.07-48.91h-19.25v-23.92h-16v23.92h-19.26v16h19.26v51.54h16v-51.54h19.25v-16zm38.15 180.69v-20.44h-130.8v20.44H93.29v.11l49.46 49.46h82.08l31.15-36l31.15 36h82.44l48.87-48.87l.27-.69h-97.29z",
  king: "M405.995 477.15h-300v-60h300v60zm-10.3-107.13h-279.4a96.88 96.88 0 0 1 6.65 31.12h266.1a96.88 96.88 0 0 1 6.65-31.12zm-139.7-241.06a35.76 35.76 0 0 0-35.76 35.76c0 50.16 35.76 99.34 35.76 99.34s35.76-49.18 35.76-99.34a35.76 35.76 0 0 0-35.76-35.76zm8-15.38V94.24h18.36v-16h-18.36V54.85h-16v23.39h-18.36v16h18.36v19.38a51.9 51.9 0 0 1 16-.04zm81.64 51.36a98.74 98.74 0 0 0-38.13 7.61c-3.23 51.75-37.07 98.85-38.58 100.93l-4.93 6.76V354h140c16.57-26.15 40.78-42.41 40.78-90a99.13 99.13 0 0 0-99.14-99.07zm-141.16 7.61a99.16 99.16 0 0 0-137.25 91.51c0 47.55 24.21 63.82 40.78 90h139.99v-73.82l-4.94-6.79c-1.51-2.05-35.34-49.15-38.58-100.9z",
  knight:
    "M60.81 476.91h300v-60h-300v60zm233.79-347.3l13.94 7.39c31.88-43.62 61.34-31.85 61.34-31.85l-21.62 53l35.64 19l2.87 33l64.42 108.75l-43.55 29.37s-26.82-36.39-39.65-43.66c-10.66-6-41.22-10.25-56.17-12l-67.54-76.91l-12 10.56l37.15 42.31c-.13.18-.25.37-.38.57c-35.78 58.17 23 105.69 68.49 131.78H84.14C93 85 294.6 129.61 294.6 129.61z",
  pawn: "M255.875 19.47c-33.142 0-59.844 26.822-59.844 60.186c0 33.364 26.703 60.156 59.845 60.156c33.142 0 59.875-26.792 59.875-60.156S289.017 19.47 255.875 19.47zm-50.688 120.343c-2.908 1.23-5.658 2.53-8.187 3.937c-14.467 8.046-21.47 17.86-21.47 27.094c0 9.234 7.003 19.08 21.47 27.125c14.467 8.044 35.51 13.436 58.875 13.436c23.365 0 44.408-5.392 58.875-13.437c14.467-8.047 21.47-17.892 21.47-27.126c0-9.234-7.003-19.048-21.47-27.094c-2.53-1.406-5.28-2.708-8.188-3.938c-13.696 11.647-31.392 18.688-50.687 18.688c-19.3 0-36.996-7.034-50.688-18.688zm78.875 87.906c-8.948 1.54-18.394 2.374-28.187 2.374A166.87 166.87 0 0 1 229 227.937a74.718 74.718 0 0 1 4.906 21.656c2.456 33.554-17.04 69.573-58.47 93.594l-.155.093l-.155.095c-20.062 10.653-30.28 24.056-30.28 36.97c0 12.9 10.28 26.46 30.343 37.217c20.062 10.76 48.86 17.844 80.75 17.844s60.687-7.085 80.75-17.844c20.062-10.758 30.343-24.318 30.343-37.218c0-13.127-10.773-26.656-31.655-37.406l-.22-.125l-.186-.094c-40.344-23.394-58.705-59.676-55.908-93.22a78.538 78.538 0 0 1 5-21.78zM128.845 395.655c-5.592 3.72-10.256 7.61-13.875 11.53c-6.9 7.48-9.94 14.64-9.94 21.845c0 7.206 3.04 14.397 9.94 21.876c6.898 7.48 17.6 14.852 31.28 21.125c27.36 12.547 66.42 20.69 109.625 20.69c43.206 0 82.295-8.143 109.656-20.69c13.682-6.27 24.352-13.644 31.25-21.124c6.9-7.48 9.97-14.67 9.97-21.875c0-7.204-3.07-14.363-9.97-21.842c-3.597-3.902-8.238-7.767-13.78-11.47c-5.638 15.6-19.584 28.706-37.5 38.313c-23.533 12.62-54.947 20.095-89.563 20.095c-34.615 0-66.06-7.474-89.593-20.094c-17.94-9.62-31.887-22.747-37.5-38.374z",
  queen:
    "M477.518 181.966a25 25 0 0 1-34.91 23l-62.29 150.26h-248.92l-62.24-150.19a25 25 0 1 1 9.73-7.29l87 71.2l20.92-126.4a25 25 0 1 1 14.7-1.85l54.31 117l54.42-117.3a25 25 0 1 1 14.58 2.08l20.93 126.42l87.26-71.3a25 25 0 1 1 44.51-15.63zm-71.66 241.25h-300v60h300v-60zm-27.75-52h-244.22v36h244.22v-36z",
  rook: "M406 484.7H106v-60h300v60zm-56.67-330.83h-50.05V91.3h-82.39v62.57h-54.22V91.3h-54.23v113.67h295.12V91.3h-54.23v62.57zm23.35 67.23H139.32v187.6h233.36V221.1z"
}

export default skins
