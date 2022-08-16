<template>
  <h1>Hi</h1>
  <div class="cars">
    <div class="car" v-for="obj in data" :key="obj.model">
      <div class="header">
        {{ obj.model }}
      </div>
      <div class="body">
        {{ obj.year }} -
        {{ obj.color }} -
        {{ obj.price }}

      </div>

    </div>
  </div>
  <button @click="helloWorld()">Hello World:D</button>
</template>

<script>

export default {
  methods: {
    helloWorld() {
      console.log('Hello World');
    },
  },
  data() {
    const data = [
      {
        model: 'Ford Mustang',
        year: '1967',
        color: 'red',
        price: '$30,000',
      },
      {
        model: 'Tesla Model S',
        year: '2016',
        color: 'black',
        price: '$70,000',
      },
      {
        model: 'Tesla Model X',
        year: '2017',
        color: 'green',
        price: '$80,000',
      },
      {
        model: 'Tesla Model 3',
        year: '2018',
        color: 'blue',
        price: '$90,000',
      },
      {
        model: 'Volkswagen Golf',
        year: '2016',
        color: 'black',
        price: '$10,000',
      },
    ];
    return {
      data,
    };
  },
};
</script>

<style>
.cars {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.car {
  width: 200px;
  height: 200px;
}
</style>
