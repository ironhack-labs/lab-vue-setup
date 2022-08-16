<template>
<h1> Este es el componente TodoItem</h1>
<div class="interpolacion">
<h5> {{ title }}</h5>
</div>
</template>

<script>
export default {
  name: 'TodoItem',
  data() {
    return {
      title: 'Interpolación texto',
    };
  },
};
</script>
