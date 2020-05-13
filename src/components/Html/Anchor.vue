<template>
    <a v-show="isVisible" :href="href" target="_blank">{{ text }}</a> 
</template>

<script>
export default {
    props: {
        href: String,
        text: String,
        isVisible: {
            type: Boolean,
            default: true
        }
    }
}
</script>