<template>
    <div class="banner" style="margin-bottom:12px;">
        <div class="fill content">
            <div class="fill flex">
                <div class="flex-one character-info align-center" style="">
                    <div class="inline-block text-left" style="padding-left:8px;">
                        <p>Programmer</p>
                        <p>Age</p>
                        <p>Critical thinking</p>
                        <p>Communication</p>
                        <p>Team work</p>
                        <p>Independence</p>
                    </div>
                    <div class="inline-block text-left" style="padding-left:8px; font-weight: 600;align-self:center;">
                        <p>Julius</p>
                        <p>{{ time }} days</p>
                        <p>8 / 10</p>
                        <p>9 / 10</p>
                        <p>7 / 10</p>
                        <p>8 / 10</p>
                    </div>
                </div>
                <div class="flex-one align-center" style="justify-content:flex-end" >
                    <img class="portrait" alt="Programmer headshot" src="../assets/headshot.png">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment'
export default {
    data: function () {
        return {
            birth: moment("01-28-1992 11:30").format('DD MM YYYY hh:mm'),
            time: moment().diff('1992-01-28 11:30', 'days')
        }
    },
    computed: {

    }
}
</script>