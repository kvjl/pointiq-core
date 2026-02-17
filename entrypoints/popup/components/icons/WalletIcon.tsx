type IconProps = {
  className?: string;
};

export function WalletIcon({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.6"
      stroke-linecap="round"
      stroke-linejoin="round"
      role="img"
      aria-label="Wallet"
    >
      <rect x="3" y="6" width="18" height="12" rx="2" ry="2" />
      <path d="M21 10h-6a2 2 0 0 0 0 4h6z" />
    </svg>
  );
}
