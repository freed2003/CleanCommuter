import { useState, useEffect } from 'react';
import { TextField,Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [user, loading] = useAuthState(auth);
    const loggedIn = localStorage.getItem('user');

    return (
        <div className="login">
            <div className="login-container">
                <h1><center>Log in or Sign Up Here!</center></h1>
                <center>
                    <form /*onSubmit={handleSubmit}*/>
                    <TextField
                            sx={{ input: { color: 'white' } }}
                            InputLabelProps={{style : {color : 'grey'} }}
                            // value={user}
                            label="Username or Email"
                            variant="outlined"
                            required
                            margin="normal"
                            // onChange={(e) => {setUser(e.target.value);}}
                        />
                        <br></br>
                        <TextField
                            sx={{ input: { color: 'white' } }}
                            InputLabelProps={{style : {color : 'grey'} }}
                            // value={pass}
                            label="Password"
                            variant="outlined"
                            required
                            margin="normal"
                            // onChange={(e) => {setPass(e.target.value);}}
                        />
                        <br/>
                        <br/>
                        <Button type="submit" variant="contained" color="primary">
                            Log in
                        </Button>
                    </form>
					<br/>
					<Link to="/register">
						No account? Sign up here
        			</Link>
                    <br/>
                    <br/>
                    <Button /*onClick={logOut}*/ variant="contained" color="primary">
                            Log out
                    </Button>
                </center>
            </div>
        </div>
    )
};