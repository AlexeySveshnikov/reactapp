function Login({name, setName}) {

    function change(event) {
        setName(event.target.value);
    }

    return (
        <div style={{margin: "0.5em"}}>
        Enter name: <input text={name} onChange={change}/>
        </div>
    );
}

export default Login;