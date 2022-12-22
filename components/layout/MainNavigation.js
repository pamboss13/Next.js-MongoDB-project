import Link from 'next/link';

import classes from './MainNavigation.module.css';

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Soaps</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>All Soaps</Link>
          </li>
          <li>
            <Link href='/new-soap'>Add New Soap</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;