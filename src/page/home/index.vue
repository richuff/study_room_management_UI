<template>
    <CommonBar>
        <s-scroll-view @scroll="scroll" :class="{ main: true, main_menu: !menuStore.isflod }">
                <s-card :clickable="true" class="card">
                    <div slot="image">
                    </div>
                    <div slot="headline">Headline</div>
                    <div slot="subhead">Subhead</div>
                    <div slot="text">Cards are often used for grid lists, which provide click effects</div>
                </s-card>
                <s-card :clickable="true" class="card">
                    <div slot="image">
                        
                    </div>
                    <div slot="headline">Headline</div>
                    <div slot="subhead">Subhead</div>
                    <div slot="text">Cards are often used for grid lists, which provide click effects</div>
                </s-card>
                <br>
                <s-card :clickable="true" class="card">
                    <div slot="image">
                    </div>
                    <div slot="headline">Headline</div>
                    <div slot="subhead">Subhead</div>
                    <div slot="text">Cards are often used for grid lists, which provide click effects</div>
                </s-card>
                <br>
                <s-card :clickable="true" class="card">
                    <div slot="image">
                    </div>
                    <div slot="headline">Headline</div>
                    <div slot="subhead">Subhead</div>
                    <div slot="text">Cards are often used for grid lists, which provide click effects</div>
                </s-card>
                <br>
                <s-card :clickable="true" class="card">
                    <div slot="image">
                    </div>
                    <div slot="headline">Headline</div>
                    <div slot="subhead">Subhead</div>
                    <div slot="text">Cards are often used for grid lists, which provide click effects</div>
                </s-card>
                <s-card :clickable="true" class="card">
                    <div slot="image">
                    </div>
                    <div slot="headline">Headline</div>
                    <div slot="subhead">Subhead</div>
                    <div slot="text">Cards are often used for grid lists, which provide click effects</div>
                </s-card>
                <BottomBar></BottomBar>
        </s-scroll-view>
    </CommonBar>
</template>

<script setup lang="ts">
import CommonBar from '@/components/CommonBar/index.vue'
import BottomBar from '@/components/BottomBar/index.vue'
import { scroll } from '@/utils/scroll';
import MenuStore from '@/store/modules/menu';
let menuStore  = MenuStore()

</script>

<style lang="less">

</style>