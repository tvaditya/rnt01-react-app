import TextField from '@material-ui/core/TextField';
import React, {SyntheticEvent, useEffect, useState} from 'react';
import Layout from "../components/Layout";
import {Button} from "@material-ui/core";
import axios from "axios";

const Profile = () => {
    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password_confirm, setPasswordConfirm] = useState('')

    useEffect(() => {
        (
            async () => {
                const {data} = await axios.get('user');

                setFirstName(data.first_name)
                setLastName(data.last_name)
                setEmail(data.email)
                setPassword(data.password)
                setPasswordConfirm(data.password_confirm)
            }
        )();
    }, []);

    const infoSubmit = async (e: SyntheticEvent) => {
        e.preventDefault()
        await axios.put('users/info', {
            first_name,
            last_name,
            email
        })

    }

    const passwordSubmit = async (e: SyntheticEvent) => {
        e.preventDefault()

        await axios.put('users/password', {
            password,
            password_confirm
        })
    }

    return (
        <Layout>
            <h3>Account Information</h3>
            <form onSubmit={infoSubmit}>
                <div className={"mb-3"}>
                    <TextField label={"First Name"}
                               value={first_name}
                               onChange={e => setFirstName(e.target.value)}
                    />
                </div>
                <div className={"mb-3"}>
                    <TextField label={"Last Name"}
                               value={last_name}
                        onChange={e => setLastName(e.target.value)}
                    />
                </div>
                <div className={"mb-3"}>
                    <TextField label={"Email"}
                               value={email}
                               onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <Button variant={"contained"} color={"primary"} type={"submit"} >Submit</Button>
            </form>
            <form onSubmit={passwordSubmit}>
                <div className={"mb-3"}>
                    <TextField label={"Password"}
                               type={"password"}
                               value={password}
                               onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <div className={"mb-3"}>
                    <TextField label={"Password Confirm"}
                               type={"password"}
                               value={password_confirm}
                               onChange={e => setPasswordConfirm(e.target.value)}
                    />
                </div>
                <Button variant={"contained"} color={"primary"} type={"submit"}>Submit</Button>
            </form>
        </Layout>
    )
}

export default Profile;