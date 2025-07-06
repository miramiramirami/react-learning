export const ways = [
  {
    title: 'Основы JavaScript для React',
    description: 'Деструктуризация, spread/rest операторы. Работа с map, filter, reduce. Promise, async/await (для запросов к API).',
  },
  {
    title: 'Базовый React',
    description: 'Компоненты (функциональные и классовые). JSX, пропсы (props), состояние (useState). Жизненный цикл / хуки (useEffect).'
  },
  {
    title: 'Работа с формами',
    description: 'Контролируемые инпуты (onChange, value). Валидация (через formik или кастомные хуки).'
  },
  {
    title: 'Роутинг',
    description: 'React Router (BrowserRouter, Routes, Route). Динамические маршруты (/user/:id).'
  },
  {
    title: 'Управление состоянием',
    description: 'Context API + useReducer. Библиотеки: Redux (Toolkit), MobX, Zustand. Выбор подхода для разных проектов.'
  },
  {
    title: 'Оптимизация',
    description: 'React.memo, useCallback, useMemo. Ленивая загрузка (React.lazy + Suspense). Виртуализация списков (react-window).'
  },
  {
    title: 'Работа с API',
    description: 'Fetch/Axios. Библиотеки для запросов: React Query, SWR. Обработка ошибок и загрузки данных.'
  },
  {
    title: 'Кастомные хуки',
    description: 'Создание переиспользуемых хуков. useLocalStorage, useFetch, useDebounce и другие паттерны.'
  },
  {
    title: 'Тестирование',
    description: 'Jest + React Testing Library. Тестирование компонентов, хуков и интеграционных сценариев.'
  },
  {
    title: 'UI-библиотеки',
    description: 'Работа с Material UI, Ant Design, Chakra UI. Кастомизация тем и компонентов.'
  },
  {
    title: 'TypeScript в React',
    description: 'Типизация пропсов, хуков, Context API. Generic-компоненты.'
  },
  {
    title: 'Next.js/Nuxt.js',
    description: 'SSR/SSG, роутинг, API routes. Оптимизация производительности.'
  },
  {
    title: 'Продвинутые паттерны',
    description: 'Compound Components, Render Props, Higher-Order Components. State Machines (XState).'
  },
  {
    title: 'Деплой и CI/CD',
    description: 'Настройка Vercel/Netlify. GitHub Actions для автоматизации тестов и сборки.'
  }
];

export const rules = {
  practice: 'Учись на практике, а не на теории. Изучение React и FastAPI требует не только теории, но и постоянной практики. Вместо того чтобы застревать на бесконечных курсах, сразу начинай писать код. После каждого урока закрепляй знания мини-проектом — например, изучил useState? Сделай счётчик. Разобрал работу с API? Выведи данные о погоде. Лучший способ научиться — клонировать простые сервисы вроде Todo-листа, форума или чата.',
  code: 'Разбирай чужой код и используй готовые решения. Чтобы ускорить обучение, анализируй чужой код и используй готовые решения. Изучай реальные проекты на GitHub, например, шаблоны FastAPI + React. Подключай проверенные библиотеки — MUI для интерфейса, Axios для запросов — и не трать время на изобретение велосипедов. Если что-то не получается, первым делом заглядывай в официальную документацию React и FastAPI — там часто есть ответы на самые сложные вопросы.',
  focus:
    'Сфокусируйся на одной фиче за раз. Главный секрет прогресса — фокусировка на одной фиче за раз. Разбивай проект на маленькие этапы: сегодня — авторизация, завтра — лента постов. Каждую функцию тестируй отдельно: сначала сделай бэкенд-эндпоинт, потом прикручивай фронтенд. И не откладывай деплой — выкладывай проект на Vercel и Render с самого начала, чтобы видеть результат и мотивировать себя.',
}
