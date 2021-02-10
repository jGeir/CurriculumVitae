<template>
    <div class="banner" style="margin-bottom:12px;">
        <div class="fill content">
            <div class="fill flex">
                <div class="flex-one character-info align-center" style="">
                    <div class="inline-block text-left" style="padding-left:8px;">
                        <p>Programmer</p>
                        <p>Communication</p>
                        <p>Critical thinking</p>
                        <p>Independence</p>
                        <p>Team work</p>
                        <p>Age</p>
                    </div>
                    <div class="inline-block text-left" style="padding-left:8px;align-self:center;">
                        <p>Julius</p>
                        <p>9 / 10</p>
                        <p>8 / 10</p>
                        <p>8 / 10</p>
                        <p>7 / 10</p>
                        <p>{{ time }}</p>
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
            availableUnit: [
                { variable: 'hours' },
                { variable: 'days' },
                { variable: 'months' },
                { variable: 'years' },
                { variable: 'decades' }
            ],
            time: this.timeSinceFormat(),
            listPos: 1
        }
    },
    methods: {
        formatMomentNumber: function(timeUnit) {
            // function to fight code clutter.
            return new Intl.NumberFormat('is-IS').format(moment().diff('1992-01-28 11:30', timeUnit));
        },
        timeSinceFormat: function(timeUnit) {
            if(timeUnit) {
                if(timeUnit === 'decades') {
                    // Decades do not exist in the Moment pack.
                    this.time = this.formatMomentNumber('years') / 10 + ' decades'
                    return this.time
                }
                this.time =  this.formatMomentNumber(timeUnit) + ' ' + timeUnit
                return this.time
            } else {
                //First time rendering - No parameter - init timeunit interval
                this.time = this.formatMomentNumber('hours') + ' hours'
                this.interval = setInterval(() => this.switchTimeUnits(), 3000)
                return this.time
            }
        },
        switchTimeUnits: function() {
            this.timeSinceFormat(this.availableUnit[this.listPos].variable)
            this.listPos++;
            // End of list check
            if(this.listPos >= 5) this.listPos = 0;
        }
    }
}
</script>