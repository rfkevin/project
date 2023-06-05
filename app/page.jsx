import './page.css';
import Link from 'next/link';


const page = () => {
  return (
    <div className="page" style={{ backgroundImage: '../public/batteries-diagnostic.webp' }}>
      <div className="content">
        <h1>DétachezVous</h1>
        <Link href="/home" passHref>
            <button as="a">Start</button>
            
        </Link>
      </div>
    </div>
  );
};
export default page;
