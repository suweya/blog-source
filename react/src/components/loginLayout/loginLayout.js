import React from 'react'
import { Layout } from 'antd'
import styles from './loginLayout.css'

const { Content, Footer } = Layout

const LoginLayout = (props) => {
    return (
        <Layout className={styles.normal}>
            <div className={styles.background}></div>
            <Content className={styles.content}>
                {props.children}
            </Content>
            <Footer className={styles.footer}>
                <span>Blog</span>
            </Footer>
        </Layout>
    )
}

export default LoginLayout