import React, { useState, useEffect } from 'react';
/*
Хук — это специальная функция, которая позволяет «подцепиться» к возможностям React.
React.PureComponent  — серебро;работает с классами ES6;оптимизирует перерисовку классов ES6;
React.memo(...) золото; работает с функциями; оптимизирует перерисовку функций;
*/
//useState -управление состояние принимает два аргумента, ссотояние и функция возращающая массив с двумя значениями состояния и функцией как этот состояние изменить.
//useEffect -представляет собой совокупность методов componentDidMount, componentDidUpdate, и componentWillUnmount.Хук эффекта даёт вам возможность выполнять побочные эффекты в функциональном компоненте-Побочными эффектами в React-компонентах могут быть: загрузка данных, оформление подписки и изменение DOM вручную.Иногда мы хотим выполнить дополнительный код после того, как React обновил DOM. Сетевые запросы, изменения DOM вручную, логирование — всё это примеры эффектов, которые не требуют сброса,классовый компонент не подходит для этих целей, так как в основном мы хотим выполнить наши эффекты после того, как React обновил DOM.Вот почему в классах React мы размещаем побочные эффекты внутрь componentDidMount и componentDidUpdate.Используя этот хук, вы говорите React сделать что-то после рендера. React запомнит функцию (то есть «эффект»), которую вы передали и вызовет её после того, как внесёт все изменения в DOM. В этом эффекте мы устанавливаем заголовок документа, но мы также можем выполнить запрос данных или вызвать какой-нибудь императивный API.Хуки используют JavaScript-замыкания, и таким образом, им не нужен специальный API для React, поскольку сам JavaScript уже имеет готовое решение для этой задачи.он будет выполняться после каждого рендера и обновления. Вместо того, чтобы воспринимать это с позиции «монтирования» и «обновления», мы советуем просто иметь в виду, что эффекты выполняются после каждого рендера. React гарантирует, что он запустит эффект только после того, как DOM уже обновился.Внутри этого эффекта мы устанавливаем заголовок документа, используя API браузера document.title
/*
useLayoutEffect - Большинству эффектов не нужно работать в синхронном режиме. Есть редкие случаи, когда им всё же нужно это делать (например, измерять раскладку), но для этого мы разработали специальный хук useLayoutEffect с точно таким же API, как и у useEffect.
*/

//useMemo - используется для мемоизации значений
//useCallback - тоже мол для оптимизации,мол это какой-то черный ящик, в который ты отдаешь функцию, с ней что-то происходит и после будет тебе счастье.
//useState - предоставляет функциональным компонентам доступ к состоянию React.объявляет «переменную состояния»?позволяет функциональному компоненту хранить внутреннее состояни
//useState - предоставляет функциональным компонентам доступ к состоянию React.объявляет «переменную состояния»?позволяет функциональному компоненту хранить внутреннее состояни.
//React.memo() - управлять ререндером.React.memo возвращает purified MemodFuncComponent. Именно его мы и будем отрисовывать в разметке JSX. Когда свойства и состояние компонента меняются, React сравнивает предыдущие и текущие свойства и состояния компонента. И только если они неидентичны, компонент-функция перерисовывается.

//useEffect 
function ExampleF() {
    const [count, setCount] = useState(0);
    useEffect(() => {
      document.title = `Вы нажали ${count} раз, useEffect`;
    });
  
    return (
      <div>
        <p>Функциональный компонент useEffect:</p>
        <p>Вы нажали {count} раз</p>
        <button onClick={() => setCount(count + 1)}>
          Нажми на меня
        </button>
      </div>
    );
  }

class Example extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }
  
    componentDidMount() {
        //Внутри этого эффекта мы устанавливаем заголовок документа, используя API браузера document.title.
      document.title = `Вы нажали ${this.state.count} раз`;
    }
    componentDidUpdate() {
      document.title = `Вы нажали ${this.state.count} раз`;
    }
  
    render() {
      return (
        <div>
          <p>Классовый компонент аналог useEffect:</p>
          <p>Вы нажали {this.state.count} раз</p>
          <button onClick={() => this.setState({ count: this.state.count + 1 })}>
            Нажми на меня
          </button>
        </div>
      );
    }
  }


//useState
function TestCFunc (props){
    console.log(props)
    // Объявление новой переменной состояния «count»
    //Вызов useState вернёт пару значений: текущее состояние и функцию, обновляющую состояние. Поэтому мы пишем:
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([{ text: 'Изучить хуки' }]);
     return (
         <div>
             <p>Функциональный компонент React.memo:</p>
             {count}
             <button onClick={()=>setCount(todos[0].text)}>Click Me</button>
         </div>
     )
}
const MemodFuncComponent = React.memo(TestCFunc);
//после стрелочной функции TestCFunc = React.memo(TestCFunc);

class TestCPure extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate')
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate')
    }
    render() {
        return (
            <div >
            <p>Чистый компонент PureComponent:</p>
            {this.state.count}
             <button onClick={()=>this.setState({count: 1})}>Click Me</button>
            </div>
        );
    }
}

class TestC extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate')
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate')
    }
    shouldComponentUpdate(nextProps, nextState) {
        //true разрешаю отрисовать компонент
        console.log(this.state.count, nextState.count, nextProps)  
        if (this.state.count === nextState.count) {
            return false
        }
        return true;
    }
    render() {
        return (
            <div >
            <p> Компонент с shouldComponentUpdate:</p>
            {this.state.count}
             <button onClick={()=>this.setState({count: 1})}>Click Me</button>
             <TestCPure />
             <MemodFuncComponent count="props" />
             <Example />
             <ExampleF />
            </div>
        );
    }
}
export default TestC;