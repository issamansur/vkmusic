#!/bin/bash

# Переход в директорию проекта
cd ./vkmusic-backend/

# Активация виртуальной среды
. ./.venv/bin/activate

# Запуск сервера с использованием uvicorn
uvicorn main:app --reload

# Ожидание ввода для завершения скрипта
read -p "Press Enter to exit..."