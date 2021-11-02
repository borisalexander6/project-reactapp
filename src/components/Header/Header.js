import "./Header.css";

const Header = () => {
     return (
          <div>
               <span onClick={() => window.scroll(0, 0)} className="header">
               Movies and Series
               </span>
          </div>
     );
};

export default Header
