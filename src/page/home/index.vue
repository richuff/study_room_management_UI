<template>
    <CommonBar>
        <s-scroll-view @scroll="scroll" :class="{main: true, main_menu: !menuStore.isflod }">
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
            <BottomBarWithFixed></BottomBarWithFixed>
        </s-scroll-view>
    </CommonBar>
</template>

<script setup lang="ts">
import CommonBar from '@/components/CommonBar/index.vue'
import BottomBarWithFixed from '@/components/BottomBarWithFixed/index.vue'
import { scroll } from '@/utils/scroll';
import MenuStore from '@/store/modules/menu';
let menuStore  = MenuStore()
</script>

<style lang="less">
@import url('../../assets/style.less');
.main{
    s-card {
        margin-bottom: 0.3rem;
    }
    margin-bottom: calc(@bottom-height + 1rem);
}
</style>