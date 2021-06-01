<template lang="pug">
.trainer
    h1 Запомни число
    .wrap-categiries
        .wrap-categiries__item
            h2 Разрядность числа
            InputRadio(v-model="category", label="2", value="2")
            InputRadio(v-model="category", label="3", value="3")
            InputRadio(v-model="category", label="4", value="4")
            InputRadio(v-model="category", label="5", value="5")

        .wrap-categiries__item
            h2 Время показа
            InputRange(
                v-model="showTime",
                min="0.2",
                max="2",
                step="0.1"
            )

    .wrap-btn
        button(type="button", @click="start") Старт

    .show-number(v-if="randomNumber")
        | {{ randomNumber }}

    .wrap-input(v-if="showInputAnswer")
        input(@keyup="onInput($event)")

    .show-result(v-if="showResultMessage")
        | {{ showResultMessage }}. Нажмите старт, что бы попробовать еще раз
    .helper
        p Примечание:
        p Можно ввести число только один раз, исправление не приведет к изменению ответа. (специально так сделал)
</template>

<script src="./script.js"></script>

<style lang="stylus" src="./style.styl"></style>
