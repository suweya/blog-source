import React from 'react';
import { Form, Input, Button, Icon } from 'antd';
import { connect } from 'dva';
import { Link } from 'dva/router'
import styles from './register.css'
import LoginLayout from '../../components/loginLayout/loginLayout'

const FORM_ITEM_LAYOUT = {
  labelCol: { span: 6 },
  wrapperCol: { span: 17 }
}

const TAIL_FORM_ITEM_LAYOUT = {
  wrapperCol: {
    span: 17,
    offset: 6
  }
};

const Register = ({ form:{getFieldDecorator}, dispatch }) => {

  let passwordDirty = false;

  function handleSubmit(e) {
    e.preventDefault()
    form.validateFieldsAndScroll((error, values) => {
      if (!error) {
        dispatch({
          type: 'app/register',
          ...values
        })
      }
    })
  }

  function handlePasswordBlur(e) {
    const value = e.target.value;
    passwordDirty = passwordDirty || !!value
  }

  function checkPassword(rule, value, callback) {
    if (value && value !== form.getFieldValue('password')) {
      callback('两次密码不一致')
    } else {
      callback()
    }
  }

  function checkConfirm(rule, value, callback) {
    if (value && passwordDirty) {
      form.validateFields(['confirm'], {force: true})
    }
    callback();
  }

  return (
    <LoginLayout>
      <div className={styles.container}>
        <div className={styles.logo}>
          注册
        </div>
        <Form horizontal onSubmit={handleSubmit}>
          <Form.Item {...FORM_ITEM_LAYOUT} label='用户名' hasFeedback>
            {
              getFieldDecorator('username', {
                rules: [{ required: true, message: '请输入用户名' }]
              })(<Input addonBefore={<Icon type='user'/>}/>)
            }
          </Form.Item>
          <Form.Item {...FORM_ITEM_LAYOUT} label='E-mail' hasFeedback>
            {
              getFieldDecorator('email', {
                rules: [
                  {type: 'email', message: '请输入合法邮箱'},
                  {required: true, message: '请输入邮箱'}
                ]
              })(<Input addonBefore={<Icon type='mail'/>}/>)
            }
          </Form.Item>
          <Form.Item {...FORM_ITEM_LAYOUT} label='密码' hasFeedback>
            {
              getFieldDecorator('password', {
                rules: [
                  {required: true, message: '请输入密码'},
                  {validator: checkConfirm}
                ]
              })(<Input type='password' onBlur={handlePasswordBlur} addonBefore={<Icon type="lock"/>}/>)
            }
          </Form.Item>
          <Form.Item {...FORM_ITEM_LAYOUT} label='确认密码' hasFeedback>
            {
              getFieldDecorator('confirm', {
                rules: [
                  {required: true, message: '请输入确认密码'},
                  {validator: checkPassword}
                ]
              })(<Input type='password' addonBefore={<Icon type="lock"/>}/>)
            }
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large">注册</Button>
            <span className={styles.toOther}>已有帐号? <Link to="/login">登录</Link></span>
          </Form.Item>
        </Form>
      </div>
    </LoginLayout>
  )
}

export default connect(() => {})(Form.create()(Register))
