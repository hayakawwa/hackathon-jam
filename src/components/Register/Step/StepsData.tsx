import RegisterSteps from "@/enums/RegisterSteps";
import {IInputProps} from "@/components/ui-kit/Input/Input";
import {IPlateProps} from "@/components/ui-kit/Plate/Plate";
import {ITextareaProps} from "@/components/ui-kit/Textarea/Textarea";
import {IMultiselectProps} from "@/components/ui-kit/Multiselect/Multiselect";

interface IStepData {
    title: string,
    descriptions?: string[],
    inputs?: IInputProps[],
    plates?: IPlateProps[],
    textarea?: ITextareaProps,
    multiselect?: IMultiselectProps,
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
        plates: [
            {
                title: 'Я - участник хакатона',
                value: 'member',
                name: 'is_organisator'
            },
            {
                title: 'Я - организатор хакатонов',
                value: 'organisator',
                name: 'is_organisator'
            },
        ]
    },
    [RegisterSteps.Name]: {
        title: 'Как вас зовут?',
        inputs: [
            {
                placeholder: 'Никнейм',
                required: true,
                name: 'username'
            },
            {
                placeholder: 'Фамилия',
                required: true,
                name: 'last_name'
            },
            {
                placeholder: 'Имя',
                required: true,
                name: 'first_name'
            },
            {
                placeholder: 'Отчество',
                name: 'middle_name'
            },
        ],
    },
    [RegisterSteps.Skills]: {
        // TODO: сделать селект для навыков
        title: 'На чем вы специализируетесь?',
        descriptions: ['Укажите как минимум 3 ваших навыка'],
        multiselect: {
            placeholder: 'Добавьте навыки',
            name: 'skills',
            maxOptionsSelected: 3,
            options: ['JS', 'Frontend', 'Backend', 'DevOps', 'Python'],
        },

    },
    [RegisterSteps.Activity]: {
        title: 'Ваша деятельность',
        plates: [
            {
                title: 'Я - студент СУЗа или ВУЗа',
                value: 'student',
                name: 'activity'
            },
            {
                title: 'Я - школьник',
                value: 'pupil',
                name: 'activity'
            },
            {
                title: 'Я работаю в IT',
                value: 'worker',
                name: 'activity'
            },
            {
                title: 'Я ищу свое место в IT',
                value: 'seeker',
                name: 'activity'
            },
        ]
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
        descriptions: ['Укажите ваш населенный пункт', 'Будем подбирать хакатоны рядом с вами'],
        inputs: [
            {
                placeholder: 'Локация',
                name: 'location'
            },
        ],
    },
    [RegisterSteps.Avatar]: {
        title: 'Загрузите фото профиля',
        // TODO: сделать выбор аватара из файлов
    },
    [RegisterSteps.Bio]: {
        title: 'Расскажите о себе',
        descriptions: ['Расскажите о себе. Это поможет тимлидам пригласить вас в команду'],
        textarea: {
            children: '',
            name: 'bio'
        }
    },
}