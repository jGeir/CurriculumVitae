<template>
    <div style="background-color:light-gray;">
        <div class="job" style="line-height: 150%;">
            <div class="flex" style="margin-bottom: 8px;">
                <h3 class="">{{title}}</h3>
                <span class="">{{duration}}</span>
            </div>
            <div class="flex" style="margin-bottom: 8px;">
                <h4 class="" style="align-self:center;">{{company}}</h4>
                <toggle-button 
                    v-show="showToggle"
                    @change="flipToggle()"
                    style="align-self:center;"
                    :labels="{checked: 'Description', unchecked: 'Technical'}" 
                    :switch-color="{checked: '#25EF02', unchecked: 'linear-gradient(red, yellow)'}"
                    :color="{checked: 'pink', unchecked: 'linear-gradient(green, red)'}"
                    :value="toggleInfo"
                    :width=130
                    :height=30
                    :font-size=16
                    :margin=3
                    :sync="true"
                />
                <img :class="company" :alt="company" v-bind:src="imgPath" style="" />
            </div>

            <div v-show="!toggleInfo" v-bind:id="company + '-description'" >
                <p>
                    {{ paragraphOne }}
                </p>
                <p>
                    {{ paragraphTwo }}
                    <anchor :isVisible="showAnchor" text="Greiðslumat" href="https://www.landsbankinn.is/einstaklingar/sjalfsafgreidsla/innskraning?greidslumat" />
                    {{ paragraphTwoEnding}}
                </p>
                <p>
                    {{ paragraphThree }}
                </p>
            </div>
            <div v-show="toggleInfo" v-bind:id="company + '-technical'">
                <p>{{ techOne }}</p>
                <p>{{ techTwo }}</p>
                <p>{{ techThree }}</p>
            </div>



            <!-- <p>
                {{ mainParagraph }}
            </p>
            <p>
                {{ secondParagraph }}
                <anchor text="Greiðslumat" href="https://www.landsbankinn.is/einstaklingar/sjalfsafgreidsla/innskraning?greidslumat" />
                {{ secondParagraphEnding }}
            </p>
            <FaviconBtn favicon="fas fa-angle-double-down" title="Landsbankinn Tech stack" :techStack="techStack" />            
            <p>
                One and a half year spent in Orkuveita Reykjavík in various projects, roles and positions.
                
            </p> -->
        </div>
    </div>
</template>

<script>
// import FaviconBtn from '../Html/FaviconBtn.vue';
import Anchor from '../Html/Anchor.vue'
import { ToggleButton } from 'vue-js-toggle-button'

export default {
    data: function() {
        return {
            imgPath: require('../../assets/' + this.company + '.png'),
            toggleInfo: false
        }
    },
    methods: {
        flipToggle() {
            this.toggleInfo = !this.toggleInfo
        }
    },
    props: {
        company: String,
        title: String,
        duration: String,
        showAnchor: {
            type: Boolean,
            default: true
        },
        showToggle: {
            type: Boolean,
            default: true
        },
        paragraphOne: String,
        paragraphTwo: String,
        paragraphTwoEnding: String,
        paragraphThree: String,
        techOne: String,
        techTwo: String,
        techThree: String,
    },
    components: {
        // FaviconBtn,
        Anchor,
        ToggleButton
    },
}
</script>