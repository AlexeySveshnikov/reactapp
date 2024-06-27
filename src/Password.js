function Password({password, setPassword}) {

    function change(event) {
        setPassword(event.target.value);
    }

    return (
        <div style={{margin: "0.5em"}}>
            Enter password: <input type="password" text={password} onChange={change}/>
        </div>
    );
}

export default Password;