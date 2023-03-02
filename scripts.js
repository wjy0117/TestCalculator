class Calculator {
    constructor(displayElement) {
        this.displayElement = displayElement //input요소
        this.displayContent = '' //입력할 데이터
        this.clear() //데이터 초기화
    }
    appendNumber(number) {//입력된 숫자데이터 추가
        this.displayContent += number
    }
    appendOperator(operator) {//입력된 연산자데이터 추가
        this.displayContent += operator
    }

    updateDisplay() { //input요소에 데이터 입력
        this.displayElement.value = this.displayContent
    }

    clear() { //입력된 input데이터와 입력할 데이터 모두 초기화
        this.displayContent = ''
        this.displayElement.value = 0
    }

    compute() { //문자열로 된 코드 실행하여 데이터 저장
        this.displayContent = eval(this.displayContent 
            .replace('\u00D7', '*') //"\u00D7" 는 ×이며, 연산을 위해 *로 표시
            .replace('\u00F7', '/') //"\u00F7"는 ÷이며, 연산을 위해 /로 표시
        )
    }

}

const buttons = document.querySelectorAll('button')
//코드 내 모든 button요소 가져오기
const displayElement = document.querySelector('input')
//코드 내 첫번째 input요소 가져오기
const calculator = new Calculator(displayElement)
//Calculator 클래스 생성

buttons.forEach(button =>{
    //클릭한 버튼 종류에 따라 다른 출력
    button.addEventListener('click', ()=>{
        switch(button.dataset.type){
            case 'operator'://input에 연산자 추가하고 업데이트(입력)
                calculator.appendOperator(button.innerText)
                calculator.updateDisplay()
                break
            case 'ac':
                calculator.clear()//input 초기화
                break
            case 'equals':
                calculator.compute()//연산
                calculator.updateDisplay()//업데이트(입력)
                break
            default://input에 숫자 추가하고 업데이트(입력)
                calculator.appendNumber(button.innerText)
                calculator.updateDisplay()
                break
        }
    })
})