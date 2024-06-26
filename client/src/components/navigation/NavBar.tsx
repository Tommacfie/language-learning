import { Link } from "wouter";

const NavBar = () => {
  return (
    <div className='flex border-t mt-auto h-[10vh]'>
      <Link href='/' className='w-1/3 flex items-center justify-center'>
        Decks
      </Link>
      <Link
        href='/createDeck'
        className='w-1/3 flex items-center justify-center'
      >
        Create
      </Link>
      <Link href='/settings' className='w-1/3 flex items-center justify-center'>
        Create
      </Link>
    </div>
  );
};

export default NavBar;
