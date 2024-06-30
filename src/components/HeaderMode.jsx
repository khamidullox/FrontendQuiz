function HeaderMode() {
  return (
    <div className="header__toggleMode">
      <img src="/assets/icon-sun-dark.svg" alt="" width={24} height={24} />
      <label className="switch">
        <input type="checkbox" />
        <span className="slider"></span>
      </label>
      <img src="/assets/icon-moon-dark.svg" alt="" width={24} height={24} />
    </div>
  );
}

export default HeaderMode;
