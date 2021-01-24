<template>
    <button @click="executeFn">
        <i :class="currentFavicon"> {{title}}</i>
        <expandable-div :displayDiv="displayDiv" :techStack="techStack" />
    </button>
</template>

<script>
import ExpandableDiv from '../ExpandableDiv.vue';
export default {
    data: function () {
        return {
            displayDiv: false,
            currentFavicon: this.favicon
        }
    },
    props: {
        title: {
            type: String,
            required: true
        },
        favicon: {
            type: String,
            required: true
        },
        faviconExpanded: {
            type: String,
        },
        techStack: {
            type: String
        }
    },
    methods: {
        executeFn() {
            this.displayDiv = !this.displayDiv;
            if(this.faviconExpanded) {
                if(this.displayDiv) {
                    this.currentFavicon = this.faviconExpanded;
                } else {
                    this.currentFavicon = this.favicon;
                }
            }
        }
    },
    components: {
        ExpandableDiv
    }
}
</script>