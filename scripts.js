class Calculator {
    constructor(displayElement) {
        this.displayElement = displayElement
        this.displayContent = ''
        this.clear()
    }

//appendNumber 메서드(작업) 추가.
    appendNumber(number) {

//+= 는 복합대입연산자인데, this.displayContent = this.displayContent + number와 같은 의미를 가진다
        this.displayContent += number
    }

//this.displayContent = this.displayContent + operator 의 의미다.
    appendOperator(operator) {
        this.displayContent += operator
    }

//updateDisplay 메서드(작업)추가.
//this.displayElemnet의 값(value)에 this.displayContent를 담는다
    updateDisplay() {
        this.displayElement.value = this.displayContent
    }

    clear() {
        this.displayContent = ''
        this.displayElement.value = 0
    }

    compute() {
        this.displayContent = eval(this.displayContent
            //"\u00D7" 는 ×, "\u00F7"는 ÷를 의미한다.
            .replace('\u00D7', '*')
            .replace('\u00F7', '/')
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
            case 'operator':
                console.log('operator')
                break
            case 'ac':
                //console.log('ac')
                calculator.clear()
                break
            case 'equals':
                console.log('equals')
                break
            default:
                console.log('number')
                break
        }
    })
})