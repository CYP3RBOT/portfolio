import Link from 'next/link';

export default function NavigationLinks() {
  return (
    <>
      <li>
        <Link href={'/'}>Home</Link>
      </li>
      <li>
        <Link href={'/classes'}>Classes</Link>
      </li>
      <li>
        <Link href={'/study'}>Study</Link>
      </li>
      <li>
        <Link href={'/about'}>About</Link>
      </li>
    </>
  );
}
