# Список новостей
### тестовое задание

Реализовать 2 страницы:
1. Родительская – список новостей.
2. Дочерняя – страница новости.
Для каждой новости должны отображаться название, описание/содержание, дата публикации, фото.
На странице со списком новостей сделать кнопку, по нажатию на которую открывается модальное окно с формой:
* «Заголовок» - текстовое поле.
* «Текст» - текстовое поле.
* «Загрузить изображение» - кнопка, реализует функционал добавления фото (достаточно одной), есть возможность предпросмотра и удаления/замены.
* «Опубликовать новость» - кнопка, добавляет новость в начало списка. При этом уже загруженные ранее данные сохраняются.
Добавленные новости хранить в storage браузера таким образом, чтобы после перезагрузки страницы они отображались первыми. По нажатию на пользовательскую новость действий не предусмотрено.
Реализовать подгрузку данных по мере скроллинга страницы.
Сверстать в соответствии с макетом, реализовать адаптив. НЕ подключать при этом набор библиотек с готовыми компонентами и стилями – нам интересны ваши собственные навыки вёрстки и реализации базовых простых компонентов (таких, как, например, модальное окно).
Ссылка: https://www.figma.com/file/pWG5GyzlYRl427HX7JKE21/%D0%A2%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5?type=design&node-id=0-1&t=fC30I5igrwV3Mzr6-0
Источник данных:
1. Список новостей: https://webapi.autodoc.ru/api/news/1/10 (последние 2 параметра - номер страницы и количество элементов на ней).
2. Отдельная новость: url приходит на этапе получения списка новостей, пример ссылки:
https://webapi.autodoc.ru/api/news/item/avto-novosti/volkswagen_amarok_pickup

Использовать последнюю версию Angular.

# AutodocAngularTestTask

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
