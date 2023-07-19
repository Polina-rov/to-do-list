import Logo from './Logo';
function Header({ title }) {
  return (
    <div>
      <Logo /> <h1>{title}</h1>
    </div>
  );
}
export default Header;
