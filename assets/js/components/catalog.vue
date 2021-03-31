<template>
    <div>
        <div class="row">
            <div class="col-12">
                <h1>
                    Products
                </h1>
            </div>
        </div>

        <div class="row">
            <div class="col-xs-12 col-6 mb-2 pb-2">
                TODO - load some products!
            </div>
        </div>

        <div class="row">
            <legend-component :title="legend" />
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import LegendComponent from '@/components/legend';

export default {
    name: 'Catalog',
    components: {
        LegendComponent,
    },
    data: () => ({
        legend: 'This is the Legend attribute',
    }),
    mounted() {
        axios.get('/api/products').then((response) => {
            console.log(response);
        });
    },
};
</script>

<style scoped>

</style>
