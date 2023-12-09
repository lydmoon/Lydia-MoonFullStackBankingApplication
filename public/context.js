const Route = ReactRouterDOM.Route;
const Link = ReactRouterDOM.Link;
const HashRouter = ReactRouterDOM.HashRouter;
const UserContext = React.createContext(null);

const firebaseConfig = {
        apiKey: "AIzaSyBFJEcjUPOx6rmIDd0KKmpNkCHos236k3I",
        authDomain: "badbank-6af3f.firebaseapp.com",
        databaseURL: "https://badbank-6af3f-default-rtdb.firebaseio.com",
        projectId: "badbank-6af3f",
        storageBucket: "badbank-6af3f.appspot.com",
        messagingSenderId: "305861922581",
        appId: "1:305861922581:web:23cd4704c7e7013c63231c",
        measurementId: "G-KXQ53HG6PD"
      };
firebase.initializeApp(firebaseConfig);

function Card(props){
    function classes(){
        const bg = props.bgcolor ? ' bg-' + props.bgcolor: ' ';
        const txt = props.txtcolor ? ' text-' + props.txtcolor: ' text-white';
        return 'card mb-3 ' + bg + txt;
    }

    return (
        <div className={classes()} style={{maxWidth: "18rem"}}>
            <div className="card-header">{props.header}</div>
            <div className="card-body">
                {props.title && (<h5 className="card-title">{props.title}</h5>)}
                {props.text && (<p className="card-text">{props.text}</p>)}
                {props.body}
                {props.status && (<div id='createStatus'>{props.status}</div>)}
            </div>
        </div>
    );
}