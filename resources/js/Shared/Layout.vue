<template>
    <div class="fixed top-0 h-screen w-16 md:w-20 border-r border-black py-5 flex flex-col justify-between">
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
    <div class="ml-16 md:ml-20 p-5 relative">
        <div class="absolute top-0 right-0 m-5">
            <div class="w-8 h-8 rounded-full bg-black bg-opacity-90 shadow-lg flex justify-center items-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </div>
        </div>
        <slot/>
    </div>
</template>

<script>
export default {
    name: "Layout",
    components: {},
    data() {
        return {}
    },

}
</script>

<style scoped>
/* we will explain what these classes do next! */
.slide-enter-active,
.slide-leave-active {
    width: 100%;
    transition: width 1s ease;
}

.slide-enter-from,
.slide-leave-to {
    width: 0 !important;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
    transition-delay: 1.25s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
