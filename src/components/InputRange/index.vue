<template lang="pug">
label
    input(
        type="range",
        :value="modelValue",
        :min="min",
        :max="max",
        :step="step",
        @input="updateInput"
    )
    | {{ modelValue }}
</template>

<script>
export default {
    name: 'InputRange',
    model: {
        prop: 'modelValue',
        event: 'input',
    },
    props: {
        modelValue: {
            type: [String, Number],
            default: '',
        },
        min: {
            type: String,
            required: true,
        },
        max: {
            type: String,
            required: true,
        },
        step: {
            type: String,
            required: true,
        },
    },
    methods: {
        updateInput(event) {
            this.$emit('input', Number(event.target.value))
        },
    },
}
</script>
