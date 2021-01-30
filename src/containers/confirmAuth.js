import React from 'react'


export function isAuthenticated()  {
        if (localStorage.getItem('@welcome-app/username')) {
            {console.log("true", localStorage.getItem('@welcome-app/username'))}
            return true
            
        } else {
            {console.log("false", localStorage.getItem('@welcome-app/username'))}
            return false
        }
}
