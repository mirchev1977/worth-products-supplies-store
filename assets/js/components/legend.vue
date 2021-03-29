<template>
    <span class="p-3">
        <!--        Shipping takes 10-13 weeks, and products probably won\'t work-->
        {{ title }}
    </span>
</template>

<script>
export default {
    name: 'Legend',
    props: {
        title: {
            type: String,
            required: true,
        },
    },
};
</script>

<style scoped>

</style>
