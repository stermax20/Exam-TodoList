import React, { useRef, useState } from 'react';
import './TodoEditor.css';

function TodoEditor({ onCreate }) {
    const [content, setContent] = useState('');
    const [date, setDate] = useState('');
    const inputRef = useRef();

    const onChangeContent = (e) => {
        setContent(e.target.value);
    };

    const onChangeDate = (e) => {
        setDate(e.target.value);
    };

    const onSubmit = () => {
        if (!content && !date) {
            inputRef.current.focus();
            alert('날짜 선택과 과목을 입력해주세요.');
            return;
        } else if (content && !date) {
            inputRef.current.focus();
            alert('날짜를 선택해주세요.');
            return;
        } else if (!content && date) {
            inputRef.current.focus();
            alert('과목을 입력해주세요.');
            return;
        }
        onCreate(content, date);
        setContent('');
        setDate('');
    };

    const onKeyDown = (e) => {
        if (e.keyCode === 13) {
            onSubmit();
        }
    };

    return (
        <div className="TodoEditor">
            <h4>시험 과목 생성</h4>
            <div className="editor_wrapper">
                <div className="checkbox-group">
                    <label>
                        <input
                            type="checkbox"
                            value="2024-10-16"
                            checked={date === '2024-10-16'}
                            onChange={onChangeDate}
                        />
                        10월 16일
                    </label>
                    <br />
                    <label>
                        <input
                            type="checkbox"
                            value="2024-10-17"
                            checked={date === '2024-10-17'}
                            onChange={onChangeDate}
                        />
                        10월 17일
                    </label>
                </div>
                <input
                    ref={inputRef}
                    type="text"
                    value={content}
                    onChange={onChangeContent}
                    onKeyDown={onKeyDown}
                    placeholder="과목 추가란"
                />
                <button onClick={onSubmit}>추가</button>
            </div>
        </div>
    );
}

export default TodoEditor;
