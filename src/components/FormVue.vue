<template>
  <div>
    <h3>This is a simple form to test v-model directive.</h3>
    <form>
      <fieldset>
        <legend>They test for equality</legend>
        <input type="text" v-model="email" />
        <input
          type="text"
          :class="{ hasError: !isSameText() }"
          v-model="email_double_check"
        />
        <div class="errorMsg" :class="{ hasError: !isSameText() }">
          {{ this.showError() }}
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      email_double_check: "",
    };
  },
  methods: {
    isSameText() {
      return this.email === this.email_double_check;
    },
    showError() {
      return !this.isSameText() ? "The text should be equals ⚠️" : "";
    },
  },
};
</script>

<style scope>
.errorMsg {
  margin-top: 0.25rem;
}

.hasError {
  color: red;
}

form {
  margin-top: 2rem;
}

input {
  display: block;
  margin: auto;
}
</style>
