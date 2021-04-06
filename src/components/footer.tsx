export const Footer = (): React.ReactElement => {
  return (
    <footer className="w-full h-16 border-t border-solid border-gray-200 flex justify-center items-center">
      <a
        href="https://vercel.com/"
        className="flex justify-center items-center"
        target="_blank"
        rel="noopener noreferrer"
      >
        Hosted by{' '}
        <img src="/vercel.svg" alt="Vercel Logo" className="ml-2 h-4" />
      </a>
    </footer>
  );
};
