import * as React from 'react'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Layout from './Components/Layout'

export default function App() {
    return (
        <Layout>
            <Header />
            <div>Hello World</div>
            <Footer />
        </Layout>
    )
}
