<template>
    <div class="grid gap-y-16 px-52 py-6">
        <router-link to="/" class="font-bold text-sm text-nora-gray-400">Go back</router-link>

        <div class="card bg-red-200 p-10 rounded-xl relative">
            <div class="circle flex justify-center items-center rounded-full w-14 h-14 bg-nora-purple ">
                <span class="font-bold text-2xl text-white">+</span>
            </div>
            <h2 class="text-nora-blue-300 font-bold text-2xl mb-10">Editing "test post"</h2>

            <div class="grid gap-y-2 mb-5">
                <span class="font-bold text-sm text-nora-blue-300">Feedback Title</span>
                <span class="text-sm font-normal text-nora-gray-400">Add a short, descriptive headline</span>
                <input class="bg-nora-gray-100 rounded-md outline-none h-10" type="text">
            </div>

            <div class="grid gap-y-2 mb-5">
                <span class="font-bold text-sm text-nora-blue-300">Category</span>
                <span class="text-sm font-normal text-nora-gray-400">Choose a category for your feedback</span>
                <input class="bg-nora-gray-100 rounded-md outline-none h-10" type="text">
            </div>

            <div class="grid gap-y-2 mb-5">
                <span class="font-bold text-sm text-nora-blue-300">Feedback Detail</span>
                <span class="text-sm font-normal text-nora-gray-400">Include any specific comments on what should be improved, added, etc.</span>
                <textarea class="bg-nora-gray-100 rounded-md outline-none h-20"></textarea>
            </div>

            <div class="flex w-full justify-end gap-x-4">
                <div class="bg-nora-blue-300 rounded-md px-5 py-3 cursor-pointer">
                    <span class="text-white font-bold">Cancel</span>
                </div>
                <div class="bg-nora-purple rounded-md px-5 py-3 cursor-pointer">
                    <span class="text-white font-bold">Add Feedback</span>
                </div>
            </div>     
        </div>
    </div>
</template>

<style>
.circle {
    top: -25px;
    position: absolute;
}
</style>