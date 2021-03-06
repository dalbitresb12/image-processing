import Link from 'next/link';

export type Props = {
  title: string,
  caption: string,
  href: string,
}

export const Card = (props: Props): React.ReactElement | null => {
  const { title, caption, href } = props;
  return (
    <Link href={href} passHref>
      <a className="flex-1 p-6 text-left border border-solid border-gray-200 rounded-xl transition-colors duration-150 hover:text-indigo-500 hover:border-indigo-500 focus:text-indigo-500 focus:border-indigo-500">
        <h3 className="mb-4 text-xl font-medium">{title}</h3>
        <p className="text-xl leading-6">{caption}</p>
      </a>
    </Link>
  );
};
