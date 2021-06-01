import InputRadio from '@/components/InputRadio'
import InputRange from '@/components/InputRange'

import {randomInteger, preparedNumbers} from './helper-functions'

export default {
    name: 'TrainerRememberNumber',
    components: {
        InputRadio,
        InputRange,
    },
    data() {
        return {
            category: 2,
            showTime: 0.2,
            randomNumber: null,
            saveRundomNumber: null,
            showInputAnswer: false,
            showResultGood: false,
            showResultBad: false,
        }
    },
    computed: {
        showResultMessage() {
            /* eslint-disable */
            return this.showResultGood
                ? 'Правильно'
                : this.showResultBad
                ? 'Неправильно'
                : ''
            /* eslint-enable */
        },
    },
    methods: {
        start() {
            this.randomNumber = randomInteger(
                preparedNumbers(1, this.category),
                preparedNumbers(9, this.category),
            )
            this.showInputAnswer = false
            this.showResultGood = false
            this.showResultBad = false
            setTimeout(() => {
                this.saveRundomNumber = this.randomNumber
                this.randomNumber = null
                this.showInputAnswer = true
            }, this.showTime * 1000)
        },
        onInput(event) {
            const number = Number(event.target.value)
            const lengthNumbers = event.target.value.length
            if (
                lengthNumbers === Number(this.category) &&
                !(this.showResultGood || this.showResultBad)
            ) {
                if (number === this.saveRundomNumber) {
                    this.showResultGood = true
                } else {
                    this.showResultBad = true
                }
            }
        },
    },
}
