/*
    1. 시간/분/초 입력할 수 있습니다.
    2. Start를 누르면 타이머가 1초 단위로 감소합니다.
    3. Pause를 누르면 타이머가 멈춥니다.
    4. 다시 Start를 누르면 재시작됩니다.
    5. 0초가 되면 초기화 됩니다.
    6. Reset을 누르면 초기화 됩니다.

    시간 입력되면 버튼 활성화
    start 버튼 누르면 pause 버튼으로 바뀜, 시간 감소
    pause 버튼 누르면 start 버튼으로 바뀜, 시간 멈춤
    0초가 되면 Finish 알림창 뜸, 초기화
    reset 누르면 초기화
 */

const hrs = document.querySelector('#hrs');
const min = document.querySelector('#min');
const sec = document.querySelector('#sec');

const startBtn = document.querySelector('.startBtn');
const resetBtn = document.querySelector('.resetBtn');


sec.addEventListener('input', function(e) {
    startBtn.classList.add('on');
    resetBtn.classList.add('on');
})


function timerStart() {
    startBtn.classList.add('active');

    startBtn.textContent = 'PAUSE';

    const reduceSec = setInterval(function() {
        if (sec.value > 0) {
            sec.value--;
        }

        if(sec.value === '0') {
            clearInterval(reduceSec);
        }
    }, 1000);
}

function timerReset() {
    startBtn.classList.remove('on');
    resetBtn.classList.remove('on');
    startBtn.classList.remove('active');


    startBtn.textContent = 'START';

    sec.value = '0';
}

startBtn.addEventListener('click', timerStart);
resetBtn.addEventListener('click', timerReset);