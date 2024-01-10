import { useState } from "react";

import { Modal, Card, Text, TextInput, Button } from "@gravity-ui/uikit";

import axios from "axios";

import { API_GH, HEADERS } from "../config";

import "./AuthToken.css";


const AuthToken = ({ onSubmit }) => {
    const [token, setToken] = useState("");
    const [isAuth, setIsAuth] = useState(true);
    const [errorMessage, setError] = useState("");

    function onAuth() {
        const result_token = "VKMusic " + token;
        axios.post(`${API_GH}/validate`, {
            token: result_token,
        }, 
        {
            headers: HEADERS,
        }).then((response) => {
            console.log(response.data);
            localStorage.setItem('token', result_token);
            setIsAuth(true);
        }).catch((error) => {
            console.log(error.response.data.detail);
            setError(error.response.data.detail);
            setIsAuth(false);
        });
    }
    
    return (
        <Card className="auth-token-modal">
            <Text variant="display-1">Авторизация</Text>
            <TextInput
                size="l"
                label="Токен: "
                value={token}
                onChange={(e) => setToken(e.target.value)}
                validationState={isAuth? "valid": "invalid"}
                errorMessage={errorMessage}
                hasClear={true}
                autoFocus={true}
            />
            <Button
                size="l"
                width="max"
                view="action"
                onClick={() => onAuth()}
                >
                Проверить и сохранить
            </Button>
        </Card>
    );
};

export default AuthToken;