import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Routes from "./routes";

const GlobalStyle = createGlobalStyle`
    :root {
        --gray-light: #e2e2e2;
        --gray-dark: #313131;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }
    body {
        font-family: Ubuntu, sans-serif;
    }

    /* Formatações genéricas */
    .form-group {
        display: flex;
        flex-direction: column;

        label {
            margin-bottom: 5px;
        }

        input {
            margin-bottom: 10px;
            padding: 5px 10px;
            font-size: 1rem;
            border-radius: 30px;
            border: 1px solid gray;
        }
    }
    .btn {
        border: 1px solid var(--gray-dark);
        border-radius: 30px;
        background-color: var(--gray-dark);
        color: white;
        padding: 10px 15px;
        text-transform: uppercase;
        cursor: pointer;
        transition: all 0.3s;
    }
    .btn:hover {
        background-color: white;
        color: var(--gray-dark);
    }
    .align-right {
        display: flex;
        justify-content: flex-end;
    }
    .mt-10 {
        margin-top: 10px !important;
    }
`;

function App() {
    return (
        <div className="App">
            <GlobalStyle />

            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </div>
    );
}

export default App;
