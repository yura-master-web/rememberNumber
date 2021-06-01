<template lang="pug">
label
    input(
        type="radio",
        :value="value",
        :checked="shouldBeChecked",
        @change="updateInput"
    )
    | {{ label }}
</template>

<script>
export default {
    name: 'InputRadio',
    model: {
        prop: 'modelValue',
        event: 'change',
    },
    props: {
        value: {
            type: [String, Number],
            default: '',
        },
        modelValue: {
            type: [String, Number],
            default: '',
        },
        label: {
            type: String,
            required: true,
        },
    },
    computed: {
        shouldBeChecked() {
            return String(this.modelValue) === this.value
        },
    },
    methods: {
        updateInput() {
            this.$emit('change', this.value)
        },
    },
}
</script>
