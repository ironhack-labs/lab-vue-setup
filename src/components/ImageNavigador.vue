<template>
  <img :src="getCurrentImage()" />
  <div>
    <button @click="previous">{{ "<" }}</button>
    <button @click="next">{{ ">" }}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgHistory: [],
      index: 0,
    };
  },
  props: {
    msg: String,
  },
  methods: {
    next() {
      if (this.index >= this.imgHistory.length) {
        this.getNewRandomImage();
      }

      this.index++;
    },
    previous() {
      if (this.index > 0) {
        this.index--;
      }
    },
    getCurrentImage() {
      return this.imgHistory[this.index - 1];
    },
    getNewRandomImage() {
      let randomNumber = Math.round(Math.random() * 100);
      const newPic = `https://picsum.photos/seed/${randomNumber}/200/300`;
      this.imgHistory = [...this.imgHistory, newPic];
    },
  },
};
</script>

<style></style>
