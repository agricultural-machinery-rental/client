# Архитектура приложения по методологии Feature-Sliced Design

[![Feature-Sliced Design][shields-fsd-white]](https://feature-sliced.design/)

[shields-fsd-white]: https://img.shields.io/badge/Feature--Sliced-Design?style=for-the-badge&labelColor=262224&color=F2F2F2&logoWidth=10&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAaCAYAAAC3g3x9AAAACXBIWXMAAALFAAACxQGJ1n/vAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA/SURBVHgB7dKxCgAgCIThs/d/51JoNQIdDrxvqMXlR4FmFs92KDIX/wI7JSdDN+eHtkxIycnQvMNW8hN/crsDc5QgGX9NvT0AAAAASUVORK5CYII=

### Терминология:

Архитектура - это набор модулей / "кирпичиков" / компонентов системы, описание того, как эти модули должны разрабатываться и описание связей меджу этими модулями. А также создание интерфейсов, которые четко описывают для чего конкретный модуль предназначен.

### Принципы идеальной архитектуры, которых мы придерживаемся:

- <span style="color:#C37D09">Сильная связность</span> (модули направлены на решение одной четкой задачи), <span style="color:#C37D09">слабая зацепленность</span> (модули как можно менее зависимы от других модулей).
- Любой <span style="color:#C37D09">модуль должно быть легко удалить</span> без нанесения вреда системе.
- Модули могут <span style="color:#C37D09">взаимодействовать только с модулями из слоёв ниже</span>.

### Public API

В модуле создается файл index.ts, который экспортирует наружу всё, что разрешено использовать.

#### Правила Public API:

- другие части приложения могут использовать только те сущности модуля, которые представлены в публичном интерфейсе <br>
  Нельзя: <span style="background-color:#DB606080">import { Button } from "@/shared/UI/Button/UI/Button"</span><br>
  Можно: <span style="background-color:#7BA65380">import { Button } from "@/shared/UI/Button"</span>
- изменение внутренней структуры не должно приводить к изменению Public API, т.е. внешние "пользователи" не должны страдать от перемещения или переименования компонента внутри модуля <br>
- именно public API решает проблему коллизии имён <br>
  Плохо: <span style="background-color:#DB606080">export { Form } from "@/features/auth-form"</span><br>
  Хорошо: <span style="background-color:#7BA65380">export { Form as AuthForm } from "@/features/auth-form"</span>
- коллизия имен должна решаться на уровне публичного интерфейса, а не реализации <br>
  Плохо: <span style="background-color:#DB606080">export { AuthForm } from "./ui"</span><br>
  Хорошо: <span style="background-color:#7BA65380">export { Form as PostForm } from "./ui"</span><br>
  Плохо: <span style="background-color:#DB606080">export { authFormActions, authFormReducer } from "model"</span><br>
  Хорошо: <span style="background-color:#7BA65380"><br>(features/auth-form/model.ts) export { actions, reducer }<br>(features/auth-form/index.ts) export \* as authFormModel from "./model"</span>

### Используемые слои (High-level-abstraction):

- `shared` - общеиспользуемая недоменная логика (UI-kit, хэлперы не привязанные к бизнес-логике, конфигурация; руководствоваться принципом: shared можно переместить из одного проекта в совершенно другой)
- `entities` - конкретные домены описывающие части предметной области, т.е. "бизнес-сущности" (примеры: товар, заказ, корзина, пользователь, комментарий, отзыв, статья)
- `features` - обрабатываемый юзкейс (на события пользователя) (примеры: подписка на пользователя, поставить лайк)
- `widgets` - самостоятельные и полноценные блоки страницы
- `pages` - самостоятельные экраны приложения
- `app` - логика инициализации приложения

<img src="img/fsd/layers.png" height="150" >

Чем правее слой, тем больше он привязан к предметной области и тем больше в нём бизнес-логики. Чем левее слой, тем более он абстрактный, переиспользуемый и не самостоятельный.

### Сегменты (Middle-level-abstraction):

- `UI` - компоненты модуля
- `model` - бизнес-логика (взаимодействие со стейтом - selectors, slices, actions, context)
- `lib` - вспомогательные функции, которые могут использоваться внутри модуля, хуки
- `config` - конфигурация модуля
- `api` - запросы на сервер
- `consts` - константы

Сегменты могут быть как файлами, так и директориями.

### Подсказки

#### Как выбрать слой?

<img src="img/fsd/questions.png" height="300" >

#### Когда выносить в shared?

- если используется минимум в 2 местах (до этого должно быть локально)
- содержит нетривиальную логику (иначе - может быть легко скопипасчено локально)
- низкая вероятность изменений (если фича обновляется очень часто, то и этот модуль будет изменяться также часто - по итогу модуль не будет стабильным)

Плюсы и минусы держать в shared или распологать всё необходимое рядом с местом использования расписаны [здесь](https://github.com/feature-sliced/documentation/discussions/14#discussion-3246295)

#### Feature или entity?

> Если бизнес говорит пользователю "Хей, смотри, у нас есть стена" - это не фича. Если у нас что-то "есть", то это что-то - entity.<br>
> Если бизнес говорит "смотри, ты можешь писать посты на стене", написать пост на стене - это фича. Действие, которое может выполнить пользователь, и есть фича.<br>
> Но в то же время переход на какую-то страницу - это не фича. Действия пользователя должны привести к изменеию в БД (или любого другого хранилища).<br>
> https://github.com/feature-sliced/documentation/discussions/23#discussioncomment-451017

#### Пример

<img src="img/fsd/example.jpg" height="400" >

### Источники

- https://feature-sliced.design
- https://github.com/feature-sliced/documentation
