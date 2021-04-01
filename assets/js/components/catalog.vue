<template>
    <div>
        <div class="row">
            <div class="col-12">
                <h1>
                    Products
                </h1>
            </div>
        </div>

        <product-list :products="products" />

        <div class="row">
            <legend-component :title="legend" />
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import LegendComponent from '@/components/legend';
import ProductList from '@/components/product-list';

export default {
    name: 'Catalog',
    components: {
        LegendComponent,
        ProductList,
    },
    data: () => ({
        legend: 'This is the Legend attribute',
        products: [],
    }),
    async created() {
        // axios.get('/api/products').then((response) => {
        //     console.log(response);
        // });
        const response = await axios.get('/api/products');

        this.products = response.data['hydra:member'];
    },
};
</script>

<style scoped>

</style>
