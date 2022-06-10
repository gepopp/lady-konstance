<template>

    <Transition>
        <div class="fixed top-0 h-screen w-16 md:w-20 border-r border-black py-5 flex flex-col justify-between" v-show="loaded">
            <div>
                <img src="/images/logo.svg" class="w-full h-auto" alt="Domina Lady Konstance Logo"/>
                <div class="mt-5 flex justify-center">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path>
                    </svg>
                </div>
                <div class="mt-5 flex justify-center">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                </div>
            </div>
            <div class="text-xs">
                <ul class="rotate-90 mb-5">
                    <li>Impressum</li>
                    <li>Datenschutz</li>
                </ul>
            </div>
        </div>
    </Transition>


    <div class="ml-16 md:ml-20 p-5 relative min-h-screen">
        <Transition>
            <div class="absolute top-0 right-0 m-5 z-50" v-show="loaded">
                <div class="w-8 h-8 rounded-full bg-opacity-90 shadow-lg flex justify-center items-center"
                     :class="nav ? 'bg-white' : 'bg-black'"
                     @click="nav = !nav">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" v-if="!nav">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                    <svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" v-else>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </div>
            </div>
        </Transition>

        <Transition name="width">
            <div class="absolute top-0 right-0 w-full h-1/3 bg-black z-10 flex items-center justify-center lg:justify-start lg:pl-20" v-show="nav">
                <Transition name="fade">
                    <a href="#" class="text-5xl text-white underline" v-show="nav">Die Lady</a>
                </Transition>
            </div>
        </Transition>
        <Transition name="width">
            <div class="absolute top-1/3 right-0 w-full h-1/3 bg-gray-900 z-10 flex items-center justify-center lg:justify-start lg:pl-20" v-show="nav">
                <Transition name="fade">
                    <a href="#" class="text-5xl text-white underline" v-show="nav">Das Spiel</a>
                </Transition>
            </div>
        </Transition>
        <Transition name="width">
            <div class="absolute top-2/3 right-0 w-full h-1/3 bg-gray-800 z-10 flex items-center justify-center lg:justify-start lg:pl-20" v-show="nav">
                <Transition name="fade">
                    <a href="#" class="text-5xl text-white underline" v-show="nav">Die Bilder</a>
                </Transition>
            </div>
        </Transition>


        <slot/>
    </div>
</template>

<script>
import {Inertia} from "@inertiajs/inertia";


export default {
    name: "Layout",
    components: {},
    data() {
        return {
            loaded: false,
            nav: false
        }
    },
    mounted() {
        Inertia.on('navigate', (event) => {
            this.loaded = true;
        });

        window.onload=function(){ setTimeout(function(){ 		window.scrollTo(0, 1); 	}, 0); }
    }

}
</script>

<style scoped>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
    transition-delay: .5s;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-active:nth-child(1),
.fade-leave-active:nth-child(1) {
    transition-delay: 1s;
}
.fade-enter-active:nth-child(2),
.fade-leave-active:nth-child(2) {
    transition-delay: 2s;
}
.fade-enter-active:nth-child(2),
.fade-leave-active:nth-child(2) {
    transition-delay: 3s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
.fade-leave-to{
    display: none;
}





.width-enter-active,
.width-leave-active {
    transition: width 0.5s ease;
}

.width-enter-active:nth-child(2),
.width-leave-active:nth-child(2) {
    transition-delay: 0.25s;
}

.width-enter-active:nth-child(3),
.width-leave-active:nth-child(3) {
    transition-delay: 0.5s;
}

.width-enter-from,
.width-leave-to {
    width: 0;
}


</style>
