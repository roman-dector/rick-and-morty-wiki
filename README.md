## Реализованные требования:

### **1 уровень (обязательный - необходимый минимум)**

- [x] Реализованы **Требования к функциональности**

- [x] Для хранения учетных записей пользователей, их Избранного и Истории поиска, используем **LocalStorage**

**React**

- [x] **Пишем функциональные компоненты c хуками** в приоритете над классовыми.
- [x] Есть разделение на **умные и глупые компоненты**
- [x] Есть **рендеринг списков**
- [x] Реализована хотя бы одна **форма**
- [ ] Есть применение **предохранителя**
- [x] Есть хотя бы один **кастомный хук**
- [x] Есть применение **Контекст API**
- [x] Поиск не должен триггерить много запросов к серверу (**debounce**)
- [x] Есть применение **lazy + Suspense**
- [x] Хотя бы несколько компонентов используют **PropTypes**

**Redux**

- [x] Используем **Modern Redux with Redux Toolkit**
- [x] Используем **слайсы**
- [x] Есть хотя бы одна **кастомная мидлвара** или **createListenerMiddleware**
- [x] Используется **RTK Query**
- [x] Используется **Transforming Responses**

### **2 уровень (необязательный)**

- [x] Использование **TypeScript**
- [ ] Подключен **storybook** и созданы два, три сториса с knobs, которые показывают разные состояния компонента
- [ ] Использование **Firebase** для учетных записей пользователей и их Избранного и Истории поиска
- [x] **Низная связанность клиентского кода**, использующего апи кода, работающего с внешним стором.
- [x] Настроен **CI/CD**
- [ ] Реализована **виртуализация списков**
- [x] Используются **мемоизированные селекторы** (createSelector)
- [ ] Используется **нормализованная структура стейта** (createEntityAdapter)
- [ ] ~~Проведена **оптимизация приложения**~~
- [x] **Feature Flags.** Реализовать фичу “Поделиться в телеграм”, закрытую под фича флагом
- [ ] ~~Добавить **тесты** через jest, react-testing-library или Playwright~~
- [ ] Связь UI и бизнес-логики построена не через команды, а через **события**
- [ ] **Project Console API [за этот пункт можно заработать весомое кол-во доп. баллов]**

### Дополнительно

- Приложение построено согласно архитектуре Feature Sliced Design
- В проекте использованы компоненты библиотеки MUI
