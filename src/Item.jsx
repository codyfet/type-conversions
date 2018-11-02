import React from 'react';
import {FormGroup, ControlLabel, FormControl, HelpBlock, Popover, OverlayTrigger} from 'react-bootstrap';
var CryptoJS = require("crypto-js");

var SECRET = 'U2FsdGVkX1+/TErAOKy1snUMEancRHzz5rQ9vQSV750=';

/**
 * Компонент для отрисовки одной карточки.
 */
export class Item extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            result: '',
            status: null,
            showDetails: false
        }
    }

    updateValidationState = () => {
        const {question} = this.props.quizItem;
        const {result} = this.state;
        let status = null;
        
        try {
            // Если юзер ввёл в поле ответ то же значение, что и в вопросе.
            if (question == result) {
                status = 'error';
            // Специальная проверка на NaN (т.к. NaN никогда строго не равен NaN по спецификации).
            } else if (Number.isNaN(eval(question)) && Number.isNaN(eval(result))) {          
                status = 'success';
            // Основная проверка введённого значения.
            } else if (eval(question) === eval(result)) {
                status = 'success';
            } else {
                status = 'error';
            }
        } catch (error) {
            if (error.name === "ReferenceError" || error.name === "SyntaxError") {
                status = 'error';
            }
        }

        this.setState({
            status
        })
    }

    handleResultKeyup = (event) => {
        if (event.keyCode === 13) {
            this.handleResultBlur(event);
        }
    }

    handleResultChange = (event) => {
        this.setState({
            result: event.target.value
        })
    }
    
    handleResultBlur = (event) => {
        const {secret} = this.props.quizItem;
        const {value} = event.target;
              
        const bytes = CryptoJS.AES.decrypt(SECRET, value);
        const decryptedData = bytes.toString(CryptoJS.enc.Utf8);

        if (!!secret && decryptedData === 'success') {
            this.props.activateSecret();
        } else if (value !== '') {
            this.updateValidationState();
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }

    handleDetailsClick = () => {
        this.setState({
            showDetails: !this.state.showDetails
        })
    }
    
    renderValidationResultText () {
        const {status} = this.state;

        if (status === 'success') {
            return 'Верно!';
        } else if (status === 'error') {
            return 'Неверно!';
        } else {
            return '';
        }
    }

    renderTypeText () {
        const {type} = this.props.quizItem;
       
        if (!type) {
            return;
        }

        let popover;
        if (type === "Логическое преобразование") {
            popover = (
                <Popover id="popover-positioned-bottom">
                    Преобразование к <code>true/false</code> происходит в логическом контексте, таком как <code>if&nbsp;(value)</code>, и при применении логических операторов.
                    <br />
                    <br />
                    Логические операторы производят булевое преобразование под капотом, но всегда возвращают оригинальное значение операндов, даже если они не являются булевыми.
                    <br />
                    <br />
                    Для явного булева преобразования используется функция <code>Boolean()</code>
                </Popover>
            );                
        } else if (type === "Численное преобразование") {
            popover = (
                <Popover id="popover-positioned-bottom">
                    Численное преобразование происходит в математических функциях и выражениях, а также при сравнении данных различных типов (кроме сравнений <code>===</code>, <code>!==</code>).
                    <br />
                    <br />
                    Оператор нестрогого равенства <code>==</code> (включая <code>!=</code>) не вызывает численное преобразование, если оба операнда являются строками.
                    <br />
                    <br />
                    При преобразовании строки в число, движок сначала отсекает все пробельные символы, символы <code>\n</code>, и <code>\t</code> в начале и в конце строки, и возвращает <code>NaN</code> если обрезанная строка не представляет из себя корректное число. Если строка окажется пустой, то результатом будет <code>0</code>.
                    <br />
                    <br />
                    <code>null</code> и <code>undefined</code> обрабатываются по разному: <code>null</code> станет <code>0</code>, в то время как <code>undefined</code> станет <code>NaN</code>.
                    <br />
                    <br />
                    Для явного преобразования к числу используется функция <code>Number()</code>.
                </Popover>
            );       
        } else if (type === "Строковое преобразование") {
            popover = (
                <Popover id="popover-positioned-bottom">
                    Строковое преобразование происходит, когда требуется представление чего-либо в виде строки.
                    <br />
                    <br />
                    Пример явного преобразования: <code>String(123)</code>
                    <br />
                    Пример неявного преобразования: <code>123 + ''</code>
                </Popover>
            );       
        } else if (type === "Логическое преобразование (объекты)") {
            popover = (
                <Popover id="popover-positioned-bottom">
                    Логическое преобразование происходит при if (obj) и других логических операциях. 
                    <br />
                    <br />
                    Любое не примитивное значение всегда приводится к <code>true</code>, включая пустые объекты и массивы.
                </Popover>
            );  
        } else if (type === "Численное преобразование (объекты)") {
            popover = (
                <Popover id="popover-positioned-bottom">
                    Численное преобразование объектов применяется при арифметических операциях и сравнении с примитивом.
                    <br />
                    <br />        
                    Объекты приводятся к примитивам посредством вызова внутреннего метода <code>[[ToPrimitive]]</code>, который отвечает как за численное, так и за строковое преобразование.
                    <br />
                    <br />
                    Под капотом <code>ToPrimitive</code> при численном преобразовании вызывается сначала метод <code>valueOf()</code>, а уже затем (если <code>valueOf()</code> не вернул примитив) <code>toString()</code>. 
                    <br />
                    <br />
                    Что возвращает <code>valueOf()</code> для разных типов можно посмотреть здесь <a href="https://msdn.microsoft.com/ru-ru/library/ftx8swz5(v=vs.94).aspx">ссылка на msdn</a>. <br />Что возвращает <code>toString()</code> для разных типов можно посмотреть здесь <a href="https://www.w3schools.com/js/js_type_conversion.asp">ссылка на w3schools</a>.
                </Popover>
            );  
        } else if (type === "Строковое преобразование (объекты)") { 
            popover = (
                <Popover id="popover-positioned-bottom">
                    Строковое преобразование происходит, когда требуется представление объекта в виде строки.
                    <br />
                    <br />        
                    Объекты приводятся к примитивам посредством вызова внутреннего метода <code>[[ToPrimitive]]</code>, который отвечает как за численное, так и за строковое преобразование.
                    <br />
                    <br />
                    Под капотом <code>ToPrimitive</code> при строковом преобразовании вызывается сначала метод <code>toString()</code>, а уже затем (если <code>toString()</code> не вернул примитив) <code>toValueOf()</code>. 
                    <br />
                    <br />
                    Что возвращает <code>valueOf()</code> для разных типов можно посмотреть здесь <a href="https://msdn.microsoft.com/ru-ru/library/ftx8swz5(v=vs.94).aspx">ссылка на msdn</a>. <br />Что возвращает <code>toString()</code> для разных типов можно посмотреть здесь <a href="https://www.w3schools.com/js/js_type_conversion.asp">ссылка на w3schools</a>.                
                </Popover>
            );  
        }

        /*
            Cтандартным строковым представлением пользовательского объекта является строка "[object Object]".
            Если в объекте присутствует метод toString, который возвращает примитив, то он используется для преобразования.
            Метод toString не обязан возвращать именно строку. Поэтому мы и называем его здесь «строковое преобразование», а не «преобразование к строке».
        */

        return (
            <OverlayTrigger trigger="click" placement="bottom" rootClose overlay={popover}>
                <a className='type'>{type}. </a>
            </OverlayTrigger>
        ); 
    }

    renderRuleText () {
        const {rule} = this.props.quizItem;

        if (!rule) {
            return;
        }
        return rule;
    }

    render() {
        const {rule, question} = this.props.quizItem;
        const {status, result, showDetails} = this.state;

        return (
            <form className='quiz-item' autoComplete="off" onSubmit={this.handleSubmit}>
                <FormGroup
                    controlId="formBasicText"
                    validationState={status}
                >
                    <p><code>{question}</code></p>
                    <FormControl
                        type="text"
                        className="result"
                        value={result}
                        placeholder="Результатом будет являться"
                        onKeyUp={this.handleResultKeyup}
                        onChange={this.handleResultChange}
                        onBlur={this.handleResultBlur}
                    />
                    <FormControl.Feedback />
                    <HelpBlock>{this.renderValidationResultText()}</HelpBlock>
                    {
                        !!status && !!rule ? 
                            <a className="details" onClick={this.handleDetailsClick}>
                                {showDetails ? 'скрыть' : 'подробнее'}
                            </a> : 
                            null
                    }
                    {
                        !!showDetails && !!rule ? 
                            <span>{this.renderTypeText()}{this.renderRuleText()}</span> : 
                            null
                    }
                </FormGroup>
            </form>
        );
    }
}