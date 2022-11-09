import { Button, Col, Row, Typography } from 'antd';
import React, { useEffect } from 'react'
import { loginAsync, getUserAsync, logout} from '../../store/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import './styles.sass'

const { Title } = Typography;

export function ProfilePage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth.user);
    return (
        <Row className='tc-page tc-profile-page' justify='center'>
            <Col span={7}>
                <Row justify='center'>
                    <Col flex='auto'>
                        <Title level={3}>Добро пожаловать, {user.username}</Title>
                    </Col>
                </Row>
                <Row justify='center'>
                    <Col flex='auto'>
                        <Button onClick={() => { 
                            dispatch(logout());
                            navigate('/');
                        }}>
                            Выход
                        </Button>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}