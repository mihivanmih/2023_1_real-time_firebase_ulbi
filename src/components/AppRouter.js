import React from 'react'
import { CHAT_ROUTE, LOGIN_ROUTE } from '../utils/consts'
import { Navigate, Route, Routes } from 'react-router-dom'
import { privateRoutes, publicRoutes } from './routes'

const AppRouter = () => {
    const user = false
    
    return user ?
        (
            <Routes>
                {privateRoutes.map( ({path, Component}) =>
                    <Route path={path} element={Component} exact={true} key={path} />
                )}
                <Route path="*" element={<Navigate to={CHAT_ROUTE} replace />} />
            </Routes>
        )
        :
        (
            <Routes>
                {publicRoutes.map( ({path, Component}) =>
                    <Route path={path} element={Component} exact={true} key={path}/>
                )}
                <Route path="*" element={<Navigate to={LOGIN_ROUTE} replace /> } />
            </Routes>
        )
}

export default AppRouter
