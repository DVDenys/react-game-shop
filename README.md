# 🕹️ Game Shop Application

## 🔗 Links
- `Project` https://dvdenys.github.io/react-game-shop/
- `Repository` https://github.com/dvdenys/react-game-shop

---

## 📜 Available Scripts and Commands

```bash
# Install
npm i                    # install dependencies
```

```bash
# General
npm run start            # run app in the development mode
npm run storybook        # run storybook
npm run deploy           # deploy app on Github Pages
```

```bash
# Deploy (part of "deploy" script)
npm run build            # builds the app for production
npm run build-storybook  # storybook build
npm run build-gh-pages   # deploy on Github Pages
```

```bash
# Not used
npm run eject            # remove the single build dependency
npm run deploy-storybook # storybook deploy
```

---

## 👀 Рассмотренные темы

### React.js
- Разворачивание приложения с `create-react-app`
- Мемоизация (хук `useCallback`)
- Создание собственных хуков
- Фрагменты
- Библиотека `prop-types` для валидации props

### React Router
- Базовый роутинг
- URL Parameters
- Query Parameters
- Хуки `useLocation` и `useHistory`

### Redux
- Базовая структура react-redux-приложения
- Хуки `useDispatch`, `useSelector`
- Redux Toolkit
- Отслеживание состояния store с `redux-devtools-extension`

### Общее
- Задание Alias в React-приложении (библиотека `react-app-rewire-alias`)
- Деплой приложения на GitHub Pages (библиотека `gh-pages`)
- Создание Ui-Kit из визуальных компонентов и публикация в `@storybook`
- `Visual Studio Code`. Сниппеты и плагины
- Страница `оформить заказ` склонение слова *товар* в зависимости от количевства товаров в корзине

### JavaScript
- Методы работы с массивами: `map`, `filter`, `forEach`
- ES6-модули (import и export)
- Деструктуризация массивов и объектов
- Тернарные операторы
- Работа с Local Storage (В идеале то что я сохранял локально должно обрабатываться на беке через запросы)

### Вёрстка
- CSS Flexbox
- Стилизация скроллбара

---

## 🤨 Что можно доделать
- Добавить пагинацию (Для этого нужно больше элементов на главной странице)
- Доделать адаптив
- Масшабировать приложение (нужно поискать апи с играми)
- Деплой Storybook
