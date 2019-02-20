

import React from "react";
import {Item} from './Item';
import {primitives, objects, typeofItems} from './Questions';

/**
 * Родительский компонент приложения.
 */
export class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: primitives,
            secret: false
        } 
    }

    activateSecret = () => {
        this.setState({
            secret: true
        });
    }

    handlePrimitivesLink = () => {
        this.setState({
            data: primitives
        });
    }

    handleObjectsLink = () => {
        this.setState({
            data: objects
        });
    }

    handleTypeofLink = () => {
        this.setState({
            data: typeofItems
        });
    }

    handleRemoveConfetti = () => {
        document.getElementById('confetti').remove();
    }

    render () {
        const {data, secret} = this.state;

        if (secret) {
            var event = document.createEvent('Event');
            event.initEvent('confetti', true, true);
            document.dispatchEvent(event);
            document.getElementById("root").classList.add('special');
        }

        return (
            <React.Fragment>
                <div className='header'>
                {<div>{!!secret && <a onClick={this.handleRemoveConfetti}>убрать конфетти</a>}</div>}
                    <div>
                        <a onClick={this.handlePrimitivesLink}>примитивы</a>
                        <a onClick={this.handleObjectsLink}>объекты</a>
                        <a onClick={this.handleTypeofLink}>typeof</a>
                    </div>
                </div>
                <div className='main-panel'>
                    {data.map(
                        (questionItem) => <Item key={questionItem.question} quizItem={questionItem} activateSecret={this.activateSecret} />
                    )}
                </div>
                <div className='footer'>
                    <ul className='links'>
                        <li className='li-label'>Ссылки</li>
                        <li><a href='https://medium.com/@sergeybulavyk/преобразование-типов-в-javascript-35a15ddfc333'>https://medium.com/@sergeybulavyk/преобразование-типов-в-javascript-35a15ddfc333</a></li>
                        <li><a href='https://dorey.github.io/JavaScript-Equality-Table/'>https://dorey.github.io/JavaScript-Equality-Table/</a></li>
                        <li><a href='https://learn.javascript.ru/types-conversion'>https://learn.javascript.ru/types-conversion</a></li>
                        <li><a href='https://learn.javascript.ru/object-conversion'>https://learn.javascript.ru/object-conversion</a></li>
                        <li><a href='https://www.w3schools.com/js/js_type_conversion.asp'>https://www.w3schools.com/js/js_type_conversion.asp</a></li>
                    </ul>
                </div>
            </React.Fragment>
        );
    }
}