<template>
    <div>
        <div v-for="item in items" :key="item.id">
            {{ item }}
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                items: [{
                    id:'333',
                    value:'333'
                }]
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>