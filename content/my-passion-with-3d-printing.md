---
layout: basic
---

# My Passion with 3D Printing

<div class="flex flex-row justify-between items-center px-20 p-t-10">
    <div class="flex flex-col items-center" v-click>
        <div>
            <img
                alt="DAGOMA Neva"
                class="h-40"
                src="/assets/3d-printers/Dagoma-Neva-Magis-6779-1.png"
            />
        </div>
        <span class="mt-6 mb-2">Dagoma Neva</span>
        <span class="text-sm">~ 2018</span>
    </div>
    <div class="flex flex-col items-center" v-click>
        <div>
            <img
                alt="Prusa i3 MK3S"
                class="h-40"
                src="/assets/3d-printers/MK3_NEF_500px-1.png"
            />
        </div>
        <span class="mt-6 mb-2">Prusa i3 MK3S</span>
        <span class="text-sm">~ 2020</span>
    </div>
    <div class="flex flex-col items-center text-5xl font-bold" v-click="2">
        . . .
    </div>
</div>

<div
    class="absolute left-0 top-25 bg-white/20 w-full h-75 flex justify-center items-center backdrop-blur-sm
           text-3xl pt-80"
    v-click
>
    3D Printing is my Hobby
</div>

<div
    class="absolute left-0 top-130 w-full flex justify-center text-3xl"
    v-click
>
    Web is my Work
</div>

<Arrow
  v-click
  v-bind="{ x1:500, y1:510, x2:500, y2:455, color: '#000000' }"
/>
