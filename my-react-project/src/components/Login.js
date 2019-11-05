import { Form, Icon, Input, Button, Checkbox } from 'antd';
import React,{Component} from "react";
import {Box} from './loginStyle';
class Login extends Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (values.username==='admin'&& values.password==='admin') {
                console.log('Received values of form: ', values);
                localStorage.setItem('Users',JSON.stringify(values.username));
                this.props.history.push({pathname:'/'})
            }else {
                alert('您输入的账号或密码错误！');
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Box>
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: '请输入您的账号！' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="账号"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: '请输入您的密码！' }],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="密码"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(<Checkbox>记住密码</Checkbox>)}
                    <a className="login-form-forgot" href="#">
                        忘记密码？
                    </a><br/>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        登录
                    </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                     <a href="">注册</a>
                </Form.Item>
            </Form>
            </Box>
        );
    }
}

export default Form.create({ name: 'normal_login' })(Login);