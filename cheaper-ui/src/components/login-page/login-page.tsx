import { Col, Row, Typography } from 'antd';
import React, { useEffect } from 'react'
import { loginAsync, getUserAsync} from '../../store/actions/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { LoginForm } from './login-form';
import './styles.sass'
import { AppState } from '../../store/interfaces';


const { Title } = Typography;

export function LoginPage() {
    const navigate = useNavigate();
    const user = useSelector((state: AppState) => state.auth.user);
    useEffect(() => {
        if(user) navigate('/');
    }, [user])
    return (
        <Row className='tc-page tc-login-page' justify='center'>
            <Col span={7}>
                <Row justify='center'>
                    <Col span={8}>
                        <Title level={2}>Вход</Title>
                    </Col>
                </Row>
                <Row justify='center'>
                    <Col flex='auto'>
                        <LoginForm/>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}