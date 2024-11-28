import Link from 'next/link';
import styles from '../styles/Sidebar.module.css';
import Image from 'next/image';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import ChatIcon from '@mui/icons-material/Chat';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddIcon from '@mui/icons-material/Add';
import MenuIcon from '@mui/icons-material/Menu';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
        <div className={styles.logo}>
            <h1>LinkUp</h1>
        </div>
      <nav>
        <ul>
          <li className={styles.navItem}>
            <Link href="/" className={styles.navLink}>
              <span className={styles.navText}><HomeIcon sx={{ verticalAlign: 'middle', marginRight: '8px' }} /> Home</span>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/" className={styles.navLink}>
            <span className={styles.navText}><SearchIcon sx={{ verticalAlign: 'middle', marginRight: '8px' }} /> Search</span>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/" className={styles.navLink}>
            <span className={styles.navText}><ExploreIcon sx={{ verticalAlign: 'middle', marginRight: '8px' }} /> Explore</span>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/reels" className={styles.navLink}>
            <span className={styles.navText}><SlideshowIcon sx={{ verticalAlign: 'middle', marginRight: '8px' }} /> Reels</span>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/" className={styles.navLink}>
            <span className={styles.navText}><ChatIcon sx={{ verticalAlign: 'middle', marginRight: '8px' }} /> Message</span>
              <span>Messages</span>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/" className={styles.navLink}>
            <span className={styles.navText}><FavoriteIcon sx={{ verticalAlign: 'middle', marginRight: '8px' }} /> Notifications</span>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/" className={styles.navLink}>
            <span className={styles.navText}><AddIcon sx={{ verticalAlign: 'middle', marginRight: '8px' }} /> Create</span>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/" className={styles.navLink}>
              <span className={styles.navText}>
                <Image 
                  src="/default-avatar.jpg"
                  alt = ""
                  width={24}
                  height={24}
                  style={{ 
                    borderRadius: '50%',
                    verticalAlign: 'middle',
                    marginRight: '8px'
                  }}
                />
                Profile
              </span>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/" className={styles.navLink}>
            <span className={styles.navText}><MenuIcon sx={{ verticalAlign: 'middle', marginRight: '8px' }} /> More</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
