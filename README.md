# test_for_JF

Тестовое задание

## Настройки проекта

- Склонировать проект к себе и перейти в папку
	```git
	git clone https://github.com/vladioluss/test_work.git
	cd test_work
	```
	

- Проверить установлен ли node js командой ```node -v```<br>
	Если установлен, то перейти к  "Установка зависимостей", если же node js не стоит - установить по ссылке https://nodejs.org/en/download

## Установка зависимостей

- ### Способ через ```npm```

	1. Проверить установлен ли npm
		```sh
		npm --v
		```
		Если в консоле нет ошибок и показало версию например 8.5.5 - npm установлен.<br>
		Если не установлен, то коммандой ```npm install -g npm``` ставим npm.

	2. Установить пакеты
		```sh
		npm install
		```

	3. Запустить проект
		```sh
		npm run dev
		```

- ### Способ через ```yarn``` (если уже ранее был установлен npm)
	1. Проверить установлен ли yarn
		```sh
		yarn --version
		```
	Если в консоле нет ошибок и показало версию например ```1.22.19``` - yarn установлен.<br>
	Если не установлен, то коммандой ```npm install --global yarn``` ставим yarn.

	2. Запустить проект
		```sh
		yarn dev
		```