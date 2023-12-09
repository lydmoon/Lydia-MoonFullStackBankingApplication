function Home() {
  const ctx = React.useContext(UserContext);
  console.log(ctx);

  React.useEffect(() => {
    const navCreateAccount    = document.getElementById('nav-create-account');
    const navLogin            = document.getElementById('nav-login');
    const navDeposit          = document.getElementById('nav-deposit');
    const navWithdraw         = document.getElementById('nav-withdraw');
    const navAllData          = document.getElementById('nav-allData');
    const navLogout           = document.getElementById('nav-logout');
    },[])

    const centerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh', // Ensures full viewport height
        textAlign: 'center', // Horizontal centering
      };
    
      return (
        <div style={centerStyle}>
          <h3>Lyd Bad Bank</h3>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Welcome</h5>
              <p className="card-text">
            You can deposit, withdraw, and check your balance on this webpage. Start by:
          </p>
          <p>
            If you don't have an account, start by clicking "Create Account" tab!
          </p>
          <p>
            If you have an account, simply log in to your account by clicking the "Login" tab!
          </p>
        </div>
        <img
          src="bank.png"
          className="card-img-bottom"
          alt="Bank Building"
        />
      </div>
    </div>
  );
}

