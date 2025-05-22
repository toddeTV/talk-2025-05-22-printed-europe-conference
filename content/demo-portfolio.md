---
layout: basic
---

<div class="relative">
    <WindowWrapper
        background="#E1F4FF"
        style="height: 525px !important; max-height: 525px !important; min-height: 525px !important;"
    >
        <iframe
            src="https://bruno-simon.com/"
            width="100%"
            height="500px"
        />
    </WindowWrapper>
    <div class="p-3 flex flex-col gap-2 absolute top-9 left-2 bg-white rounded-md border z-10 justify-center items-center">
        <QRCode content="https://bruno-simon.com/" :size="64" />
        <div class="w-full text-xs whitespace-nowrap flex flex-row gap-1 justify-center">
            <mdi-web class="baseColor" />
            <MyLink to="https://bruno-simon.com/">bruno-simon.com</MyLink>
        </div>
    </div>
</div>

<img
    v-click
    src="/assets/portfolio-bruno-simon.png"
    class="absolute w-[40%] bottom-23 right-18"
/>

<!--
person "Bruno Simon"
-->
