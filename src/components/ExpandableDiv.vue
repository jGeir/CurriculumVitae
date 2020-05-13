<template>
    <div v-show="displayDiv">
        {{ techStack }}
    </div>
</template>

<script>
export default {
    props: {
        displayDiv: {
            type: Boolean,
            default: false
        },
        techStack: {
            type: String,
            default: ""
        }
    },
    methods: {
        toggleDiv: function() {
            this.displayDiv = !this.displayDiv;
        }
    }
}
</script>