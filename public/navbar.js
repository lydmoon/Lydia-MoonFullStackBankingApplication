function NavBar() {
  const ctx = React.useContext(UserContext);

  function handleLogout(){
    console.log('logout clicked')
    ctx.user = "please login";
    ctx.email = "";
    firebase.auth().signOut();
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <a className="navbar-brand" href="#" id="nav-home">
          <span title="Home">Lyd Bank</span>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item" id="nav-create-account">
              <a className="nav-link" href="#/CreateAccount/">
                <span title="Create a new account">Create Account</span>
              </a>
            </li>
            <li className="nav-item" id='nav-login'>
              <a className="nav-link" href="#/login/">
                <span title="Login to existing account">Login</span>
              </a>
            </li>
            <li className="nav-item" id='nav-deposit'>
              <a className="nav-link" href="#/deposit/">
                <span title="Deposit your money">Deposit</span>
              </a>
            </li>
            <li className="nav-item"  id='nav-withdraw'>
              <a className="nav-link" href="#/withdraw/">
                <span title="Withdraw your money">Withdraw</span>
              </a>
            </li>
            <li className="nav-item" id='nav-allData'>
              <a className="nav-link" href="#/alldata/">
                <span title="See all data">All data</span>
              </a>
            </li>
            <li className="nav-item" id='nav-logout'>
              <a className="nav-link" onClick={handleLogout} href="#">
                <span title="Logout">Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}