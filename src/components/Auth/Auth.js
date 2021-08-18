import React from 'react'
import ("./Auth.css")

function Auth() {
    return (
        <>
        <div className="background-wrap">
            <div className="background"/>
        </div>
        <form id="accesspanel" action="">
            <h1 id="litheader">Patriot CAD Systems</h1>
            <div className="inset">
                <p>
                    <input type="password" placeholder="Access Code" />
                </p>
                <p>
                    <input type="text" placeholder="Badge # ex: B-00" />
                </p>
                <p className="p-container">
                <input type="submit" name="Login" id="go"  defaultValue="Authorize" />
          </p>
            </div>
        </form>
        </>
    )
}

export default Auth
