export default {
  methods: {
    capitalize(arr) {
        for (let i = 0; i < arr.length; i++) {
          arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substring(1);
        }
        return arr;
    },
  }
}
