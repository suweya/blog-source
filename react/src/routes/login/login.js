import React from 'react';
import { Link } from 'dva/router';
import { connect } from 'dva';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import styles from './login.css';
import LoginLayout from '../../components/loginLayout/loginLayout';

const Login = ({ loading, dispatch, form: { getFieldDecorator, validateFields } }) => {
  function onSubmit(e) {
    e.preventDefault();
    validateFields((error, values) => {
      console.log('=== ', values);
    });
  }

  return (
    <LoginLayout>
      <div className={styles.container}>
        <div className={styles.logo}>
          <span>Blog</span>
        </div>
        <Form onSubmit={onSubmit}>
          <Form.Item>
            {
                            getFieldDecorator('username', {
                              rules: [{ required: true, message: '请输入用户名' }],
                            })(<Input addonBefore={<Icon type="user" />} placeholder="用户名" />)
                        }
          </Form.Item>
          <Form.Item>
            {
                            getFieldDecorator('password', {
                              rules: [{ required: true, message: '请输入密码' }],
                            })(<Input addonBefore={<Icon type="lock" />} type="password" placeholder="密码" />)
                        }
          </Form.Item>
          <Form.Item>
            {
                            getFieldDecorator('remember', {
                              valuePropName: 'checked',
                              initialValue: true,
                            })(<Checkbox>记住我</Checkbox>)
                        }
            <span className={styles['login-form-forgot']}><Link to="/forgot">忘记密码</Link></span>
            <Button
              type="primary"
              htmlType="submit"
              className={styles['login-form-button']}
              loading={loading}
            >
                            登录
                        </Button>
            <span>或 <Link to="/register">注册</Link></span>
          </Form.Item>
        </Form>
      </div>
    </LoginLayout>
  );
};

// mapStateToProps
export default connect((state) => {
  return {
    loading: false,
  };
})(Form.create({})(Login));
