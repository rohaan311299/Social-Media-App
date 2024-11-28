import Image from 'next/image';
import styles from '../styles/Recommendations.module.css';

interface User {
  username: string;
  fullName: string;
  followedBy: string;
  avatarUrl: string;
}

export default function Recommendations() {
  const suggestedUsers: User[] = [
    {
      username: "ronakmehta97",
      fullName: "Ronak",
      followedBy: "bhansaliyashi and others",
      avatarUrl: "/avatars/ronak.jpg"
    },
    {
        username: "ronakmehta97",
        fullName: "Ronak",
        followedBy: "bhansaliyashi and others",
        avatarUrl: "/avatars/ronak.jpg"
      },
      {
        username: "ronakmehta97",
        fullName: "Ronak",
        followedBy: "bhansaliyashi and others",
        avatarUrl: "/avatars/ronak.jpg"
      },
      {
        username: "ronakmehta97",
        fullName: "Ronak",
        followedBy: "bhansaliyashi and others",
        avatarUrl: "/avatars/ronak.jpg"
      },
    // Add more suggested users as needed
  ];

  const Footer = () => (
    <footer className="text-gray-500 text-sm mt-8">
      <div className="mt-4">© 2024 LinkUp by Rohan Kacheria</div>
    </footer>
  );

  return (
    <div className={styles.recommendationsContainer}>
      <div className={styles.header}>
        <h2>Suggested for you</h2>
        <button className={styles.seeAll}>See All</button>
      </div>

      <div className={styles.suggestionsList}>
        {suggestedUsers.map((user) => (
          <div key={user.username} className={styles.suggestionItem}>
            <div className={styles.userInfo}>
              <Image
                src={user.avatarUrl}
                alt={user.username}
                width={40}
                height={40}
                className={styles.avatar}
              />
              <div className={styles.userText}>
                <span className={styles.username}>{user.username}</span>
                <span className={styles.followedBy}>Followed by {user.followedBy}</span>
              </div>
            </div>
            <button className={styles.followButton}>Follow</button>
          </div>
        ))}
      </div>
    <br />
      <Footer />
    </div>
  );
}
