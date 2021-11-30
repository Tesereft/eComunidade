import React from "react";
import "./style.css"

const Form = () => {
    return(
        <form>
            <h1 className={"form-title"}>Crie uma conta</h1>
            <label>
                Number
            </label>
            <input type={"text"} pattern={"([0-9]2) [0-9]5-[0-9]4"}/>
            <label>
                Password
            </label>
            <input type={"text"} />

            <label>
                Password Confirm
            </label>
            <input type={"text"} />

            <label>You are...</label>
            <div className={'two-column-grid'}>
                <div className={"selectable-item"}>
                    Productor
                </div>

                <div className={"selectable-item"}>
                    Productor
                </div>
            </div>
            <button>Send!</button>
        </form>
    )
}

export default Form;