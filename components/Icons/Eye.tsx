const Eye = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 18c4.126 0 7.06-2.592 8.777-4.751a1.968 1.968 0 000-2.498C19.06 8.592 16.126 6 12 6c-4.125 0-7.06 2.592-8.777 4.751a1.968 1.968 0 000 2.498C4.94 15.408 7.875 18 12 18zm10.342-3.506a3.967 3.967 0 000-4.988C20.474 7.158 17.027 4 12 4 6.974 4 3.526 7.158 1.658 9.506a3.967 3.967 0 000 4.988C3.526 16.842 6.974 20 12 20c5.027 0 8.474-3.158 10.342-5.506z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 12a2 2 0 11-3.998-.085A1.5 1.5 0 0012 10.5a1.5 1.5 0 00-.085-.498L12 10a2 2 0 012 2zm2 0a4 4 0 11-8 0 4 4 0 018 0z"
      fill="currentColor"
    />
  </svg>
);

export default Eye;
