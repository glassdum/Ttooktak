import React, { useState } from 'react';
import './MakingMembership.css';
import MainIcon from '../components/MainIcon';
// import axios from 'axios';

function Membership(){
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 100 }, (_, i) => currentYear - i);
    const months = Array.from({ length: 12 }, (_, i) => i + 1);
    const days = Array.from({ length: 31 }, (_, i) => i + 1);
  
    const [selectedYear, setSelectedYear] = useState('');
    const [selectedMonth, setSelectedMonth] = useState('');
    const [selectedDay, setSelectedDay] = useState('');
  
    const handleYearChange = (e) => {
      setSelectedYear(e.target.value);
    };
  
    const handleMonthChange = (e) => {
      setSelectedMonth(e.target.value);
    };
  
    const handleDayChange = (e) => {
      setSelectedDay(e.target.value);
    };
  
    // const handleSubmit = (e) => {
    //   e.preventDefault(); // 폼 제출 시 페이지 새로고침 방지
  
    //   // 서버로 전송할 데이터 객체 생성
    //   const data = {
    //     year: selectedYear,
    //     month: selectedMonth,
    //     day: selectedDay,
    //   };
  
    //   // axios를 이용해 폼 데이터를 전송
    //   axios.post('https://your-api-endpoint.com/signup', data)
    //     .then((response) => {
    //       // 서버로부터의 성공 응답 처리
    //       console.log('서버 응답:', response.data);
    //       alert('회원가입이 완료되었습니다.');
    //     })
    //     .catch((error) => {
    //       // 서버로부터의 오류 응답 처리
    //       console.error('서버 응답 중 오류 발생:', error);
    //       alert('회원가입 중 오류가 발생했습니다.');
    //     });
    // };
  
    return (
        <div className="membershipStart">
            <div className="membershipBg">
                <div className="logo">
                    <MainIcon />
                </div>
                <div className="membershipWindow">
                    <form>
                        <p>회원가입</p>
                        <input type="text" placeholder='이름' />
                        <input type="text" placeholder='전화번호'/>
                        <div className="birth">
                            <select value={selectedYear} onChange={handleYearChange} required>
                                <option value="">연도 선택</option>
                                {years.map((year) => (
                                    <option key={year} value={year}>
                                    {year}
                                    </option>
                                ))}
                            </select>
                            <select value={selectedMonth} onChange={handleMonthChange} required>
                                <option value="">월 선택</option>
                                {months.map((month) => (
                                    <option key={month} value={month}>
                                    {month}
                                    </option>
                                ))}
                            </select>
                            <select value={selectedDay} onChange={handleDayChange} required>
                                <option value="">일 선택</option>
                                {days.map((day) => (
                                    <option key={day} value={day}>
                                    {day}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <input type="text" />
                        <button>다음</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Membership