import {compile, createApp} from 'vue';


const template = '<h1>Hello {{ firstName }}! Is this cooler?</h1>';

createApp({
    data() {
        return {
            firstName: 'Miroslav',
        };
    },
    render() {
        return compile(template)(this.$.ctx);
    },
}).mount('#app');
