<template>
    <div class="relative">
    <div class="absolute w-screen m-0 max-w-full">
        <router-view/>
    </div>
    <div v-show="this.getLoadingState"
    class="top-0 absolute bg-gray-200 bg-opacity-40 z-[10000] mx-auto w-screen h-screen">
        <div class="top-[44%]">
            <Loading/>
        </div>
    </div>
    </div>
</template>

<script>
import Loading from "./components/Loading.vue"
import {mapMutations, mapGetters} from "vuex"
    export default {
        data(){
            return {
                showLoading: true
            }
        },
        components: {
            Loading
        },
        computed: {
            ...mapGetters({
                getLoadingState: "getLoadingState"
            })
        },
        methods: {
            ...mapMutations({
                closeLoading: "closeLoading",
                displayLoading: "displayLoading"
            })
        },
    }
</script>
