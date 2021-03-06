/*
Порождающие паттерны беспокоятся о гибком создании объектов без внесения в программу лишних зависимостей.Отвечают за удобное и безопасное создание новых объектов или даже целых семейств объектов.

Структурные паттерны показывают различные способы построения связей между объектами.Отвечают за построение удобных в поддержке иерархий классов.

Поведенческие паттерны заботятся об эффективной коммуникации между объектами.Решают задачи эффективного и безопасного взаимодействия между объектами программы.

Порождающие паттерны:
1.Фабричный метод(factory) - возможность расширения продуктов(карабль и машина).
2.Абстракций метод(abstract factory) - позволяет создавать семейства-типы связанных объектов -зависимых продуктов, не привязываясь к конкретным классам создаваемых объектов.
3.Строитель(builder)(сад, басеин) - конвеер, создает по шагово сложные обьекты, предлагает вынести конструирование объекта за пределы его собственного класса, поручив это дело отдельным объектам, называемым строителями.
4.Прототип(россия,слизывать свойства) - позволяет копировать объекты, не вдаваясь в подробности их реализации.
5.Одиночка - гарантирует, что у класса есть только один экземпляр, и предоставляет к нему глобальную точку доступа,правительство государства — хороший пример одиночки. В государстве может быть только одно официальное правительство. Вне зависимости от того, кто конкретно заседает в правительстве, оно имеет глобальную точку доступа «Правительство страны N».
==========================
Структурные:
1.адаптер(Wrapper, Обёртка, Adapter) -Это объект-переводчик, который трансформирует интерфейс или данные одного объекта в такой вид, чтобы он стал понятен другому объекту.

2.Мост(Bridge)-он разделяет один или несколько классов на две отдельные иерархии — абстракцию и реализацию, позволяя изменять их независимо друг от друга.Мост предлагает заменить наследование агрегацией или композицией - соединение цвета и кубик. 
абстракция (или интерфейс) — это образный слой управления чем-либо. Он не делает работу самостоятельно, а делегирует её слою реализации (иногда называемому платформой).
Если говорить о реальных программах, то абстракцией может выступать графический интерфейс программы (GUI), а реализацией — низкоуровневый код операционной системы (API), к которому графический интерфейс обращается по реакции на действия пользователя.
Вы можете развивать программу в двух разных направлениях:
иметь несколько видов GUI (например, для простых пользователей и администраторов);
поддерживать много видов API (например, работать под Windows, Linux и macOS).
Такая программа может выглядеть как один большой клубок кода, в котором намешаны условные операторы слоёв GUI и API.
Абстракцию: слой графического интерфейса приложения.
Реализацию: слой взаимодействия с операционной системой.

3.Компоновщик(Дерево, Composite) - позволяет сгруппировать множество объектов в древовидную структуру, а затем работать с ней так, как будто это единичный объект.Продукт просто вернёт свою цену. Коробка спросит цену каждого предмета внутри себя и вернёт сумму результатов. Если одним из внутренних предметов окажется коробка поменьше, она тоже будет перебирать своё содержимое, и так далее, пока не будут посчитаны все составные части.

4.Декоратор(Wrapper, Обёртка, Decorator)-позволяет динамически добавлять объектам новую функциональность, оборачивая их в полезные «обёртки».
Наследование — это первое, что приходит в голову многим программистам, когда нужно расширить какое-то существующее поведение. Но механизм наследования имеет несколько досадных проблем.
Он статичен. Вы не можете изменить поведение существующего объекта. Для этого вам надо создать новый объект, выбрав другой подкласс.
Он не разрешает наследовать поведение нескольких классов одновременно. Из-за этого вам приходится создавать множество подклассов-комбинаций для получения совмещённого поведения.
Одним из способов обойти эти проблемы является замена наследования агрегацией либо композицией . Это когда один объект содержит ссылку на другой и делегирует ему работу, вместо того чтобы самому наследовать его поведение. Как раз на этом принципе построен паттерн Декоратор.
Декоратор имеет альтернативное название — обёртка. Оно более точно описывает суть паттерна: вы помещаете целевой объект в другой объект-обёртку, который запускает базовое поведение объекта, а затем добавляет к результату что-то своё.
Оба объекта имеют общий интерфейс, поэтому для пользователя нет никакой разницы, с каким объектом работать — чистым или обёрнутым. Вы можете использовать несколько разных обёрток одновременно — результат будет иметь объединённое поведение всех обёрток сразу.
В примере с оповещениями мы оставим в базовом классе простую отправку по электронной почте, а расширенные способы отправки сделаем декораторами.

Фасад(Facade)-предоставляет простой интерфейс к сложной системе классов, библиотеке или фреймворку.это простой интерфейс для работы со сложной подсистемой, содержащей множество классов. encode(filename, format)

Легковес(Приспособленец, Кэш, Flyweight)-позволяет вместить бóльшее количество объектов в отведённую оперативную память. Легковес экономит память, разделяя общее состояние объектов между собой, вместо хранения одинаковых данных в каждом объекте.
Остальное состояние объектов — координаты, вектор движения и скорость — отличаются для всех частиц. Таким образом, эти поля можно рассматривать как контекст, в котором частица используется. А цвет и спрайт — это данные, не изменяющиеся во времени.
Неизменяемые данные объекта принято называть «внутренним состоянием». Все остальные данные — это «внешнее состояние».
Но куда переедет внешнее состояние? Ведь кто-то должен его хранить. Чаще всего, его перемещают в контейнер, который управлял объектами до применения паттерна.

Заместитель(Proxy) -позволяет подставлять вместо реальных объектов специальные объекты-заменители. Эти объекты перехватывают вызовы к оригинальному объекту, позволяя сделать что-то до или после передачи вызова оригиналу.
Заместитель «притворяется» базой данных, ускоряя работу за счёт ленивой инициализации и кеширования повторяющихся запросов.
===============================

Поведенческие:
Цепочка обязанностей(CoR, Chain of Command, Chain of Responsibility)-
 позволяет передавать запросы последовательно по цепочке обработчиков. Каждый последующий обработчик решает, может ли он обработать запрос сам и стоит ли передавать запрос дальше по цепи.
Команда(Действие, Транзакция, Action, Command)-превращает запросы в объекты, позволяя передавать их как аргументы при вызове методов, ставить запросы в очередь, логировать их, а также поддерживать отмену операций.
Итератор(Iterator)-даёт возможность последовательно обходить элементы составных объектов, не раскрывая их внутреннего представления.
Коллекции — самая распространённая структура данных, которую вы можете встретить в программировании. Это набор объектов, собранный в одну кучу по каким-то критериям.Итератор состоит в том, чтобы вынести поведение обхода коллекции из самой коллекции в отдельный класс.
Посредник(Intermediary, Controller, Mediator)-позволяет уменьшить связанность множества классов между собой, благодаря перемещению этих связей в один класс-посредник.Паттерн Посредник заставляет объекты общаться не напрямую друг с другом, а через отдельный объект-посредник, который знает, кому нужно перенаправить тот или иной запрос. Благодаря этому, компоненты системы будут зависеть только от посредника, а не от десятков других компонентов.

Снимок(Хранитель, Memento)-позволяет сохранять и восстанавливать прошлые состояния объектов, не раскрывая подробностей их реализации.предлагает держать копию состояния в специальном объекте-снимке с ограниченным интерфейсом, позволяющим, например, узнать дату изготовления или название снимка. Но, с другой стороны, снимок должен быть открыт для своего создателя, позволяя прочесть и восстановить его внутреннее состояние.

Наблюдатель(Издатель-Подписчик, Слушатель, Observer) -создаёт механизм подписки, позволяющий одним объектам следить и реагировать на события, происходящие в других объектах.

Состояние(State)-позволяет объектам менять поведение в зависимости от своего состояния. Извне создаётся впечатление, что изменился класс объекта.

Стратегия(Strategy)-определяет семейство схожих алгоритмов и помещает каждый из них в собственный класс, после чего алгоритмы можно взаимозаменять прямо во время исполнения программы.
Вам нужно добраться до аэропорта. Можно доехать на автобусе, такси или велосипеде. Здесь вид транспорта является стратегией. Вы выбираете конкретную стратегию в зависимости от контекста — наличия денег или времени до отлёта.

Шаблонный метод(Template Method)-определяет скелет алгоритма, перекладывая ответственность за некоторые его шаги на подклассы. Паттерн позволяет подклассам переопределять шаги алгоритма, не меняя его общей структуры.

Посетитель(Visitor)-позволяет добавлять в программу новые операции, не изменяя классы объектов, над которыми эти операции могут выполняться.




класс-это некая абстрактная часть обьекста-экземпляра-конкретного чего то уже описанного ранее
Общий алгоритм работы с объектно-ориентированным подходом в программировании:
Создали класс
Создали экземпляр класса (объект)
Обращаемся к свойствам и методам экземпляра класса.
 */



//Порождающие паттерны:


class Creator {
    constructor(name){
     this.name=name;
   }
}
class ConcreteCreator1 extends Creator{
     factoryMethod() {
        return new ConcreteProduct1();
    }
}


let c = new Creator ('Car');
let s = new Creator ('Submarin');
console.log(c.name)
console.log(s.nameAdmin =0)
console.log(s.nameAdmin)