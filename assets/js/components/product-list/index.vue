<template>
    <div class="row">
        <div class="col-12">
            <div class="mt-4">
                <loading v-show="products.length === 0"/>
            </div>
        </div>
        <product-card
            v-show="products.length > 0"
            v-for="product in products"
            :key="product['@id']"
            :product="product"
        />
    </div>
</template>

<script>
import Loading from '@/components/loading';
import ProductCard from '@/components/product-list/product-card';

export default {
    name: 'ProductList',
    components: {
        Loading,
        ProductCard,
    },
    props: {
        products: {
            type: Array,
            requred: true,
        },
    },
};
</script>

<style scoped>

</style>
