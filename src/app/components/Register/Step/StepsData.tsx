import RegisterSteps from "@/app/enums/RegisterSteps";
import {IInputProps} from "@/app/components/ui-kit/Input/Input";

interface IStepData {
    title: string,
    description?: string[],
    inputs?: IInputProps[],
    plates?: any[],
    textarea?: any,
}

type IStepsData = {
    [key in RegisterSteps]: IStepData
}

export const stepsData: IStepsData = {
    [RegisterSteps.Initial]: {
        title: 'Регистрация',
        inputs: [
            {
                placeholder: 'Почта',
                required: true,
                name: 'email'
            },
            {
                placeholder: 'Пароль',
                required: true,
                isPassword: true,
                name: 'password'
            },
            {
                placeholder: 'Повторите пароль',
                required: true,
                isPassword: true,
                name: 'passwordRetry'
            },
        ],
    },
    [RegisterSteps.Role]: {
        title: 'Участник или организатор?',
    },
    [RegisterSteps.Name]: {
        title: 'Как вас зовут?',
        inputs: [
            {
                placeholder: 'Никнейм',
                required: true,
                name: 'nickname'
            },
            {
                placeholder: 'Фамилия',
                required: true,
                name: 'secondName'
            },
            {
                placeholder: 'Имя',
                required: true,
                name: 'firstName'
            },
            {
                placeholder: 'Отчество',
                name: 'middleName'
            },
        ],
    },
    [RegisterSteps.Skills]: {
        // TODO: сделать селект для навыков
        title: 'На чем вы специализируетесь?',
        description: ['Укажите как минимум 3 ваших навыка'],
        inputs: [
            {
                placeholder: 'Добавьте навыки',
                name: 'skills'
            },
        ],
    },
    [RegisterSteps.Activity]: {
        title: 'Ваша деятельность',
    },
    [RegisterSteps.Experience]: {
        title: 'Как долго вы работаете в своей сфере?',
        inputs: [
            {
                placeholder: 'Например, 1 год',
                name: 'experience'
            },
        ],
    },
    [RegisterSteps.Location]: {
        // TODO: сделать селект для локации
        title: 'Откуда вы?',
        description: ['Укажите ваш населенный пункт', 'Будем подбирать хакатоны рядом с вами'],
        inputs: [
            {
                placeholder: 'Локация',
                name: 'location'
            },
        ],
    },
    [RegisterSteps.Bio]: {
        // TODO: сделать textarea для uikit
        title: 'Расскажите о себе',
        description: ['Расскажите о себе. Это поможет тимлидам пригласить вас в команду'],
    },
    [RegisterSteps.Avatar]: {
        title: 'Загрузите фото профиля',
        // TODO: сделать выбор аватара из файлов
    },
}