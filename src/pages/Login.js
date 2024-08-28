import React from "react";
import './Login.css';
import MainIcon from '../components/MainIcon';
import { useNavigate } from "react-router-dom";


function Login(){
    const navigate = useNavigate(); // useNavigate 훅 사용

    const handleMembershipClick = () => {
        navigate('/make-membership'); // MakingMembership 페이지로 이동
    };

    return (
        <div className="LoginPageStart">
            <div className="loginBg">
                <div className="logo">
                    <MainIcon />
                </div>
                <div className="loginWindow">
                    <form action="">
                        <p>로그인</p>
                        <div className="loginId">
                            <input type="text" placeholder="아이디" />
                        </div>
                        <div className="loginPassword">
                            <input type="password" placeholder="비밀번호" />
                        </div>
                        <div className="loginBtn">
                            <button>로그인하기</button>
                        </div>
                    </form>
                    <div className="membership">
                        <p>아이디가 없으신가요?</p>
                        <button onClick={handleMembershipClick}>회원가입</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;