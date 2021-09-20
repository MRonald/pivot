import React from "react";
import styled from "styled-components";

const LoginWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(315deg, black, gray);

    .screen-login {
        width: 30%;
        max-width: 460px;
        min-width: 300px;
        height: 250px;
        background-color: var(--gray-light);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 30px;

        .form-login {
            width: 80%;
            margin: auto;
        }
    }
`;


export default function Login() {
    return (
        <LoginWrapper>
            <div className="screen-login">
                <form className="form-login">
                    <div className="form-group">
                        <label htmlFor="email">Nome de usuário</label>
                        <input type="email" id="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Senha</label>
                        <input type="email" id="email" required />
                    </div>
                    <button type="button" className="btn mt-10">Entrar</button>
                </form>
            </div>
        </LoginWrapper>
    );
}
