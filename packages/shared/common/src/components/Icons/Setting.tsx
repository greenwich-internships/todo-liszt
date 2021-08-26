const User = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19 9a1 1 0 011 1v11a1 1 0 11-2 0V10a1 1 0 011-1zM19 2a1 1 0 011 1v3a1 1 0 11-2 0V3a1 1 0 011-1zM13 3a1 1 0 10-2 0v11a1 1 0 102 0V3zM13 18a1 1 0 10-2 0v3a1 1 0 102 0v-3zM6 3a1 1 0 10-2 0v7a1 1 0 102 0V3zM6 14a1 1 0 10-2 0v7a1 1 0 102 0v-7z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19 11a3 3 0 110-6 3 3 0 010 6zm0-2a1 1 0 110-2 1 1 0 010 2zM9 16a3 3 0 106 0 3 3 0 00-6 0zm2 0a1 1 0 102 0 1 1 0 00-2 0zM2 12a3 3 0 106 0 3 3 0 00-6 0zm2 0a1 1 0 102 0 1 1 0 00-2 0z"
      fill="currentColor"
    />
  </svg>
);

export default User;