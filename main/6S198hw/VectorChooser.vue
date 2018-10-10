<!-- Contributed by David Bau, in the public domain -->

<template>
<div class="vectorlist">
  <div v-for="(vector, index) in vectors" class="vector">
    <input v-model="vector.text">
    <button @click="selectVector(index)">&rarr;</button>
    <button @click="deleteVector(index)">x</button>
  </div>
  <div class="operation">
  <button @click="saveVector()">Save current sample</button>
  </div>
  <div class="operation">
  <!-- TODO: Change this button to do something interesting -->
  <button @click="applyVectorMath()">Apply vector math</button>
  </div>
  <!-- TODO: Add the KNN font ID button below -->
  <div class="operation">
  <button @click="getKNN()">Find nearest neighbor</button>
  </div>
</div>
</template>

<script>
import {Array1D, ENV} from 'deeplearn';

const math = ENV.math;

//This json file includes all of the Font IDs in our database and their 40-dimensional logits vector.
var json = require('../embeddings.json');

export default {
  props: {
    selectedSample: { },
    model: { },
    vectors: { type: Array, default: () => [ { text: "0" } ] }
  },
  methods: {
    saveVector() {
      this.selectedSample.data().then(x =>
         this.vectors.push({ text: Array.prototype.slice.call(x).join(',') })
      );
    },
    deleteVector(index) {
      this.vectors.splice(index, 1);
    },
    selectVector(index) {
      this.$emit("select", { selectedSample: this.model.fixdim(
           Array1D.new(this.vectors[index].text.split(',').map(parseFloat)))});
    },
    // TODO: Add useful vector space operations here -->
    applyVectorMath() {
      this.$emit("select", { selectedSample:
           math.add(this.selectedSample, this.model.fixdim(
               Array1D.new([-0.005252489942405373, -0.12699592659238726, 0.09722971428422257, 0.06747729866774753, 0.06019306076042354, -0.11578066612064838, 0.05226033326611854, -0.007015018414221704, 0.12019512269273401, 0.10801294691115618, -0.07633629628515802, 0.05265971608403139, 0.01802763230988756, 0.06759664337625727, -0.010608245387894568, 0.12154366025872529, -0.07229645573280752, -0.029588537226766347, -0.07407505989991128, -0.010062588633242995, -0.05373228831735556, -0.1106104020959884, 0.22270563267610968, 0.11138153887756169, 0.014185903234686702, -0.05879176322657615, 0.053494758816361426, -0.1436588599197194, -0.21433381493836642, -0.03994490597683936, 0.26753579716801645, -0.1548165748116374, -0.02063086259624921, 0.025751660640905612, -0.10827948687538505, -0.10562514343034941, -0.2383918755121529, 0.0914843920307234, -0.08070455130603164, -0.042214738137004895]))) } )
    },

    //TODO: Implement getKNN to output the font ID of the nearest neighbor
    getKNN() {
      //this.$emit("select", { selectedSample:math.dot(this.selectedSample, this.model.fixdim(json.forEach())) } )
      //I have no idea how to do this.
    }

  },
  watch: {
    model: function(val) {
      for (let i = 0; i < this.vectors.length; ++i) {
        let arr = this.vectors[i].text.split(',');
        if (arr.length > this.model.dimensions) {
            arr = arr.slice(0, this.model.dimensions);
        }
        while (arr.length < this.model.dimensions) {
            arr.push('0');
        }
        this.vectors[i].text = arr.join(',');
      }
    }
  },
}
</script>

<style scoped>
.vector, .operation {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  white-space: nowrap;
}

</style>
