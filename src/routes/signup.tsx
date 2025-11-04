import DefaultLayout from "../layout/DefaultLayout";
import { useState } from "react";

export default function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <DefaultLayout>
        <form className="form">

            <h1>Signup</h1>
            
            <label>Correo Electronico</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

            <label>Nombre Completo</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

            <label>Nombre de Usuario</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />

            <label>Contraseña</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

            <button>Crear Usuario</button>
            
        </form>
        </DefaultLayout>
    );
}